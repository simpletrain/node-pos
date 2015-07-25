var Fixtures = require('../fixtures.js');

function Promotion(type, barcodes) {
    this.type = type;
    this.barcodes = barcodes || [];
}


Promotion.all = function () {
    return Fixtures.loadPromotions();
};

module.exports = Promotion();
