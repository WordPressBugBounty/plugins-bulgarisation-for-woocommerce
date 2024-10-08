<?php
namespace Woo_BG\Export\Nra\Xml;

class Shop {
    private string $eik;

    private string $shopUniqueNumber;

    private string $domain;

    private \DateTime $fileCreatedAt;

    private bool $isMarketplace;

    private int $year;

    private int $month;

    /**
     * @var Order[]
     */
    private array $orders;

    /**
     * @var ReturnedOrder[]
     */
    private array $returnedOrders;

    public function __construct(
        string $eik,
        string $shopUniqueNumber,
        string $domain,
        \DateTime $fileCreatedAt,
        bool $isMarketplace,
        int $year,
        int $month,
        array $orders = [],
        array $returnedOrders = []
    ) {
        $this->eik = $eik;
        $this->shopUniqueNumber = $shopUniqueNumber;
        $this->domain = $domain;
        $this->fileCreatedAt = $fileCreatedAt;
        $this->isMarketplace = $isMarketplace;
        $this->year = $year;
        $this->month = $month;
        $this->orders = $orders;
        $this->returnedOrders = $returnedOrders;
    }

    /**
     * @return string
     */
    public function getEik(): string
    {
        return $this->eik;
    }

    /**
     * @return string
     */
    public function getShopUniqueNumber(): string
    {
        return $this->shopUniqueNumber;
    }

    /**
     * @return string
     */
    public function getDomain(): string
    {
        return $this->domain;
    }

    /**
     * @return \DateTime
     */
    public function getFileCreatedAt(): \DateTime
    {
        return $this->fileCreatedAt;
    }

    /**
     * @return bool
     */
    public function isMarketplace(): bool
    {
        return $this->isMarketplace;
    }

    /**
     * @return int
     */
    public function getYear(): int
    {
        return $this->year;
    }

    /**
     * @return int
     */
    public function getMonth(): int
    {
        return $this->month;
    }

    /**
     * @param Order $order
     */
    public function addOrder($order): void
    {
        $this->orders[] = $order;
    }

    public function addReturnedOrder($order): void
    {
        $this->returnedOrders[] = $order;
    }

    /**
     * @return Order[]
     */
    public function getOrders(): array
    {
        return $this->orders;
    }

    /**
     * @return array
     */
    public function getReturnedOrders(): array
    {
        return $this->returnedOrders;
    }

    public function getTotalAmountReturnedOrders(): float
    {
        $total = 0;
        foreach($this->returnedOrders as $order){
            $total+=$order->getOrderAmount();
        }

        return $total;
    }

    public function getOrdersTotal(): float
    {
        $total = 0;
        foreach($this->getOrders() as $order){
            $total+=$order->getOrderTotal();
        }

        return $total;
    }
    
    public function getOrdersTotalVat(): float
    {
        $total = 0;
        foreach($this->getOrders() as $order){
            $total+=$order->getOrderTotalVat();
        }

        return $total;
    }
}