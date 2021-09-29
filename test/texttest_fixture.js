
const { Shop, Item, AgedBrie, Sulfuras, Conjured, BackstagePass } = require("../src/gilded_rose");

const resultTest = () => {
  const items = [
    new Item("+5 Dexterity Vest", 10, 20),
    new AgedBrie(2, 0),
    new Item("Elixir of the Mongoose", 5, 7),
    new Sulfuras(0),
    new Sulfuras(-1),
    new BackstagePass(15, 20),
    new BackstagePass(10, 49),
    new BackstagePass(5, 49),

    // This Conjured item does not work properly yet
    new Conjured(3, 6),
  ];

  const days = Number(process.argv[2]) || 2;
  const gildedRose = new Shop(items);
  let result = "";
  console.log("OMGHAI!");
  for (let day = 0; day < days; day++) {
    result += `\n-------- day ${day} --------`;
    console.log(`\n-------- day ${day} --------`);
    result += "name, sellIn, quality";
    console.log("name, sellIn, quality");
    items.forEach(item => {
      result += `${item.name}, ${item.sellIn}, ${item.quality}`;
      console.log(`${item.name}, ${item.sellIn}, ${item.quality}`)
    });
    gildedRose.updateQuality();
  }
  return result;
}
resultTest();
