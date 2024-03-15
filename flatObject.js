let input = {
  a: { b: "c" },
  d: { e: { f: { g: "h" } } },
  i: "j",
  k: { l: { m: "n" } },
};
// Output: {
// a.b: "c",
// d.e.f.h: "h",
// i: "j",
// k.l.m: "n",
// }

function flattenObject(obj, parentKey = "") {
  let newObj = {};
  for (let key in obj) {
    if (obj[key]) {
      let newKey = parentKey ? `${parentKey}.${key}` : key;
      if (typeof obj[key] === "object" && obj[key] !== null) {
        Object.assign(newObj, flattenObject(obj[key], newKey));
      } else {
        newObj[newKey] = obj[key];
      }
    }
  }

  return newObj;
}
let output = flattenObject(input);
console.log(output);
