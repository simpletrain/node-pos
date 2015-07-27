var Cart = require('./model/cart.js');
var Pos = require('./model/pos.js');
var PromotionProcessor = require('./model/promotion_processor.js');
var Scanner = require('./model/scanner.js');

function printReceipt(tags) {
    var scanner = new Scanner('barcode');
    var cart = new Cart();
    var pos = new Pos(scanner, cart);

    pos.scan(tags);
    PromotionProcessor.CalculatePromotion(cart);

    console.log(pos.printReceipt());

}

var tags = [
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000003-2',
    'ITEM000005',
    'ITEM000005',
    'ITEM000005'
];

printReceipt(tags);

module.exports = printReceipt;
