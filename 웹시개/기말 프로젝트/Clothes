class Clothes {
    constructor(name, price, quantity, options, info, id, type) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.options = options;
        this.info = info;
        this.id = id;
        this.type = type;
    }

    toString() {
        return `Name: ${this.name}, Price: ${this.price.toFixed(2)}, Quantity: ${this.quantity}, Options: ${this.options}, Info: ${this.info}, ID: ${this.id}, Type: ${this.type}`;
    }

    //Factory pattern
    static getInventory() {
        return [
            new Clothes('T-Shirt', 20.00, 10, 'Size: M', 'Cotton', 1, 'Upper'),
            new Clothes('Sweater', 40.00, 5, 'Size: L', 'Wool', 2, 'Upper'),
            new Clothes('Jeans', 50.00, 8, 'Size: 32', 'Denim', 3, 'Under'),
            new Clothes('Hat', 15.00, 20, 'Size: One Size', 'Cotton', 4, 'Accessory')
        ];
    }
}

module.exports = Clothes;
