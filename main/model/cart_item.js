function CartItem(item, count) {
    this.item = item;
    this.count = count || 1;
}

CartItem.prototype.getSubTotal = function () {
    return this.item.price * this.count;
};


module.exports = CartItem;
