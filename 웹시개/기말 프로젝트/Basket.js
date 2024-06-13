const Clothes = require('./Clothes.js');

class Basket {
    constructor() {
        this.basket = [];
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers() {
        this.observers.forEach(observer => observer.update(this.basket));
    }

    addToBasket(clothes) {
        this.basket.push(clothes);
        console.log(`${clothes.name}이 바구니에 추가 되었습니다`);
        this.notifyObservers();
    }

    removeFromBasket(clothes) {
        const index = this.basket.indexOf(clothes);
        if (index !== -1) {
            this.basket.splice(index, 1);
            console.log(`${clothes.name}이 바구니에서 제거 되었습니다`);
            this.notifyObservers();
        } else {
            console.log(`${clothes.name}이 바구니에 없습니다`);
        }
    }

    listBasket() {
        return this.basket;
    }

    clearBasket() {
        this.basket = [];
        console.log("바구니가 비워졌습니다");
        this.notifyObservers();
    }

    addWithDiscount(clothes, discount) {
        clothes.price = clothes.price * (1 - discount);
        this.addToBasket(clothes);
    }

    static example() {
        const inventory = Clothes.getInventory();
        const basket = new Basket();
        basket.addWithDiscount(inventory[0], 0.1); // T-shirt 10% 할인가
        basket.addToBasket(inventory[2]); // Jeans Basket에 저장
        console.log(basket.listBasket());
    }
}

module.exports = Basket;
