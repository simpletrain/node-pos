var Scanner = require('../main/model/scanner.js');
var CartItem = require('../main/model/cart-item.js');
var Item = require('../main/model/item.js');

describe('Scanner', function () {


    describe('#scan()', function () {

        it('should scan long tag to cartItem', function () {
            var scanner = new Scanner();
            var cartItem = scanner.scan('ITEM000002-6');
            var rightCartItem = new CartItem(new Item('ITEM000002', '苹果', '斤', 5.50),6);

            expect(cartItem).toEqual(rightCartItem);

        });

        it('should scan short tag to cartItem', function () {
            var scanner = new Scanner();
            var cartItem = scanner.scan('ITEM000002');
            var rightCartItem = new CartItem(new Item('ITEM000002', '苹果', '斤', 5.50),1);

            expect(cartItem).toEqual(rightCartItem);
        });
    });

});
