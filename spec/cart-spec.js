var Cart = require('../main/model/cart.js');
var CartItem = require('../main/model/cart-item.js');
var Item = require('../main/model/item.js');


describe('Cart', function () {
    var cart;

    beforeEach(function () {
        cart = new Cart();
        cart.cartItems = [new CartItem(new Item('ITEM000000', '可口可乐', '瓶', 3.00), 1)
            , new CartItem(new Item('ITEM000001', '雪碧', '瓶', 3.00), 4)
            , new CartItem(new Item('ITEM000004', '电池', '个', 2.00), 3)]
    });

    describe('#addCartItem()', function () {

        it('should add cartItem', function () {
            spyOn(cart, 'findCartItem').and.returnValue(undefined);

            var cartItem = new CartItem(new Item('ITEM000003', '荔枝', '斤', 15.00), 2);
            cart.addCartItem(cartItem);

            expect(cart.cartItems[3]).toBe(cartItem);
        });

        it('should increase count of cartItem', function () {
            spyOn(cart, 'findCartItem').and.returnValue(cart.cartItems[2]);

            var cartItem = new CartItem(new Item('ITEM000004', '电池', '个', 2.00), 2);
            cart.addCartItem(cartItem);

            expect(cart.cartItems[2].count).toBe(5);
        });

    });

    describe('#findCartItem()', function () {

        it('should return cartItem when found cartItem', function () {
            var result = cart.findCartItem(new CartItem(new Item('ITEM000001', '雪碧', '瓶', 3.00), 1));
            expect(result).toBe(cart.cartItems[1]);
        });

        it('should return undefined when not found cartItem', function () {
            var result = cart.findCartItem(new CartItem(new Item('ITEM000005', '方便面', '袋', 4.50), 1));
            expect(result).toBeUndefined();
        });

    });

});