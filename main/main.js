var Cart = require('./model/cart.js');
var Pos = require('./model/pos.js');
var Scanner = require('./model/scanner.js');

function printReceipt(tags) {
    var scanner = new Scanner();
    var cart = new Cart();
    var pos = new Pos(scanner, cart);

    pos.scan(tags);

    var receipt = pos.getReceipt();

    console.log(receipt.printReceipt());

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
