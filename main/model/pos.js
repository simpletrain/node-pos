var Receipt = require('./receipt.js');

function Pos(scanner, cart) {
    this.scanner = scanner;
    this.cart = cart;
}


Pos.prototype.scan = function (tags) {
    var _this = this;

    tags.forEach(function (tag) {
        var cartItem = _this.scanner.scan(tag);
        _this.cart.addCartItem(cartItem);
    });

};

Pos.prototype.getReceipt = function () {
    var receipt = new Receipt();

    receipt.addReceiptItem(this.cart);
    return receipt;
};

module.exports = Pos;