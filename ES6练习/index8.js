// map数据结构
// 我们知道的数据结构，已经有了json和set。
// 今天介绍map，是一种灵活，简单的适合一对一查找的数据结构。

// Json和map格式的对比
// map的效率和灵活性更好

// 先来写一个JSON，这里我们用对象进行模拟操作。
let json = {
    name:'min',
    skill:'web'
}
console.log(json.name);
// 创建一个map
const map = new Map([['a',1],['b',2]]);
console.log(map);  //{"a" => 1, "b" => 2}

// map自带的属性
console.log(map.size) // 2

// map类的方法
// 1 set(key, value) 设置键名key对应的键值为value，然后返回整个 Map 结构。如果key已经有值，则键值会被更新，否则就新生成该键。
map.set('qwe', '123').set('apple', '苹果').set('XD', 'smile');
console.log(map); //{"a" => 1, "b" => 2, "qwe" => "123", "apple" => "苹果", "XD" => "smile"}

// 2 get(key) get方法读取key对应的键值，如果找不到 key，返回undefined。
console.log(map.get('apple')); //true
console.log(map.get('x')); //false

// 3 delete(key) 删除某个键，返回true。如果删除失败，返回false。
console.log(map.delete('a')); //true
console.log(map); 
console.log(map.delete('a')); //false

// 4 has(key) 方法返回一个布尔值，表示某个键是否在当前Map对象之中。
console.log(map.has('XD')); //true
console.log(map.has('a')); //false

// 5 clear() 清除所有数据，没有返回值。
map.clear(); console.log(map); // {}

const map2 = new Map([['a',1],['b',2]]);
// 6 keys() 返回键名的遍历器
console.log(map2.keys());

// 7 values() 返回键值的遍历器
console.log(map2.values());

// 8 entries() 返回键值对的遍历器
console.log(map2.entries());

// 9 forEach() 使用回调函数遍历每个成员
map.forEach(function (key, value, map2){
    console.log(key + ':' + value);
  })

map.set(NaN, 10).set(NaN, 100); 
console.log(map); //{NaN => 100}
map.set({}, 'x').set({}, 'y');
console.log(map); //{NaN => 100, Object {} => "x", Object {} => "y"}
console.log({} === {});//false
// map对比的是引用地址，引用地址不同则视为不相同。


