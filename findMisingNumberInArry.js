// Natural numbers are a set of positive integers starting from 1 and continuing indefinitely.

const numbers = [1, 2, 3, 5, 6, 7, 8, 9, 10];

// function findMisingNumber(numbers) {
//   const n = numbers.length + 1; //length Including the missing number
//   const totalSum = (n * (n + 1)) / 2; // Sum of natural numbers formula
//   const sumOfNumber = numbers.reduce((sum, num) => sum + num, 0);
//   const missingNumber = totalSum - sumOfNumber;
//   return totalSum;
// }

// console.log(findMisingNumber(numbers));

// second way to find missing way
function findMissingNumber(numbers) {
  let missingNumber;
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] + 1 !== numbers[i + 1]) {
      missingNumber = numbers[i] + 1;
      break;
    }
  }
  return missingNumber;
}

console.log(findMissingNumber(numbers));
