class ClothesSearch {
    constructor(inventory) {
        this.inventory = inventory;
    }

    searchByUpper(name) {
        return this.inventory.filter(item => 
            item.type === 'Upper' && item.name.toLowerCase().includes(name.toLowerCase())//타입이 Upper인지 확인, 이름에 포함되어 있는지 확인하기 위해 다 소문자로 출력
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
}


//전략 패턴 사용해서 상의,하의,액세서리 입력을 받을 것 
//상의, 하의, 액세서리를 매개변수로 받자. 