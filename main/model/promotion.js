var fixtures = require('../fixtures.js');

function Promotion(type, barcodes) {
    this.type = type;
    this.barcodes = barcodes || [];
}


Promotion.all = function () {
    return fixtures.loadPromotions();
};

module.exports = Promotion;
