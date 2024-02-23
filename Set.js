// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// A Set can hold any value of any data type.

const myset = new Set();
console.log(myset); //Set(0) {}

myset.add("pankaj");
console.log(myset); //Set(1) { 'pankaj' }

myset.add(false);
myset.add(true);
myset.add(undefined);
myset.add(null);
myset.add(120);
myset.add([]);
myset.add({});

console.log(myset); //{ 'pankaj', false, true, undefined, null, 120, [], {} }

const isDeleted = myset.delete(120);
console.log(isDeleted); // true

const isValueHas = myset.has(120);
console.log(isValueHas); // false

// find unique students
const students = [
  { name: "Rakesh", id: 1 },
  { name: "Jayanth", id: 2 },
  { name: "Rakesh", id: 1 },
  { name: "Chaitanya", id: 3 },
  { name: "Manoj", id: 4 },
  { name: "Jayanth", id: 2 },
  { name: "Chaitanya", id: 3 },
  { name: "Jayanth", id: 2 },
];

const uniqueStudent = Array.from(new Set(students.map((i) => i.name))).map(
  (name) => students.find((student) => student.name == name)
);

console.log(uniqueStudent);
