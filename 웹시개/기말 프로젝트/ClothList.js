const Clothes = require('./Clothes.js');
const ClothesSearch = require('./ClothesSearch.js');

class ClothList {
    constructor() {
        this.upperMenu = [];
        this.underMenu = [];
        this.accessory = [];
    }

    addUpperMenu(clothes) {
        if (clothes.length > 0) {
            this.upperMenu.push(...clothes.map(item => item.toString()));
        } else {
            this.upperMenu.push('[]');
        }
    }

    addUnderMenu(clothes) {
        if (clothes.length > 0) {
            this.underMenu.push(...clothes.map(item => item.toString()));
        } else {
            this.underMenu.push('[]');
        }
    }

    addAccessory(clothes) {
        if (clothes.length > 0) {
            this.accessory.push(...clothes.map(item => item.toString()));
        } else {
            this.accessory.push('[]');
        }
    }

    getUpperMenu() {
        return this.upperMenu;
    }

    getUnderMenu() {
        return this.underMenu;
    }

    getAccessory() {
        return this.accessory;
    }

    // 옵저버 패턴 적용
    update(basket) {
        this.upperMenu = [];
        this.underMenu = [];
        this.accessory = [];

        basket.forEach(item => {
            if (item.type === 'upper') {
                this.addUpperMenu([item]);
            } else if (item.type === 'under') {
                this.addUnderMenu([item]);
            } else if (item.type === 'accessory') {
                this.addAccessory([item]);
            }
        });

        console.log("ClothList 업데이트 완료:");
        console.log("Upper Menu:", this.getUpperMenu());
        console.log("Under Menu:", this.getUnderMenu());
        console.log("Accessory:", this.getAccessory());
    }

    // Singleton Pattern
    static getInstance() {
        if (!ClothList.instance) {
            ClothList.instance = new ClothList();
        }
        return ClothList.instance;
    }

    static example() {
        const inventory = Clothes.getInventory();
        const clothesSearch = new ClothesSearch(inventory);
        const clothList = ClothList.getInstance();

        const upperResults = clothesSearch.searchByType('upper', 'ManToMan');
        clothList.addUpperMenu(upperResults);

        const underResults = clothesSearch.searchByType('under', 'Jeans');
        clothList.addUnderMenu(underResults);

        const accessoryResults = clothesSearch.searchByType('accessory', 'Hat');
        clothList.addAccessory(accessoryResults);

        console.log(clothList.getUpperMenu());
        console.log(clothList.getUnderMenu());
        console.log(clothList.getAccessory());
    }
}

module.exports = ClothList;
