class FavoriteClothes {
    constructor() {
        this.favorites = [];
    }

    addFavorite(clothes) {
        this.favorites.push(clothes);
        console.log(`${clothes}이 좋아하는 옷 목록에 추가 되었습니다`);
    }

    removeFavorite(clothes) {
        const index = this.favorites.indexOf(clothes);
        if (index !== -1) {
            this.favorites.splice(index, 1);
            console.log(`${clothes}이 좋아하는 옷 목록에서 제거 되었습니다`);
        } else {
            console.log(`${clothes}이 좋아하는 옷 목록에 없습니다.`);
        }
    }

    listFavorites() {
        return this.favorites;
    }
}

