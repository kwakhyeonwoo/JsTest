const Clothes = require('./Clothes.js');

class ClothesSearch {
    constructor(inventory) {
        this.inventory = inventory;
    }

    searchByType(type, name) {
        const results = this.inventory.filter(item => 
            item.type.toLowerCase() === type.toLowerCase() && item.name.toLowerCase().includes(name.toLowerCase())
        );

        if (results.length > 0) {
            console.log(`원하는 ${name}이/가 있습니다`);
            return results;
        } else {
            console.log(`원하는 ${name}이/가 없습니다`);
            return [];
        }
    }

    static example() {
        const inventory = Clothes.getInventory();
        const clothesSearch = new ClothesSearch(inventory);
    }
}

module.exports = ClothesSearch;
