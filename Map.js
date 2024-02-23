// The Map object holds key-value pairs and remembers the original insertion order of the keys.
// Any value (both objects and primitive values) may be used as either a key or a value.

// Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection.
// A Map object is iterated by key-value pairs — a for(key of value) loop

// -------------------Wrong Way--------------------------------------
const wrongMap = new Map();
wrongMap["bla"] = "blaa";
wrongMap["bla2"] = "blaaa2";

console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
wrongMap.has("bla"); // false
wrongMap.delete("bla"); // false
console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }

// -------------------Right Way--------------------------------------
// The correct usage for storing data in the Map is through the set(key, value) method.

const contacts = new Map();
contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
contacts.has("Jessie"); // true
contacts.get("Hilary"); // undefined
contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });
contacts.get("Jessie"); // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete("Raymond"); // false
contacts.delete("Jessie"); // true
console.log(contacts.size); // 1

const myMap = new Map();
const key1 = "name",
  key2 = {},
  key3 = function () {};

myMap.set(key1, "my name is pankaj");
myMap.set(key2, "this is blank obj");
myMap.set(key3, "this is blank function");

// Getting the values from a Map by using their key
console.log(myMap.get(key1));
console.log(myMap.get(key2));

// Get the size of the Map
console.log(myMap.size);

// You can use loop using for..of to get keys and values
for (let [key, value] of myMap) {
  console.log(key, value);
}

// Get only keys
for (let key of myMap.keys()) {
  console.log("key is---", key);
}

// Get only values
for (let value of myMap.values()) {
  console.log("value is---", value);
}

// convert Map to Array;
let myArray = Array.from(myMap);
console.log("convert array is---", myArray);

// convert Map keys to Array;
let myKeysArray = Array.from(myMap.keys());
console.log("convert keys array is---", myKeysArray);

// convert Map values to Array;
let myaValuesArray = Array.from(myMap.values());
console.log("convert values array is---", myaValuesArray);
