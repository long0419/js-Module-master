var o = (function () {
    var txt = 0 ;
    return {
        m1:txt ,
        m2:txt+1
    } ;
})();


;(function (obj) {
    obj.txt2 = 21 ;
})(window);

var extend = (function (obj) {
    obj.m3 = function() {
        console.log("3");
    }
    return obj ;
})(o);

