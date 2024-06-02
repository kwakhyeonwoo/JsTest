class ClothesSearch {
    constructor(inventory) {
        this.inventory = inventory;
    }

    searchByUpper(name) {
        return this.inventory.filter(clothes => 
            clothes.type === 'Upper' && clothes.name.toLowerCase().includes(name.toLowerCase())//타입이 Upper인지 확인, 이름에 포함되어 있는지 확인하기 위해 다 소문자로 출력
        );
    }

    searchByUnder(name) {
        return this.inventory.filter(clothes => 
            clothes.type === 'Under' && clothes.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    searchByAccessory(name) {
        return this.inventory.filter(clothes => 
            clothes.type === 'Accessory' && clothes.name.toLowerCase().includes(name.toLowerCase())
        );
    }
}
