// Find
// The find() method returns the value of the first element that passes a test.
// The find() method executes a function for each array element.
// The find() method returns undefined if no elements are found.
// The find() method does not execute the function for empty elements.
// The find() method does not change the original array.

// FindIndex
// The findIndex() method executes a function for each array element.
// The findIndex() method returns the index (position) of the first element that passes a test.
// The findIndex() method returns -1 if no match is found.
// The findIndex() method does not execute the function for empty array elements.
// The findIndex() method does not change the original array.

const students = [
  { name: "Pankaj", id: 1 },
  { name: "Jayanth", id: 2 },
  { name: "Pankaj", id: 1 },
  { name: "Chaitanya", id: 3 },
  { name: "Manoj", id: 4 },
];

const useFind = students.find((i) => i.name == "Manoj");
const useFindIndex = students.findIndex((i) => i.name == "Manoj");

console.log(useFind); // return value { name: 'Manoj', id: 4 }
console.log(useFindIndex); // return index 4
