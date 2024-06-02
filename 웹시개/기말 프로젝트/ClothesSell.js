class ClothesSell extends ClothesBuy{
    constructor(){
        this.inventory =[];
    }

    sellItem(clothes) {
        const index = this.inventory.indexOf(item);
        if (index !== -1) {
            this.inventory.splice(index, 1);
            console.log(`${clothes}가 판매되었습니다.`);
        } else {
            console.log(`${clothes}가 인벤토리에 없습니다.`);
        }
    }
}
