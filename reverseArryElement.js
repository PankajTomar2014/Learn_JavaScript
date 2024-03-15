/* Q: combine as elemt of arry and reverse and add to each other and 
reverse the total and put it back in new ararry number element;

const l1 = [2, 4, 3],
  l2 = [5, 6, 4];

reverse l1 = 342 , l2  = 465
result = 342 + 465 = 807
reverse the result and insert in array as integer number  = 708
output : [7 ,0 , 8] 
*/

const l1 = [2, 4, 3],
  l2 = [5, 6, 4];

function addTwoNumbers(arr1, arr2) {
  let revArry1 = arr1.reverse(),
    revArry2 = arr2.reverse();

  let num1 = "",
    num2 = "",
    addition = "",
    reverseAddition = "",
    additionReverseArry = [];

  for (let index = 0; index < revArry1.length; index++) {
    num1 += revArry1[index];
  }

  for (let index = 0; index < revArry2.length; index++) {
    num2 += revArry2[index];
  }
  addition = Number(num1) + Number(num2);
  reverseAddition = addition.toString().split("").reverse().join("");

  for (let index = 0; index < reverseAddition.length; index++) {
    additionReverseArry.push(Number(reverseAddition[index]));
  }

  return { num1, num2, reverseAddition, additionReverseArry };
}

console.log(addTwoNumbers(l1, l2));
