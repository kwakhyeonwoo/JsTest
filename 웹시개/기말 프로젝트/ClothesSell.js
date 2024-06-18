class ClothesSell {
    constructor(inventory) {
        this.inventory = inventory;
    }

    //Strategy pattern
    executeSecond(item, strategy) {
        strategy.execute(item, this.inventory);
    }
}

// 사용 예제
const inventory = [
    { name: 'T-Shirt', type: 'upper', price: 20 },
    { name: 'Jeans', type: 'under', price: 40 },
    { name: 'Hat', type: 'accessory', price: 15 }
];

const clothesSell = new ClothesSell(inventory);
const removeItemStrategy = new RemoveItemStrategy();
const logItemStrategy = new LogItemStrategy();

const item = { name: 'Jeans', type: 'under', price: 40 };
clothesSell.executeSecond(item, removeItemStrategy); // "Jeans 인벤토리에 저장 되었습니다."
clothesSell.executeSecond(item, logItemStrategy); // "Attempting to remove Jeans from inventory."
