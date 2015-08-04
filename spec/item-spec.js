var Item = require('../main/model/item.js');

describe('Item', function () {


    describe('.find()', function () {

        it('should find item', function () {
            var item = new Item('ITEM000004', '电池', '个', 2.00);
            expect(Item.find('ITEM000004')).toEqual(item);
        });

    });

});