'use strict';

// 新的声明方式
// const a = "JSPang" ;
// var a = "技术" ;
// console.log(a) ;

// 变量的解构赋值
// let [a , b , c] = [1 , 2 , 3]; 
// console.log(a) ;
// console.log(b) ;
// console.log(c) ;

// let [a , [b , c] , d] = [0 , [1 , 2] , 3] ;
// console.log(a) ;
// console.log(b) ;
// console.log(c) ;

//undefine null 区别
// let [foo = false] = [] ;
// console.log(foo);

// let {foo , bar} = {foo : "JSPANG" , bar:"jishupang"}
// console.log(foo + " " + bar) ;

// let foo;
// ({foo} = {foo:'JSPang'});
// console.log(foo);

// const [a,b,c,d,e,f]='JSPang' ;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);

// 扩展运算符和rest运算符
// function jspang(...arg){
//     console.log(arg[0]);
//     console.log(arg[1]);
//     console.log(arg[2]);
//     console.log(arg[3]);
// }

// jspang(1,2,3);

// 扩展运算符
var arr1 = ['www', 'jspang', 'com'];
var arr2 = [].concat(arr1);
console.log(arr2);
arr2.push('shengHongYu');
console.log(arr2);
console.log(arr1);

// rest运算符
function jspang(first) {
    console.log(arguments.length <= 1 ? 0 : arguments.length - 1);
}
jspang(0, 1, 2, 3, 4, 5, 6, 7);
