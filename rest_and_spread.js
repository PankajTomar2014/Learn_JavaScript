// rest and spread operators

// -----------------rest operator-example-with-array---------------------------------------------------------
function addNumbers(a, b, ...others) {
  // rest operator example , in we get all argument in an single array ,
  //that passed as seprated argument
  let multiply = 1;
  const sum = a + b;
  for (let index = 0; index < others.length; index++) {
    const element = others[index];
    multiply *= element;
  }

  return { sum, multiply };
}
// console.log(addNumbers(1, 2, 3, 4, 1, 5, 6, 8, 9));

// -----------------spread operator-example-with-array---------------------------------------------------------
const arry = [1, 2, 3, 4, 5];
function addNumbers2(a, b, c, d, e) {
  // spread operator example , that pass argument as an arry but receive it reperatly using ... operator
  return { a, b, c, d, e };
}

// console.log(addNumbers2(...arry));

// -----------------rest operator-example-with-Object---------------------------------------------------------

const user = {
  name: "pankaj tomar",
  age: 10,
  address: {
    city: "Ghaziabad",
    country: "India",
  },
};

const { age, ...rest } = user;
// console.log("newUser--------", rest);

// -----------------spread operator-example-with-Object---------------------------------------------------------

const newObj = { ...user, age: 35 }; // age is overrided
console.log("user--------", user);
console.log("newObj--------", newObj);
