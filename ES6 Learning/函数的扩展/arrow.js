// ES6 允许使用“箭头”（=>）定义函数。

var f = v => v;

//上面的箭头函数等同于：
var f = function(v) {
    return v;
};

//如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。
var f = () => 5;
// 等同于
var f = function () { return 5 };

var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
    return num1 + num2;
};

//Test
let f = v => v ;

let f = function (v) {
    return v ;
}

let getTemplate = id => ({id : id , name : name});

//简化函数返回
const isEven = n => n*2 ;

//下面是 rest 参数与箭头函数结合的例子。

/**
 （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

 （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

 （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

 （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
 * @param nums
 */
const numbers = (...nums) => nums;

numbers(1, 2, 3, 4, 5)
// [1,2,3,4,5]

const headAndTail = (head, ...tail) => [head, tail];

headAndTail(1, 2, 3, 4, 5)
// [1,[2,3,4,5]]



