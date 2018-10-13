//ch4 扩展运算符和rest运算符

//扩展运算符（spread）是三个点（`...`）。功能是把数组或类数组对象展开成一系列用逗号隔开的值
//当编写一个方法时，我们允许它传入的参数是不确定的。这时候可以使用对象扩展运算符来作参数，看一个简单的列子：
// 扩展语法允许一个表达式在期望多个参数（用于函数调用）或多个元素（用于数组字面量）或多个变量（用于解构赋值）的位置扩展
// function fn (...arg){
//     console.log(arg[0]);
//     console.log(arg[1]);
//     console.log(arg[2]);
//     console.log(arg[3]);
 
// }
// fn (1,2,3);
//可以传入多个值，并且就算方法中引用多了也不会报错

//扩展运算符的用处：
//我们先用一个例子说明，我们声明两个数组arr1和arr2，然后我们把arr1赋值给arr2，然后我们改变arr2的值，你会发现arr1的值也改变了，因为我们这是对内存堆栈的引用，而不是真正的赋值。
// let arr1=['张三','李四','王五'];
// let arr2=arr1;
// console.log(arr2);
// arr2.push('钱六');
// console.log(arr1);
//这是我们不想看到的，可以利用对象扩展运算符简单的解决这个问题，现在我们对代码进行改造。

// let arr1=['张三','李四','王五'];
// //let arr2=arr1;
// let arr2=[...arr1];
// console.log(arr2);
// arr2.push('钱六');
// console.log(arr2);
// console.log(arr1);
//解决了一些业务逻辑错误

// rest运算符
// rest运算符和扩展运算符，它们有很多相似之处。它也用…（三个点）来表示，我们先来看一个例子。
// function fn (first,...arg){
//     console.log(arg.length);//7
// }
// fn (0,1,2,3,4,5,6,7);

// 这时候控制台打印出了7，说明我们arg里有7个数组元素，这就是rest运算符的最简单用法。
// 剩余参数不固定的时候，可以使用rest运算符

// 如果我们要打印剩余的参数
// function fn(first, second,...arg){
//     for(let i=0;i<arg.length;i++){
//         console.log(arg[i]);
//     }
// }
// fn(0,1,2,3,4,5,6,7);
// 缺点：多余的空间存放i，可能会影响效率

//如何循环输出rest运算符
// 这里我们用for…of循环来进行打印出arg的值，我们这里只是简单使用一下，以后我们会专门讲解for…of循环。

// function fn(first,...arg){
//     for(let val of arg){
//         console.log(val);
//     }
// }
 
// fn(0,1,2,3,4,5,6,7);
// for…of的循环可以避免我们开拓内存空间，增加代码运行效率，所以建议大家在以后的工作中使用for…of循环。

// ch6 字符串模版
// 学习ES6对字符串新增的操作，最重要的就是字符串模版，字符串模版的出现让我们再也不用拼接变量了，而且支持在模板里有简单计算操作。

// 在ES5下我们的字符串拼接
// let apple='苹果';
// let myFood1 = '我最喜欢的水果是'+apple+'。因为'+apple+'的果实富含矿物质和维生素，是人们经常食用的水果之一。';
// document.write(myFood1);

// ES5下必须用这样的形式进行拼接，这样很麻烦而且很容易出错。
// ES6新增了字符串模版，可以很好的解决这个问题。字符串模版不再使用‘xxx’这样的单引号，而是换成了xxx这种形式，也叫连接号`(tab上面的，反引号)。这时我们再引用apple变量就需要用${apple}这种形式了，我们对上边的代码进行改造。
// let banana='香蕉';
// let myFood2 = `小黄人<b>最爱的水果</b>是${banana}。<br/>${banana}的消化和吸收良好,且能长时间保持能量。<br/>`;
// document.write(myFood2);

// 好处：不容易出错
    // 可以添加换行
    // 可以加html标签
    // 对运算也是支持的
// let a=1;
// let b=2;
// let result=`${a+b}`;
// document.write(result);

// 字符串查找
// ES6还增加了字符串的查找功能，而且支持中文
// ES5的写法：查找是否存在
// let apple='苹果';
// let myFood1 = '我最喜欢的水果是苹果。因为苹果的果实富含矿物质和维生素，是人们经常食用的水果之一。';
// document.write(myFood1.indexOf(apple));
// 其实这种方法并不实用，给我们的索引位置，我们自己还要确定位置。

// ES6直接用includes就可以判断，不再返回索引值，这样的结果我们更喜欢，更直接。
// let apple='苹果';
// let myFood1 = '我最喜欢的水果是苹果。因为苹果的果实富含矿物质和维生素，是人们经常食用的水果之一。';
// // document.write(myFood1.includes(apple));
// // 判断开头是否存在：

// document.write(myFood1.startsWith(apple));
// // 判断结尾是否存在：
// myFood1.endsWith(apple);
// 需要注意的是：starts和ends 后边都要加s

// 复制字符串
// 我们有时候是需要字符串重复的，比如分隔符和特殊符号，这时候复制字符串就派上用场了，语法很简单。
// document.write('Apple | '.repeat(3));
