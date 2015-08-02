var Promotion = require('./promotion.js');

function PromotionProcessor() {

}


PromotionProcessor.getPromotionType = function (barcode) {
    var allPromotion = Promotion.all();

    for (var i = 0; i < allPromotion.length; i++) {
        if (allPromotion[i].barcodes.indexOf(barcode) !== -1) {
            var promotionType = allPromotion[i].type;
        }
    }
    return promotionType;
};


PromotionProcessor.CalculateItemPromotion = function (receipt) {
    receipt.receiptItems.forEach(function (receiptItem) {
        var cartItem = receiptItem.cartItem;
        var item = cartItem.item;

        if (PromotionProcessor.getPromotionType(item.barcode) === 'BUY_TWO_GET_ONE_FREE') {
            receiptItem.discount = Math.floor(cartItem.count / 3) * item.price;
        }
    });

};


module.exports = PromotionProcessor;
