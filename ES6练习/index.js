//ch2 变量的声明

//1. var全局变量 
// ex1
// var a='es6study';
// console.log(a);

// window.onload= function(){
//     console.log(a);
// }

//ex2
// var a=2;
// {
//    var a=3;
// }
// console.log(a);

// 2.let 局部变量
// {  
//    let a=3;
// }

// console.log(a);  //报错 a is not defined

//ex3
// for(var i=0;i<10;i++){
//     var a= 10;
//     console.log('循环体中:'+i);
// }
// console.log('循环体外:'+i);
// console.log(a);
// 循环体外的i变量被污染了

// for(let j=0;j<10;j++){
//     console.log('循环体中:'+j);
// }
// console.log('循环体外:'+j);
//控制台报错了，找不到循环体外的j变量
//变量i是var声明的，在全局范围内都是有效的。
//变量j是let声明的，仅在块级作用域里有效。
// function fn () {
//     let j = 1;
//     return j;
// }
// console.log(fn())
//3. 常量
//ex4
//const是一个只读的常量。一旦声明，就不可更改
// const arr = [1,2,3,4];
// arr.push(100);
// console.log(arr);

// var a = [1,2,3,4,5];
// var b = a;
// 9
//Identifier 'a' has already been declared

// 如果用const声明了常量，但是并没有去初始化它。那么，也是会报错的。
// const PI;
//SyntaxError: Missing initializer in const declaration


//let的新知识点
// 4.====不存在变量的提升
// //var命令会发生变量提升现象，即变量在声明使用之前，值为undefined
// console.log(a);  //undefined
// var a = 2;

//let命令改变的语法规则，它所声明的变量一定要在声明之后使用，否则就会报错。
// console.log(b);  // 报错 b is not undefined
// let b = 3;

// 5. =====用let声明的变量，只会在let命令所在的代码块内有效
// 'use strict';
// {
//     let names = 2;
//     // var age = 21;
// }
// console.log(names);
// // console.log(age);

//死循环
// for(var i = 0; i < 5; i++){
//     console.log(i);
//     for(var i = 0; i < 3; i++){
//         console.log(i);
//     }
// }

// for(let j = 0; j < 5; j++){
//     console.log(j);
//     for(let j = 0; j < 3; j++){
//         console.log(j);
//     }
// }
//如果没有let的话，上面代码中的内循环每次都会把var声明的变量i重置为0，所以毫无疑问，这是一个死循环

// 6.====暂时性死区
// var tmp = 123;
// if(true){
//     // tmp = 'abc';  // 报错：tmp is not defined
//     let tmp;
// }
//tmp全局变量，但是在区块域中let又声明了一个局部变量tmp，导致后者绑定了这个区块作用域。所以在let声明变量钱，对tmp报错。
// 规定：只要块级作用域存在let和const命令，它所申明的变量就“绑定”这个区域，形成一个封闭的作用域，不再受外部影响。在声明之前使用该变量，就会报错。
//在声明之前，该变量是不可用的，这在语法上称为“暂时性死区（TDZ）”


// if(true){
//     //TDZ开始
//     tmp ='abc'; //报错：tmp is not defined
//     console.log(tmp);
//     let tmp;
//     //TDZ结束
//     console.log(tmp); // undefined
    
//     tmp= 123;
//     console.log(tmp); // 123
// }
// 先声明再使用。

// 5.不允许重复声明
// function test(){
//     let a = 10;
//     var a = 2;
// }
// test();
// function(){
//     let a = 10;
//     let a = 2;
// }





//ch3 变量的解构赋值
//ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构。解构赋值在实际开发中可以大量减少我们的代码量，并且让我们的程序结构更清晰。
//1. 数组的解构赋值

//以前
// let a=0;
// let b=1;
// let c=2;
// console.log(a,b,c);

// 新
//左边的结构和右边的结构要完全一致
//等号左边和等号右边的形式要统一，如果不统一解构将失败。
// let [a,b,c]=[0,1,2];
// console.log(a,b,c);

// let [m,[n,i],j]=[1,[2,3],4];
// console.log(m,n,i,j);

//解构是有默认值的
// let [foo = true] =[];
//赋值为undefined的时候，打印就是默认值
// console.log(foo); 
//控制台打印出true

// let [a,b="Apple"]=['苹果'];
// console.log(a+b);

// let [c,d="Orange"]=['橘子',undefined];
// console.log(c+d);
// let [e,f="Lemon"]=['柠檬',null];
// console.log(e+f);

// 需要注意的是undefined和null的区别。
// undefined相当于什么都没有，b是默认值。
// null相当于有值，但值为null。所以b并没有取默认值，而是解构成了null。

//2. 对象的解构赋值
// let {foo,bar} = {foo:'Apple',bar:'苹果'};
// console.log(foo+bar);
//注意：对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，由变量名觉定的，变量必须与属性同名，才能取到正确的值。
// let {foo1,bar1} = {foo1:'Apple',bar2:'苹果'};
// console.log(foo1+bar1);
//没有找到bar1 所以是undefined，所以变量与属性要可以对应上才能成功解构

// let foo;
// {foo} = {foo:'Apple'};  //报错 foo赋值时，再解构就会报错，解决方式在外面加圆括号
// console.log(foo);
//修改方式
// let foo;
// ({foo} ={foo:'Apple'});
// console.log(foo); 

//3. 字符串的解构赋值
// const [a,b,c,d,e,f]='ORANGE'; //单引号比双引号 压缩之后程序效率更高 所以尽量使用单引号
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);

//使用： 做权限的时候 做权限的判断