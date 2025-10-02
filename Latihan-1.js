class FruitBasket {
  constructor() {
    // Property: keranjang buah
    this.fruitsBasket = [];
  }

  // Method untuk menambahkan buah
  addItem(fruit) {
    this.fruitsBasket.push(fruit);
    console.log(`${fruit} ditambahkan ke keranjang.`);
  }

  // Method untuk menghapus buah terakhir
  removeLastItem() {
    if (this.fruitsBasket.length > 0) {
      const removed = this.fruitsBasket.pop();
      console.log(`${removed} dihapus dari keranjang.`);
    } else {
      console.log("Keranjang kosong, tidak ada buah yang bisa dihapus.");
    }
  }

  // Method untuk mendapatkan informasi isi keranjang
  getInformation() {
    if (this.fruitsBasket.length > 0) {
      console.log("Isi keranjang:", this.fruitsBasket.join(", "));
    } else {
      console.log("Keranjang kosong.");
    }
  }
}

// ---- Contoh penggunaan ----
const basket = new FruitBasket();

basket.addItem("Apel");
basket.addItem("Mangga");
basket.addItem("Pisang");

basket.getInformation();

basket.removeLastItem();
basket.getInformation();
