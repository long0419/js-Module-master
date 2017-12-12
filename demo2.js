var complex = (function () {
    var num = 0;

    var add = function () {
        num++;
    } ;

    var del = function () {
        num--;
    } ;

    var getNum = function () {
        return num ;
    }

    return {
        add : add ,
        del : del  ,
        getNum : getNum
    }

})();

;(function (complex) {

    complex.multi = function (complex) {
        
    }

    complex.divid = function () {
        
    }

})(window.complex || {});

console.log(complex.add()) ;
console.log(complex.add()) ;
console.log(complex.add()) ;
console.log(complex.del()) ;
console.log(complex.getNum()) ;