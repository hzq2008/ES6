// Symbol在对象中的作用

// ES5 的对象属性名都是字符串，这容易造成属性名的冲突。比如，你使用了一个他人提供的对象，但又想为这个对象添加新的方法，新方法的名字就有可能与现有方法产生冲突。
// ES6 引入Symbol,保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。
// ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。
// 它是 JavaScript 语言的第七种数据类型，前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。
// Symbol 值通过Symbol函数生成。这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的 Symbol 类型。凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。

// 回顾一下我们原来的数据类型
// var a = new String;
// var b = new Number;
// var c = new Boolean;
// var d = new Array;
// var e = new Object; 
// // Symbol如何声明
// 注意，Symbol函数前不能使用new命令，否则会报错。这是因为生成的Symbol是一个原始类型的值，不是对象
// var f= Symbol();
// // 数据类型的判断
// console.log(typeof(f));

// 先声明一个Symbol，然后我们在控制台输出一下。
// var g = Symbol('苹果');
// console.log(g);
// console.log(g.toString());
// 仔细看控制台是有区别的，没有toString的是红字，toString的是黑字。

// Symbol在对象中的应用

// 如何用Symbol构建对象的Key，并调用和赋值。
// var apple = Symbol();
// var obj={
//     [apple]:'苹果'
// }
// console.log(obj[apple]);
// obj[apple]='红蛇果';
// console.log(obj[apple]);

// Symbol对象元素的保护作用

// 在对象中有很多值，但是循环输出时，并不希望全部输出，那我们就可以使用Symbol进行保护。

// 没有进行保护的写法：
// var obj={name:'JackMa',skill:'boss',company:'alibaba'};
// for (let item in obj){
//     console.log(obj[item]);
// }
// 现在我不想别人知道我老板的名字，这时候我就可以使用Symbol来进行循环保护。
// let obj={skill:'web',company:'alibaba'};
// let name=Symbol();
// obj[name]='JackMa';
// for (let item in obj){
//     console.log(obj[item]);
// } 
// console.log(obj);

// Set和WeakSet数据结构
// Set的数据结构是以数组的形式构建的。
// Set的声明
// let setArr = new Set(['apple','mango','lemon','pear']);
// console.log(setArr);

// Set和Array 的区别是Set不允许内部有重复的值，如果有只显示一个，相当于去重。虽然Set很像数组，但是他不是数组。

// Set值的增删查
// // 追加add
// let setArr = new Set(['apple','mango','lemon','pear']);
// console.log(setArr);
// setArr.add('peach');
// console.log(setArr);
// // 删除delete
// setArr.delete('peach');
// console.log(setArr); 
// // 查找has 返回的是true或者false。
// console.log(setArr.has('apple'));
// // 删除clear
// setArr.clear();
// console.log(setArr);

// set的循环 for…of…循环：
// let setArr = new Set(['apple','mango','lemon','pear']);
// for (let item of setArr){
//     console.log(item);
// }
// // size属性 可以获得Set值的数量。
// console.log(setArr.size);

// // forEach循环
// setArr.forEach((value)=>console.log(value));

// WeakSet的声明
// let weakObj=new WeakSet();
// let obj={a:'apple',b:'ball'}
// weakObj.add(obj);
// console.log(weakObj);
// 这里需要注意的是，如果你直接在new 的时候就放入值，将报错。

// WeakSet里边的值也是不允许重复的
// let weakObj=new WeakSet();
// let obj={a:'apple',b:'ball'};
// let obj1={a:'apple',b:'ball'};//虽然里面的值一样 但是栈是不一样 内存空间是不同的 所以不是重复的
// // let obj1=obj; //这里的内村空间就是相同的 
// weakObj.add(obj);
// weakObj.add(obj1);
// console.log(weakObj);