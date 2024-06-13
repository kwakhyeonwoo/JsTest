const Clothes = require('./Clothes.js');

class ClothesSerach {
    constructor(inventory) {
        this.inventory = inventory;
    }

    searchByUpper(name) {
        return this.inventory.filter(item =>
            item.type === 'Upper' && item.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    searchByUnder(name) {
        return this.inventory.filter(item =>
            item.type === 'Under' && item.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    searchByAccessory(name) {
        return this.inventory.filter(item =>
            item.type === 'Accessory' && item.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    search(command, name) {
        switch (command.toLowerCase()) {
            case 'upper':
                return this.searchByUpper(name);
            case 'under':
                return this.searchByUnder(name);
            case 'accessory':
                return this.searchByAccessory(name);
            default:
                return [];
        }
    }

    static example() {
        const inventory = Clothes.getInventory();
        const clothesSerach = new ClothesSerach(inventory);
        console.log(clothesSerach.search('upper', 'T-Shirt'));
        console.log(clothesSerach.search('under', 'Jeans'));
        console.log(clothesSerach.search('accessory', 'Hat'));
    }
}

module.exports = ClothesSerach;
