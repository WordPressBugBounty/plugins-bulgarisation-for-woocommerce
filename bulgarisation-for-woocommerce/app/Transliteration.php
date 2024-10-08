<?php
namespace Woo_BG;

class Transliteration {
    public static function latin2cyrillic( $word ) {
        $strange_words = apply_filters( 'woo_bg/transliteration/strange_words', array(
            'sofia' => 'софия',
        ) );

        if ( in_array( strtolower( $word ), array_keys( $strange_words ) ) ) {
            $word = $strange_words[ strtolower( $word ) ];
        }

        $cyr = [
            'ч', 'Ч', 'щ', 'Щ', 'ш', 'Ш',
            'ц', 'Ц', 'ц', 'Ц',
            'ю', 'Ю', 'ю', 'Ю',
            'я', 'Я', 'я', 'Я',
            'а', 'А', 'б', 'Б', 'в', 'В', 'в', 'В',
            'г', 'Г', 'д', 'Д', 'е', 'Е',
            'ж', 'Ж', 'ж', 'Ж', 'з', 'З',
            'и', 'И',
            //'й', 'Й',
            'к', 'К', 'л', 'Л', 'м', 'М', 'н', 'Н',
            'о', 'О', 'п', 'П', 'р', 'Р', 'с', 'С',
            'т', 'Т', 'у', 'У', 'ф', 'Ф', 'х', 'Х',
            'ъ', 'Ъ',
            //'ь',
        ];

        $lat = [
            'ch', 'CH', 'sht', 'SHT', 'sh', 'SH',
            'c', 'C', 'ts', 'TS',
            'iu', 'IU', 'yu', 'YU',
            'q', 'Q', 'ya', 'YA',
            'a', 'A', 'b', 'B', 'v', 'V', 'w', 'W',
            'g', 'G', 'd', 'D', 'e', 'E',
            'zh', 'ZH', 'j', 'J', 'z', 'Z',
            'i', 'I',
            //'', '',
            'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N',
            'o', 'O', 'p', 'P', 'r', 'R', 's', 'S',
            't', 'T', 'u', 'U', 'f', 'F', 'h', 'H',
            'y', 'Y',
            //'',
        ];

        $textcyr = str_replace($lat, $cyr, $word);

        return $textcyr;
    }
}