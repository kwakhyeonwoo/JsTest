const Clothes = require('./Clothes.js');
const Basket = require('./Basket.js');
const ClothesSearch = require('./ClothesSearch.js');
const ClothList = require('./ClothList.js');

const inventory = Clothes.getInventory();
const clothesSearch = new ClothesSearch(inventory);
const basket = new Basket();

// basket에서 인스턴스 생성해 item으로 값 여부 확인
const upperResults = clothesSearch.searchByType('upper', 'ManToMan');
upperResults.forEach(item => basket.addToBasket(item));

const underResults = clothesSearch.searchByType('under', 'Jeans');
underResults.forEach(item => basket.addToBasket(item));

const accessoryResults = clothesSearch.searchByType('accessory', 'Hat');
accessoryResults.forEach(item => basket.addToBasket(item));

// 현재 장바구니에 들어가있는 상태들 보여줌
console.log(basket.listBasket());
console.log(basket.listBasketByType());

// ClothList에 들어있는 옷들 확인하기
const clothList = ClothList.getInstance();

clothList.addUpperMenu(upperResults);
clothList.addUnderMenu(underResults);
clothList.addAccessory(accessoryResults);

console.log(clothList.getUpperMenu());
console.log(clothList.getUnderMenu());
console.log(clothList.getAccessory());
