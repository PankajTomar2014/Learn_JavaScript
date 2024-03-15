const arry = [
  {
    _id: 1710241069400,
    city: "modinagar",
    community: "gola",
    fullName: "pankaj",
    height: "4fit",
    meritalStatus: "yes",
    subCommunit: "chamar",
  },
  {
    _id: 656456465789,
    city: "modinagar",
    community: "gola",
    fullName: "pankaj",
    height: "4fit",
    meritalStatus: "yes",
    subCommunit: "chamar",
  },
  {
    _id: 978746545641,
    city: "modinagar",
    community: "gola",
    fullName: "pankaj",
    height: "4fit",
    meritalStatus: "yes",
    subCommunit: "chamar",
  },
  ,
  {
    _id: 5874544,
    city: "modinagar",
    community: "gola",
    fullName: "pankaj",
    height: "4fit",
    meritalStatus: "yes",
    subCommunit: "chamar",
  },
];

const matchItem = arry.filter((item) => item._id != "5874544");

console.log(matchItem);
