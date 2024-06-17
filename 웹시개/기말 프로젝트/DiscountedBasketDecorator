const BasketDecorator = require('./BasketDecorator');

class DiscountedBasketDecorator extends BasketDecorator {
    constructor(basket, discount) {
        super(basket);
        this.discount = discount;
    }

    addToBasket(clothes) {
        clothes.price *= (1 - this.discount);
        this.basket.addToBasket(clothes);
        console.log(`${clothes.name} added with a ${this.discount * 100}% discount.`);
    }
}

module.exports = DiscountedBasketDecorator;
