var Utils = require('../main/utils.js');


describe('Utils',function(){

    describe('#getTime()',function(){

        it('should get right time',function(){
            var dateDigitToString = function(num) {
                return num < 10 ? '0' + num : num;
            };

            var currentDate = new Date(),
                year = dateDigitToString(currentDate.getFullYear()),
                month = dateDigitToString(currentDate.getMonth() + 1),
                date = dateDigitToString(currentDate.getDate()),
                hour = dateDigitToString(currentDate.getHours()),
                minute = dateDigitToString(currentDate.getMinutes()),
                second = dateDigitToString(currentDate.getSeconds());
            var timeString = year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;

            expect(Utils.getTime()).toBe(timeString);
        });

    });

    describe('#formatPrice()',function(){

        it('should format price rightly',function(){
            var result = Utils.formatPrice(8.5);
            expect(result).toBe('8.50');
        });

    });

});