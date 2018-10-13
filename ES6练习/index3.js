// // //二进制
// let binary = 0B010101;
// console.log(binary);
// // //八进制
// let octal=0o666;
// console.log(octal);

// //数字判断和转换
// // 数字验证Number.isFinite( xx )
// // 可以用来进行数字验证，只要是数字，不论是浮点型还是整形都会返回true，其他时候会返回false。
// let a= 11/4;
// console.log(Number.isFinite(3));//true
// console.log(Number.isFinite(a));//true
// console.log(Number.isFinite('apple'));//false
// console.log(Number.isFinite(NaN));//false
// console.log(Number.isFinite(undefined));//false
// // NaN是特殊的非数字
// console.log(Number.isNaN(NaN));
//判断是否为整数Number.isInteger(xx)
// let b=123.1;
// console.log(Number.isInteger(b)); 
// // 整数转换Number.parseInt(xxx)和浮点型转换Number.parseFloat(xxx)
// let c='9.18';
// console.log(Number.parseInt(c)); 
// console.log(Number.parseFloat(c));

// ES6中新增的数组知识（1）
// 1. JSON数组格式转换
// JSON的数组格式就是为了前端快速的把JSON转换成数组的一种格式，我们先来看一下JSON的数组格式怎么写。
// let  json = {
//     '0': '苹果',
//     '1': 'apple',
//     '2': '巧砸牛顿',
//     length:4
// }
//带有length属性，这种特殊的json格式都可以轻松使用ES6的语法转变成数组。

// let  json = {
//     'name': 'Tom',
//     'age': '12',
//     'sex': 'boy',
//      length:2
// }
// // 就用Array.from(xxx)来进行转换
// let arr1=Array.from(json);
// console.log(arr1);
// 要将一个json对象转换为一个真正的数组，必须具备以下条件：

// 　　1、该类数组对象必须具有length属性，用于指定数组的长度。如果没有length属性，那么转换后的数组是一个空数组。

// 　　2、该json数组对象的属性名必须为数值型或字符串型的数字

// 　　ps: 该json数组对象的属性名可以加引号，也可以不加引号
// 实际开发中这种方法还是比较常用的，毕竟节省了我们代码行数，也让我们的程序更清晰。

// 2. Array.of()方法：

// 它负责把一堆文本或者变量转换成数组。在开发中我们经常拿到了一个类似数组的字符串，需要使用eval来进行转换，如果你一个老手程序员都知道eval的效率是很低的，它会拖慢我们的程序。这时候我们就可以使用Array.of方法。
// 把数字转换成数组
// let arr2 =Array.of(3,4,5,6);
// console.log(arr2);
// 它不仅可以转换数字，字符串也是可以转换的
// let arr3 =Array.of('苹果','apple','砸到了牛顿');
// console.log(arr3);

// fill( )实例方法:
// fill()也是一个实例方法，它的作用是把数组进行填充，它接收三个参数，第一个参数是填充的变量，第二个是开始填充的位置，第三个是填充到的位置。
// let arr4=[0,1,2,3,4,5,6,7,8,9];
// arr4.fill('apple',2,5);
// console.log(arr4);
// 上边的代码是把数组从第二位到第五位用apple进行填充。

// 数组的遍历
// for…of循环：
// 允许你遍历 Arrays（数组）, Strings（字符串）, Maps（映射）, Sets（集合）等可迭代的数据结构等。

// 语法
// for (variable of iterable) {
//     statement
// }
// variable：每个迭代的属性值被分配给该变量。
// iterable：一个具有可枚举属性并且可以迭代的对象。
// 这种形式比ES5的for循环要简单而且高效。先来看一个最简单的for…of循环
// array（数组）
// let arr5=['apple','banana','mango','lemon','watermelon']
// for (let item of arr5){
//     console.log(item);
// }
// 其结果就是打印出 arr5 数组中的每一个值。

// Maps(映射)：Map 对象就是保存 key-value(键值) 对。

// const iterable = new Map([['one', 1], ['two', 2]]);
 
// for (const [key, value] of iterable) {
//   console.log(`Key: ${key} and Value: ${value}`);
// }

// Set(集合)
// Set(集合) 对象允许你存储任何类型的唯一值，这些值可以是原始值或对象。 Set(集合) 对象只是值的集合。 Set(集合) 元素的迭代基于其插入顺序。 Set(集合) 中的值只能发生一次。如果您创建一个具有多个相同元素的 Set(集合) ，那么它仍然被认为是单个元素。
// const set1 = new Set([1, 1, 2, 2, 1]);
 
// for (const value of set1) {
//   console.log(value);
// }

// String(字符串)
// 字符串用于以文本形式存储数据。

const string1 = 'javascript';
 
for (const value of string1) {
  console.log(value);
}

// 同时输出数组的内容和索引：我们用entries()这个实例方法，配合我们的for…of循环就可以同时输出内容和索引了。
let arr6=['apple','banana','mango','lemon','watermelon']
for (let [index,val] of arr6.entries()){
    console.log(index+':'+val);
}

// entries( )实例方法：
// entries() 方法返回一个数组的迭代对象，该对象包含数组的键值对 (key/value)。

// 迭代对象中数组的索引值作为 key， 数组元素作为 value。


// entries()实例方式生成的是Iterator形式的数组，那这种形式的好处就是可以让我们在需要时用next()手动跳转到下一个值。我们来看下面的代码：
let fruits=['apple','banana','mango','lemon','watermelon','orange']
let list=fruits.entries();
console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value);