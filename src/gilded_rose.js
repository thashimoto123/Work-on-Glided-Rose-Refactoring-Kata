class Item {
  UPPER = 50;
  LOWER = 0;
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  update(){
    this.updateSellIn();
    this.updateQuality();
    this.afterUpdate();
  }

  updateSellIn() {
    this.sellIn = this.sellIn - 1;
  }

  updateQuality() {
    if (this.sellIn < 0) {
      this.quality = this.quality - 2;
    } else {
      this.quality = this.quality - 1;
    }
  }

  afterUpdate () {
    if (this.quality > this.UPPER) {
      this.quality = this.UPPER;
    }

    if (this.quality < 0) {
      this.quality = this.LOWER
    }
  }
}

class AgedBrie extends Item {
  constructor(sellIn, quality){
    super("Aged Brie", sellIn, quality);
  }

  updateQuality() {
    if (this.quality < 50) {
      let diff = (this.sellIn < 0) ? 2 : 1;
      this.quality = this.quality + diff;
    }
  }
}
class BackstagePass extends Item {
  constructor(sellIn, quality){
    super("Backstage passes to a TAFKAL80ETC concert", sellIn, quality);
  }

  updateQuality() {
    if (this.sellIn < 0) {
      this.quality = 0;
    } else if (this.sellIn < 5) {
      this.quality = this.quality + 3;
    } else if (this.sellIn < 10) {
      this.quality = this.quality + 2;
    } else {
      this.quality = this.quality + 1;
    }
  }
}

class Sulfuras extends Item {
  constructor(sellIn){
    super("Sulfuras, Hand of Ragnaros", sellIn, 80);
  }

  updateSellIn() {
    return;
  }

  updateQuality() {
    return;
  }

  afterUpdate() {
    return;
  }
}

class Conjured extends Item {
  constructor(sellIn, quality){
    super("Conjured Mana Cake", sellIn, quality);
  }

  updateQuality() {
    this.quality = this.quality - 2;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    this.items.forEach(item => {
      item.update();
    });
  }
}

module.exports = {
  Item,
  AgedBrie,
  Sulfuras,
  Conjured,
  BackstagePass,
  Shop
}
