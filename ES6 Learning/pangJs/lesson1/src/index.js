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
let arr1=['www','jspang','com'];
//let arr2=arr1; //改变arr2的值，你会发现arr1的值也改变了，因为我们这是对内存堆栈的引用，而不是真正的赋值。
let arr2= [...arr1];
console.log(arr2);
arr2.push('shengHongYu');
console.log(arr2);
console.log(arr1);

// rest运算符
function jspang(first,...arg){
    // console.log(arg.length);
    // 讲解for…of循环
    for(let val of arg){
        console.log(val) ;
    }
}
jspang(0,1,2,3,4,5,6,7);