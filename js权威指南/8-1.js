var func = function () {
    var a = 1 ;
    return function () {
        a++ ;
        console.log(a)
    }
}

var f = func() ;
f();
f();
f();