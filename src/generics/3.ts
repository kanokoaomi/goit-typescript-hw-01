function merge<T, K> (objA: T, objB: K): T & K {
  return Object.assign({}, objA, objB);
}

const obj1 = { name: "Alice", age: 25 };
const obj2 = { name: "Petro", age: 21 };

const mergedObj = merge(obj1, obj2);
console.log(mergedObj)