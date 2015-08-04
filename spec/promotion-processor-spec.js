var PromotionProcessor = require('../main/model/promotion-processor.js');

describe('PromotionProcessor', function () {


    describe('.getPromotionType()', function () {

        it('should get right type', function () {
            expect(PromotionProcessor.getPromotionType('ITEM000005')).toBe('BUY_TWO_GET_ONE_FREE');
        });

    });


});