class BasketDecorator {
    constructor(basket) {
        this.basket = basket;
    }

    addToBasket(clothes) {
        this.basket.addToBasket(clothes);
    }

    removeFromBasket(clothes) {
        this.basket.removeFromBasket(clothes);
    }

    listBasket() {
        return this.basket.listBasket();
    }
}

module.exports = BasketDecorator;
