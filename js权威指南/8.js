//嵌套函数
function hyptotenuse(a , b) {
    function square(x) {
        return x*x ;
    }
    return Math.sqrt(square(a) + square(b));
}


//函数中的this
var o = {                               //对象o
    m :function () {                   //对象中的方法m()
        var self = this ;               //将this的值保存至一个变量中
        console.log(this === o) ;       //输出true , this 就是这个对象o
        f();
        
        function f() {                 //定一个嵌套函数f()
            console.log(this === o);    //"false" : this的值是全局对象或undefined
            console.log(self === o) ;   //“true” self指外部函数的this值
        }
    }
}

//可变实参
function max(/*...*/) {

    var max = Number.NEGATIVE_INFINITY ;

    for(var i = 0 ; i <arguments.length ; i++){
        if(arguments[i] > max) max = arguments[i] ;
    }

    return max ;
}

var largest = max( 1 , 10 , 100 ,2 ,3, 1000, 4, 5 ,100000, 6 ) ; 怕啥
