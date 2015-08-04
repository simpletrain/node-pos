var Receipt = require('../main/model/receipt.js');
var Utils = require('../main/utils.js');

describe('Receipt', function () {


    describe('#printReceipt()', function () {

        it('should print right receipt', function () {
            var receipt = new Receipt();

            spyOn(Utils,'getTime').and.returnValue('2015年08月05日 00:30:46');
            spyOn(receipt,'getItemString').and.returnValue('名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
                '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
                '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n');
            spyOn(receipt,'getActualTotalAmount').and.returnValue(51);
            spyOn(receipt,'getOriginTotalAmount').and.returnValue(58.5);

            var rightReceipt = '***<没钱赚商店>收据***' +
                '\n打印时间：2015年08月05日 00:30:46\n' +
                '----------------------\n' +
                '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
                '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
                '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n' +
                '----------------------\n' +
                '总计：51.00(元)\n' +
                '节省：7.50(元)\n' +
                '**********************';

            expect(receipt.printReceipt()).toBe(rightReceipt);
        });

    });


});