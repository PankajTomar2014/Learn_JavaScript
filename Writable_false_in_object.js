// nameeee = () => {
//   console.log((this.name = "pankaj"));

//   console.log(this);
// };

// nameeee();

const user = {
  id: 20,
  name: "pankaj",
  age: 15,
  address: {
    city: "modinagar",
    country: "india",
  },
};

Object.defineProperties(user, { id: { writable: false } });

user.id = 30;

console.log(user);
