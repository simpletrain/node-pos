var Fixtures = require('../fixtures.js');


function Item(barcode, name, unit, price) {
    this.barcode = barcode;
    this.name = name;
    this.unit = unit;
    this.price = price || 0.00;
}

Item.all = function () {
    return Fixtures.loadAllItems();
};

Item.find = function (barcode) {
    var allItems = Item.all();
    var item;

    for (var i = 0; i < allItems.length; i++) {
        if (barcode === allItems[i].barcode) {
            item = allItems[i];
            break;
        }
    }
    return item;

};

module.exports = Item();
