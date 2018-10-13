// 对象的函数解构
// 我们在前后端分离时，后端经常返回来JSON格式的数据，前端的美好愿望是直接把这个JSON格式数据当作参数，传递到函数内部进行处理。ES6就为我们提供了这样的解构赋值。
// let json = {
//     a:'apple',
//     b:'苹果',
//     c:'iphone'
// }
// function fun({a,b,c}){
//     console.log(a,b,c);
// }
// fun(json);

// 数组的函数解构
// 函数能解构JSON，那解构我们的数组就更不在话下了，我们看下边的代码。我们声明一个数组，然后写一个方法，最后用…进行解构赋值。
// let arr = ['tomato','番茄','西红柿','炒鸡蛋'];
// function fun(a,b,c){
//     console.log(a,b,c);
// }
// fun(...arr);

// in的用法
// in是用来判断对象或者数组中是否存在某个值的。我们先来看一下用in如何判断对象里是否有某个值。
// 对象判断
// let obj={
//     a:'jspang',
//     b:'技术胖'
// }
// console.log('a' in obj);  //true

// 数组判断
// 在ES5中，使用length属性进行判断，为0表示没有数组元素。
// 但是这是不准确的
// let arr=[,,,,,];
// console.log(arr.length);
// // 用ES6的in就可以解决这个问题。
// let arr2=[,,,,,];
// console.log(2 in arr2); // false
// let arr1=['apple','苹果'];
// console.log(0 in arr1);  // true

// 数组的遍历方法
// 1.forEach
// let arr=['apple','苹果','iPhone'];
// arr.forEach((val,index)=>console.log(index,val));
// 2.filter
// let arr=['apple','苹果','iPhone'];
// arr.filter(x=>console.log(x));

// 3.some
// let arr=['apple','苹果','iPhone'];
// arr.some(x=>console.log(x));

// 4.map
// let arr=['apple','苹果','iPhone'];
// console.log(arr.map(x=>'web'));
// map在这里起到一个替换的作用

// join()方法
// join()方法就是在数组元素中间，加了一些间隔，开发中很有用处。
// let arr=['apple','苹果','iPhone'];
// console.log(arr.join('|'));

// toString()方法
// es5 把数字转换为字符串
// es6 
let arr=['jspang','技术胖','前端教程'];
console.log(arr.toString());
// 转换时只是是用逗号隔开了。