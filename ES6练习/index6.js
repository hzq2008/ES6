// ES6中对象
// let name="min";
// let skill= 'web';
// var obj= {name,skill};
// console.log(obj); // {name: "min", skill: "web"} 
// ES6 允许在对象之中，直接写变量。这时，属性名为变量名, 属性值为变量的值。

// 对象Key值构建
// 有时候我们会在后台取出key值，而不是我们前台定义好的，这时候我们如何构建我们的key值那。比如我们在后台取了一个key值，然后可以用[ ] 的形式，进行对象的构建。
// let key='skill';
// var obj={
//     [key]:'web'
// }
// console.log(obj.skill);

// 自定义对象方法
// 如果属性值为函数，则通常把这个属性称为“方法”
// var obj={
//     add:function(a,b){
//         return a+b;
//     }
// }
// console.log(obj.add(1,2));  //3

// 对象的比较方法
// 以前进行对象值的比较，经常使用===来判断
var obj1 = {name:'apple'};
var obj2 = {name:'apple'};
console.log(obj1.name === obj2.name);//true
// ES6为我们提供了is方法进行对比
console.log(obj1.name === obj2.name);//true
console.log(Object.is(obj1.name,obj2.name)); //true
// 区分=== 和 is方法
console.log(+0 === -0);  //true
console.log(NaN === NaN ); //false
console.log(Object.is(+0,-0)); //false
console.log(Object.is(NaN,NaN)); //true
// ===为同值相等，is()为严格相等

// Object.assign( )合并对象
var a={a:'apple'};
var b={b:'苹果'};
var c={c:'web'};
let d=Object.assign(a,b,c)
console.log(d);