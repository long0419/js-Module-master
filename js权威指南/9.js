/**
 * 这是一个构造函数，用以初始化新创建的“范围对象”
 * 注意，这里并没有创建并返回一个对象，仅仅是初始化
 */
function Range(from , to) {
    this.from = from ;
    this.to = to ;
}

/**
 * 属性的名称必须是“prototype”
 * @type {{includes: Range.includes, foreach: Range.foreach, toString: Range.toString}}
 */
Range.prototype = {
    includes:function (x) {
        return this.from <= x && x<= this.to ;
    },
    foreach : function (f) {
        for(var x = Math.ceil(this.from) ; x<this.to  ; x++) f(x) ;
    },
    toString : function () {
        return "("+ this.from + "..." + this.to +")" ;
    }
}

var r = Range(1 , 2) ;
r.includes(2);
r.foreach(console.log);
console.log(r);