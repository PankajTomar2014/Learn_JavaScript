// Q :  find how many time repeating Character

const strig = "pankaj_tomar_is_the_best_developer";

const counter = {};

for (let index = 0; index < strig.length; index++) {
  const element = strig[index];

  if (counter[element]) {
    counter[element]++;
  } else {
    counter[element] = 1;
  }
}

console.log(counter);
