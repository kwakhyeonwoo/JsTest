class RemoveItemStrategy extends InventoryStrategy {
    execute(item, inventory) {
        const index = inventory.indexOf(item);
        if (index !== -1) {
            inventory.splice(index, 1);
            console.log(`${item.name} 인벤토리에 저장 되었습니다.`);
        } else {
            console.log(`${item.name} 인벤토리에 없습니다.`);
        }
    }
}


