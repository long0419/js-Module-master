/**
 * Created by long-laptop on 2017/4/19.
 */
function Complex(real , imaginary){
    this.r = real || 1;
    this.i = imaginary || 2 ;
    return this.r
}

console.log(Complex(5, 2), r)


Complex.prototype = {
    add : function (that) {
        this.r += that.r;
        this.i += that.i;
        return this;
    },

    del : function (that) {
        return new Complex(this.r - that.r , this.i - that.i) ;
    },

    mag : function () {
        return Math.sqrt(this.r*this.r + this.i*this.i) ;
    }

} ;

console.log(new Complex(1, 2).add({r: 2, i: 1}))

console.log('asd'.__proto__, String.prototype, String.prototype.constructor , 'asd'.__proto__ === String.prototype) //对象的__proto__ 属性 默认指向 构造函数中的prototype 原型