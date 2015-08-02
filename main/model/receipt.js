var Utils = require('../utils.js');

function Receipt(cart) {
    this.receiptItems = [];
    this.totalDiscount = 0;
}

Receipt.prototype.getItemString = function (cart) {
    var itemsString = '';

    cart.cartItems.forEach(function (cartItem) {
        var item = cartItem.item;

        itemsString +=
            '名称：' + item.name +
            '，数量：' + cartItem.count + item.unit +
            '，单价：' + Utils.formatPrice(item.price) +
            '(元)，小计：' + Utils.formatPrice(Utils.getSubTotal(cartItem.count, item.price) - cartItem.save)
            + '(元)\n';
    });

    return itemsString;
};

Receipt.prototype.getAmount = function (cart) {
    var amount = 0;

    cart.cartItems.forEach(function (cartItem) {
        var item = cartItem.item;
        amount += Utils.getSubTotal(cartItem.count, item.price);
    });

    return amount;
};

Receipt.prototype.printString = function(cart){
    return '***<没钱赚商店>收据***\n' +
    '打印时间：' + Utils.getTime() + '\n' +
    '----------------------\n' +
    this.getItemString(cart) +
    '----------------------\n' +
    '总计：' + Utils.formatPrice(this.getAmount(cart) - cart.save) + '(元)\n' +
    '节省：' + Utils.formatPrice(cart.save) + '(元)\n' +
    '**********************';
};


module.exports = Receipt;
