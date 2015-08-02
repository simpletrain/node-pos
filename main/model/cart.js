function Cart() {
    this.cartItems = [];
}


Cart.prototype.addCartItem = function (cartItem) {
    var _cartItem = this.findCartItem(cartItem);

    if (_cartItem) {
        _cartItem.count += cartItem.count;
    } else {
        this.cartItems.push(cartItem);
    }
};


Cart.prototype.findCartItem = function (cartItem) {
    var barcode = cartItem.item.barcode;

    for (var i = 0; i < this.cartItems.length; i++) {
        if (barcode === this.cartItems[i].item.barcode) {
            return this.cartItems[i];
        }
    }
};

module.exports = Cart;
