// //“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。
// let [a, b, c] = [1, 2, 3];
//
//
// // 返回一个数组
// function example() {
//     return [1, 2, 3];
// }
// let [a, b, c] = example();
//
// // 返回一个对象
// function example() {
//     return {
//         foo: 1,
//         bar: 2
//     };
// }
// let { foo, bar } = example();

//遍历 Map 结构
const map = new Map();
map.set("first" , "hello");
map.set("second" , "world");

//遍历 Map 结构
for(let [key , value] of map){
    console.log(key + " is " + value);
}

// 获取键名
for (let [key] of map){
    console.log("key" + key) ;
}

// 获取键值
for (let [,value] of map){
    console.log("value" + value) ;
}
