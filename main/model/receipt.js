var Utils = require('../utils.js');
var ReceiptItem = require('./receipt-item.js');

function Receipt() {
    this.receiptItems = [];
    this.totalDiscount = 0;
}

Receipt.prototype.printReceipt = function () {
    return '***<没钱赚商店>收据***\n' +
        '打印时间：' + Utils.getTime() + '\n' +
        '----------------------\n' +
        this.getItemString() +
        '----------------------\n' +
        '总计：' + Utils.formatPrice(this.getActualTotalAmount()) + '(元)\n' +
        '节省：' + Utils.formatPrice(this.getOriginTotalAmount()- this.getActualTotalAmount()) + '(元)\n' +
        '**********************';
};

Receipt.prototype.addReceiptItem = function (cart) {
    var _this = this;
    var cartItems = cart.cartItems;

    cartItems.forEach(function (cartItem) {
        var receiptItem = new ReceiptItem(cartItem);
        _this.receiptItems.push(receiptItem);
    });
};

Receipt.prototype.getOriginTotalAmount = function () {
    var originSubTotalArray = this.receiptItems.map(function (receiptItem) {
        return receiptItem.getOriginSubTotal();
    });

    return originSubTotalArray.reduce(function (a, b) {
        return a + b;
    });
};

Receipt.prototype.getActualTotalAmount = function () {
    var actualSubTotalArray = this.receiptItems.map(function (receiptItem) {
        return receiptItem.getActualSubTotal();
    });

    var actualTotalAmount = actualSubTotalArray.reduce(function (a, b) {
        return a + b;
    });

    return actualTotalAmount - this.totalDiscount;
};

Receipt.prototype.getItemString = function () {
    var itemsString = '';

    this.receiptItems.forEach(function (receiptItem) {
        var cartItem = receiptItem.cartItem;
        var item = cartItem.item;

        itemsString +=
            '名称：' + item.name +
            '，数量：' + cartItem.count + item.unit +
            '，单价：' + Utils.formatPrice(item.price) +
            '(元)，小计：' + Utils.formatPrice(receiptItem.getActualSubTotal())
            + '(元)\n';
    });

    return itemsString;
};


module.exports = Receipt;
