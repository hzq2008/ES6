// ES5中的函数写法
// function add(a,b){
//     return a+b;
// }
// console.log(add(1,2));
//函数的默认值
// function add(a,b=1){
//     return a+b;
// }
// console.log(add(1,2));
// 两个好处：
//      首先，阅读代码的人，可以立刻意识到哪些参数是可以省略的，不用查看函数体或文档；
//      其次，有利于将来的代码优化，即使未来的版本在对外接口中，彻底拿掉这个参数，也不会导致以前的代码无法运行。

// 参数变量是默认声明的，所以不能用let或const再次声明。
// function foo(x = 5) {
//     let x = 1; // error 'x' has already been declared
//     const x= 2; // error
//     console.log(x);
//   }
//   foo();

// 使用参数默认值时，函数不能有同名参数。

// function foo(x, x, y) {
//     // ...
// }
// // 不报错  
  
// function foo(x, x, y = 1) {
//     // ...
// }
// 报错 SyntaxError: Duplicate parameter name not allowed in this context

// 参数默认值不是传值的，而是每次都重新计算默认值表达式的值。
// let x = 99;
// function foo(p = x + 1) {
//   console.log(p);
// }

// foo() // 100

// x = 100;
// foo() // 101
// 参数p的默认值是x + 1。这时，每次调用函数foo，都会重新计算x + 1，而不是默认p等于 100。

// 主动抛出错误
// function divide(a, b=2){
//     if(b==0){
//         throw new Error('B must not be zero');
//     }

//     return a/b;
// }
// console.log(divide(7,0));

//严谨模式 use strict es5必须写在头部
//ES6可以写在函数内部/会计作用域内
// function add(a,b){
//     'use strict'
//     if(a == 0){
//         throw new Error('This is error');
//     }
//      return a+b;
// }
// console.log(add(1,2));
//严谨模式下 不可以设置默认值

// 获得需要传递的参数个数
// 如果你在使用别人的框架时，不知道别人的函数需要传递几个参数怎么办？ES6为我们提供了得到参数的方法(xxx.length).我们用上边的代码看一下需要传递的参数个数。

// function add(a,b=1){
//     // 'use strict'
//     if(a == 0){
//         throw new Error('This is error');
//     }
//      return a+b;
// }
// console.log(add.length);
// 当函数的参数有默认值的时候，显示传递的参数个数是去掉默认值的参数的个数，这里的意思是指，获得的参数的格式是必须传递值的参数，也就是说a是必须传递的，所以只有a一个参数。

// 尖头函数
// ES6 允许使用“箭头”（=>）定义函数。
// var f = v => v;

// // 等同于
// var f = function (v) {
//   return v;
// };

// 如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。
// var f = () => 5;
// // 等同于
// var f = function () { return 5 };

// var sum = (num1, num2) => num1 + num2;
// // 等同于
// var sum = function(num1, num2) {
//   return num1 + num2;
// };
// 如果箭头函数只有一行语句，且不需要返回值，可以采用下面的写法，就不用写大括号了。
// 如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。
// var sum = (num1, num2) => { return num1 + num2; }
// // 箭头函数可以与变量解构结合使用。
// const full = ({ first, last }) => first + ' ' + last;

// // 等同于
// function full(person) {
//   return person.first + ' ' + person.last;
// }

// 箭头函数的好处
// 1.使得表达更加简洁。
const isEven = n => n % 2 == 0;
const square = n => n * n;
// 2.箭头函数的一个用处是简化回调函数。
// 正常函数写法
[1,2,3].map(function (x) {
    return x * x;
  }); 
  // 箭头函数写法
  [1,2,3].map(x => x * x);

  // 正常函数写法
var result = values.sort(function (a, b) {
    return a - b;
  }); 
  // 箭头函数写法
  var result = values.sort((a, b) => a - b);

// rest 参数与箭头函数结合
const numbers = (...nums) => nums;

numbers(1, 2, 3, 4, 5)
// [1,2,3,4,5]

const headAndTail = (head, ...tail) => [head, tail];

headAndTail(1, 2, 3, 4, 5);
// [1,[2,3,4,5]]

// 使用注意点
// 箭头函数有几个使用注意点。

// （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

// （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

// （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。

// 上面四点中，第一点尤其值得注意。this对象的指向是可变的，但是在箭头函数中，它是固定的。

function foo() {
    setTimeout(() => {
      console.log('id:', this.id);
    }, 100);
  }
  
  var id = 21;
  
  foo.call({ id: 42 });
  // id: 42

//   上面代码中，setTimeout的参数是一个箭头函数，这个箭头函数的定义生效是在foo函数生成时，而它的真正执行要等到 100 毫秒后。如果是普通函数，执行时this应该指向全局对象window，这时应该输出21。但是，箭头函数导致this总是指向函数定义生效时所在的对象（本例是{id: 42}），所以输出的是42。

function Timer() {
    this.s1 = 0;
    this.s2 = 0;
    // 箭头函数
    setInterval(() => this.s1++, 1000);
    // 普通函数
    setInterval(function () {
      this.s2++;
    }, 1000);
  }
  
  var timer = new Timer();
  
  setTimeout(() => console.log('s1: ', timer.s1), 3100);
  setTimeout(() => console.log('s2: ', timer.s2), 3100);
  // s1: 3
  // s2: 0