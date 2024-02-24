// Tradional for loop
const students = [
  { name: "Pankaj", id: 1 },
  { name: "Jayanth", id: 2 },
  { name: "Pankaj", id: 1 },
  { name: "Chaitanya", id: 3 },
  { name: "Manoj", id: 4 },
];

// for (let index = 0; index < students.length; index++) {
//   const element = students[index];
//   const names = element.name;
//   const ids = element.id;
//   console.log("{ " + names + "--- " + ids + " }");
// }

// for..in loop

const userObj = {
  name: "Pankaj",
  age: 25,
  address: {
    city: "Delhi",
    pinCode: 110001,
    country: "India",
  },
  id: 220,
};
// Itrate an object using tradional for loop;
// console.log("Get all keys in arry-->", Object.keys(userObj));

// for (let index = 0; index < Object.keys(userObj).length; index++) {
//   const valueOnKey = userObj[Object.keys(userObj)[index]];
//   const key = Object.keys(userObj)[index];
//     console.log("valueOnKey------",valueOnKey);
//   console.log("key------", key);
// }

// Itrate example of for..in
// for (key in userObj) {
//   console.log("KEY---", key);
//   console.log("VALUE---", userObj[key]);
// }
// const sentence = "Pankaj is the best developer";

// for (char of sentence) {
//   console.log("Char---", char);
//   console.log("undefined--->", sentence[char]);
// }

// Itrate example of for..in
// for (index in sentence) {
//   console.log("Index---", index);
//   console.log("Char---", sentence[index]);
// }
