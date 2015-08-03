var CartItem = require('./cart-item.js');
var Item = require('./item.js');

function Scanner() {

}


Scanner.prototype.scan = function (tag) {
    var splitedBarcode = tag.split('-');

    var barcode = splitedBarcode[0];

    var item = Item.find(barcode);

    var count = parseFloat(splitedBarcode[1]) || 1;

    return new CartItem(item, count);

};

module.exports = Scanner;
