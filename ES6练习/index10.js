// 回调方法（callback），简单说回调方法就是将一个方法func2作为参数传入另一个方法func1中，当func1执行到某一步或者满足某种条件的时候才执行传入的参数func2

// // 当参数a大于10且参数func2是一个方法时 执行func2
// function func1(a, func2) {
//     if (a > 10 && typeof func2 == 'function') {
//         func2()
//     }
// }

// func1(11, function() {
//     console.log('this is a callback')
// })

// 一般来说我们会碰到的回调嵌套都不会很多，一般就一到两级，但是某些情况下，回调嵌套很多时，代码就会非常繁琐，会给我们的编程带来很多的麻烦，这种情况俗称——回调地狱。

// Promise的概念提出并实现，作用与回调方法几乎一致，都是在某种情况下执行预先设定好的方法，但是使用它却能够让代码变得更简洁清晰

// 什么是Promise
// 1. Promise是异步编程的一种解决方案
// 2. 它有三种状态，分别是pending-进行中、resolved-已完成、rejected-已失败

// 当Promise的状态又pending转变为resolved或rejected时，会执行相应的方法，并且状态一旦改变，就无法再次改变状态，这也是它名字promise-承诺的由来

// Promise的基本用法

// let obj = new Promise((resolve, reject)=>{
//     if(/* 异步操作成功 */){
//         resolve('完成');
//         // esolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
//     }else{
//         reject('拒绝');
//         // reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。
//     }
// });
// // Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。
// obj.then(()=>{
//     // 成功 
// },()=>{
//     // 失败
// });
// // 第一个回调函数是Promise对象的状态变为resolved时调用
// // 第二个回调函数是Promise对象的状态变为rejected时调用

// ex
let state=1;
function step1(resolve,reject){
    console.log('1.开始-洗菜做饭');
    if(state==1){
        resolve('洗菜做饭--完成');
    }else{
        reject('洗菜做饭--出错');
    }
};
function step2(resolve,reject){
    console.log('2.开始-坐下来吃饭');
    if(state==1){
        resolve('坐下来吃饭--完成');
    }else{
        reject('坐下来吃饭--出错');
    }
};
function step3(resolve,reject){
    console.log('3.开始-收拾桌子洗完');
     if(state==1){
        resolve('收拾桌子洗完--完成');
    }else{
        reject('收拾桌子洗完--出错');
    }
};
new Promise(step1).then(function(val){
    console.log(val);
    return new Promise(step2);
}).then(function(val){
     console.log(val);
    return new Promise(step3);
}).then(function(val){
    console.log(val);
    // return val;
});  