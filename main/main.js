var Cart = require('./mode/cart.js');

function printReceipt(tags) {
    var scanner = new Scanner('barcode');
    var myCart = new Cart();
    var myPos = new Pos(scanner, myCart);

    myPos.scan(tags);
    PromotionProcessor.CalculatePromotion(myCart);

    console.log(myPos.printReceipt());

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
