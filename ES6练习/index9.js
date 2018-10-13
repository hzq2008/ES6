// Proxy 代理
// 用作在语言层面上操作对象
// 增强在 函数（方法） 和 对象 
// Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。
// 相当在真正的方法之前使用 预处理
//es5里面
// var obj={
//     add:function(val){
//         return val+10;
//     },
//     name:'This is MIN.'
// };
// console.log(obj.add(100));
// console.log(obj.name);
// 声明了一个obj对象，增加了一个对象方法add和一个对象属性name，然后在控制台进行了打印。


// 声明Proxy

// 我们用new的方法对Proxy进行声明。可以看一下声明Proxy的基本形式。

// new Proxy（{},{}）;

// 两个花括号，第一个花括号就相当于我们方法的主体，后边的花括号就是Proxy代理处理区域，预处理机制。
  
// 把上边的obj对象改成我们的Proxy形式。
var pro = new Proxy({
    add: function (val) {
        return val + 10;
    },
    name: 'This is MIN.'
}, {
        //get set apply
        get:function(target,key,property){
            console.log('进入 Get');
            return target[key];
        }, 
        // get属性
        // get属性是在你得到某对象属性值时预处理的方法，他接受三个参数
        // target：得到的目标值
        // key：目标的key值，相当于对象的属性
        // property：proxy 实例本身（严格地说，是操作行为所针对的对象）
        set:function(target,key,value,receiver){
            console.log(`    setting ${key} = ${value}`);
            return target[key] = value;
        }
        // set属性是值你要改变Proxy属性值时，进行的预先处理。它接收四个参数。
        // target:目标值。
        // key：目标的Key值。
        // value：要改变的值。
        // receiver：改变前的原始值。
    });
console.log(pro.name);
pro.name='Bearemax';
console.log(pro.name);

// // apply的使用

// // apply的作用是调用内部的方法，它使用在方法体是一个匿名函数时。看下边的代码。

target = function () {
    return 'I am MIN.';
};
var handler = {
    apply(target, ctx, args) {
    //apply方法可以接受三个参数，分别是目标对象、目标对象的上下文对象（this）和目标对象的参数数组。
        console.log('do apply');
        return Reflect.apply(...arguments);
    }
}

var pro2 = new Proxy(target, handler);
console.log(pro2());
// 变量pro2是 Proxy 的实例，当它作为函数调用时（pro2()），就会被apply方法拦截，返回一个字符串。

// ex
var twice = {
    apply (target, ctx, args) {
      return Reflect.apply(...arguments) * 2;
    }
  };
  function sum (left, right) {
    return left + right;
  };
  var proxy = new Proxy(sum, twice);
console.log(proxy(1, 2) );// 6
console.log(proxy.apply(null, [7, 8]));// 30

// ex
var obj = new Proxy({}, {
    get: function (target, key, receiver) {
      console.log(`getting ${key}!`);
      return Reflect.get(target, key, receiver);
    },
    set: function (target, key, value, receiver) {
      console.log(`setting ${key}!`);
      return Reflect.set(target, key, value, receiver);
    }
  });
  obj.count = 1
  console.log(++obj.count);