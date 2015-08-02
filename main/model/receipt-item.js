function ReceiptItem(cartItem) {
    this.cartItem = cartItem;
    this.discount = 0;
}

ReceiptItem.prototype.getOriginSubTotal = function () {
    return this.cartItem.getSubTotal();
};

ReceiptItem.prototype.getActualSubTotal = function () {
    return this.cartItem.getSubTotal() - this.discount;
};


module.exports = ReceiptItem;