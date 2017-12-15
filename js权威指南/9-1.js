/**
 * 如何使用JS 模拟实现java 式的类成员
 * @param real 实部
 * @param imaginary 虚部
 * @constructor
 */
function Complex(real , imaginary) {

    if (isNaN(real) || isNaN(imaginary))
        throw new TypeError();

    //确保两个实参都是数字
    this.r = real ;
    this.i = imaginary ;

}

//当前复数对象加上另外一个复数，并返回一个新的计算和值后的复数对象
Complex.prototype.add = function (that) {
    return new Complex(this.r + that.r , this.i + that.i) ;
};

Complex.prototype.mul = function (that) {
    return new Complex(this.r * htat.r - this.i * that.i , this.r*that.i + this.i * that.r);
};

Complex.prototype.mag = function () {
    return Math.sqrt(this.r * this.r + this.i*this.i);
};

Complex.prototype.neg = function () {
    return new Complex(-this.r , -this.i);
};

Complex.prototype.toString = function(that){
    return "{" + this.r + "," + this.i +"}";
};

Complex.prototype.equals = function (that) {
    return that != null &&                                      //必须有定义且不能是null
        that.constructor === Complex &&                      //并且必须是Complex的实例
        this.r === that.r && this.i === that.i ;            //并且必须包含相同的值
};

/**
 * 这里预定义了一些对复数运算有帮助的类字段，它们的命名都是大写，用以表明他们是常量
 * @type {Complex}
 */
Complex.ZERO = new Complex(0 , 0);
Complex.ONE = new Complex(1 , 0);
Complex.I = new Complex(0 , 1);

Complex.parse = function (s) {
    try{
        var m = Complex._format.exec(s) ;//利用正则表达式进行匹配
        return new Complex(parseFloat(m[1]) , parseFloat(m[2]));
    }catch {
        throw new TypeError("Can't parse" + s + "as a complex number .");
    }
}

Complex._format = /^\{()}$/ ;

var c =  new Complex(2 , 3);
var d = new Complex(c.i , c.r);
c.add(d).toString();
Complex.parse(c.toString()).add(c.neg()).equals(Complex.ZERO);