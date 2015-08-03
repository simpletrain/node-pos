var Receipt = require('./receipt.js');
var PromotionProcessor = require('./promotion-processor.js');

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
    PromotionProcessor.CalculateItemPromotion(receipt);

    return receipt;
};

module.exports = Pos;