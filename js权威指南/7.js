//forEach 方法
var data = [1 ,2 ,3 ,4 ,5];
var sum = 0 ;
data.forEach(function (value) {
    sum += value ;
})
sum      ==》 15

data.forEach(function (v , i , a) {
    a[i] = v + 1 ;
})
data     ==》 [2,3,4,5,6]


//map方法
var a = [1 , 2 , 3] ;
b = a.map(function (x) {
    return x*x ;
});


//filter方法
var a = [5 , 4 ,3 ,2 ,1];
b = a.filter(function (x, i) {
    return i%2 == 0
})

