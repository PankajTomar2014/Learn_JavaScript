// map and forEach
// iterate ------- both methods that can be used to iterate over arrays
// callback ------- both receive a callback as an argument
// performance  ------- speed, they are a little bit different
// returning value ------ forEach() method returns "undefined" and map() returns a new array

const arr = [1, 2, 3, 4, 5];

const multiplyMap = arr.map((i) => i * 5); //return [ 5, 10, 15, 20, 25 ]

const multiplyForEach = arr.forEach((i) => i * 5); // return undefined

console.log(multiplyMap);

console.log(multiplyForEach);

console.log(arr); // [1, 2, 3, 4, 5];

// Then how to multiply my forEach
// see this

arr.forEach((element, index, arry) => {
  //   arry[index] = element * 5; can also use arry
  arr[index] = element * 5;
});

// now its done

console.log(arr); // [ 5, 10, 15, 20, 25 ]
