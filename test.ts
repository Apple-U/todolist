// 普通类型定义 
// type Dog<T> = { name: string, type: T } 

// // 普通类型使用 
// const dog: Dog<number> = { name: 'ww', type: 20 } 

// // 类定义
// class Cat<T> {
//   private type: T;
//   constructor(type: T) { this.type = type; }
// }

// // 类使用
// const cat: Cat<number> = new Cat<number>(20); // 或简写 const cat = new Cat(20)

// // 函数定义
// function swipe<T, U>(value: [T, U]): [U, T] {
//   return [value[1], value[0]];

// }
// // 函数使用
// swipe<Cat<number>, Dog<number>>([cat, dog])  // 或简写 swipe([cat, dog])

type Dog<T> = { name: string, type: T }

function adopt<T>(dog: Dog<T>) { return dog };

const dog = { name: 'ww', type: 'hsq' };  // 这里按照Dog类型的定义一个type为string的对象
adopt(dog);  // Pass: 函数会根据入参类型推断出type为string

const dog2={name:'susu',type: 1}
adopt<number>(dog2)
adopt(dog2)


