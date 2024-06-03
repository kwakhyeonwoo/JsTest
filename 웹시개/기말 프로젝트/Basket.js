class Basket extends ClothesBuy{
    constructor(){
        this.basket = [];
    }
    addToBasket(clothes){
        this.basket.push(clothes);
        console.log(`${clothes}이 바구니에 추가 되었습니다`);
    }

    removeFromBasket(clothes){
        const index = this.basket.indexOf(clothes);
        if(index == 1){
            this.basket.splice(index, 1);
            console.log(`${clothes}이 바구니에서 제거 되었습니다`);
        }
        else{
            console.log(`${clothes}이 바구니에 없습니다`);
        }
    }

    listBasket(){
        return this.basket;
    }

    clearBasket(){
        this.basket = [];
        console.log("바구니가 비워졌습니다");
    }
}
