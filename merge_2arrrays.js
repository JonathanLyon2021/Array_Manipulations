/*Merging two arrays using the spread operator in JavaScript*/

const arr1 = ["AAA", "BBB", "CCC"];
const arr2 = ["DDD", "EEE", "FFF"];

const result = [...arr1, ...arr2];

console.log(result);

//output = ["AAA", "BBB", "CCC", "DDD", "EEE", "FFF"];
