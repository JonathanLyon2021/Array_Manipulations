const arr1 = ["AAA", "CCC", "BBB"];

const arr2 = ["AAA", "CCC", "BBB"];

const arr3 = [null, "CCC", "BBB"];

const arr4 = [undefined, "CCC", "BBB"];

console.log(arr1 === arr2); // false

console.log(JSON.stringify(arr1) === JSON.stringify(arr2)); // true

console.log(JSON.stringify(arr3) === JSON.stringify(arr4)); // true
/* JSON.stringify does NOT consider null or undefined 

To overcome this, use Array.prototype.every()*/

console.log(arr3.every((arr, i) => arr === arr4[i])); // false
