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
    this.quality = this.quality - 1;
  }

  afterUpdate () {
    if (this.quality > this.UPPER) {
      this.quality = this.UPPER;
    }

    if (this.quality > 0) {
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
      this.quality = this.quality + 1;
    }
  }
}
class BackstagePass extends Item {
  constructor(sellIn, quality){
    super("Backstage passes to a TAFKAL80ETC concert", sellIn, quality);
  }

  updateQuality() {
    if (this.sellIn <= 0) {
      this.quality = 0;
    } else if (this.sellIn <= 5) {
      this.quality = this.quality + 3;
    } else if (this.sellIn <= 10) {
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

  updateQuality() {
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
    item.update();



    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
