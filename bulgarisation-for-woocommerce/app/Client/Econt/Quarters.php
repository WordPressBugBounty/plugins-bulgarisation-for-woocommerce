<?php
namespace Woo_BG\Client\Econt;
use Woo_BG\Container\Client;
use Woo_BG\File;

defined( 'ABSPATH' ) || exit;

class Quarters {
	const QUARTERS_ENDPOINT = 'Nomenclatures/NomenclaturesService.getQuarters.json';

	private $quarters = [];
	private $container;

	public function __construct( $container ) {
		$this->container = $container;
	}

	protected function load_quarters_by_city( $city_id ) {
		if ( ! is_dir( $this->container[ Client::ECONT ]::CACHE_FOLDER ) ) {
			wp_mkdir_p( $this->container[ Client::ECONT ]::CACHE_FOLDER );
		}

		$quarters_file = $this->container[ Client::ECONT ]::CACHE_FOLDER . 'quarters-' . $city_id . '.json';
		$quarters = File::get_file( $quarters_file );

		if ( !$quarters ) {
			$api_call = $this->container[ Client::ECONT ]->api_call( self::QUARTERS_ENDPOINT, array( 'cityID' => $city_id ) );

			if ( is_array( $api_call ) ) {
				if ( $this->container[ Client::ECONT ]::validate_access( $api_call ) ) {
					if ( !empty( $api_call['quarters'] ) ) {
						$quarters = wp_json_encode( $api_call );

						File::put_to_file( $quarters_file, $quarters );
					}
				}
			}
		}

		$quarters = json_decode( $quarters, 1 );

		$this->set_quarters( $quarters, $city_id );

		return $quarters;
	}

	//Getters
	public function get_quarters_by_city( $city_id ) {
		if ( empty( $this->quarters[ $city_id ] ) ) {
			$this->load_quarters_by_city( $city_id );
		}

		return $this->quarters[ $city_id ];
	}

	//Setters
	private function set_quarters( $quarters, $city_id ) {
		$this->quarters[ $city_id ] = $quarters;
	}

	public function format_quarters( $quarters ) {
		$formatted = [];

		foreach ( $quarters as $qtr ) {
			$formatted[ 'qtr-' . $qtr['id'] ] = $qtr['name'];
		}

		return $formatted;
	}
}
