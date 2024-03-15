// Leaarn Array() method;
// An array is a collection of items of same data type stored at contiguous memory locations.

/* When setting a property on a JavaScript array when the property is a valid array 
index and that index is outside the current bounds of the array, 
the engine will update the array's length property accordingly: */

let numbers = [1, 2, 3, 4];
numbers["10"] = 11;
numbers.length = 15; // Increasing the length
numbers.length = 2; // Decreasing the length
console.log(numbers);

/* Methods that have special treatment for empty slots include the following: 
concat(), copyWithin(), every(), filter(), flat(), flatMap(), forEach(), 
indexOf(), lastIndexOf(), map(), reduce(), reduceRight(), reverse(), slice(), 
some(), sort(), and splice(). 
Iteration methods such as forEach don't visit empty slots at all. 
Other methods, such as concat, copyWithin, etc., 
preserve empty slots when doing the copying, so in the end the array is still sparse.*/

/* Newer methods (e.g. keys) do not treat empty slots specially and treat them as 
if they contain undefined. Methods that conflate empty slots with undefined elements 
include the following: entries(), fill(), find(), findIndex(), findLast(), 
findLastIndex(), includes(), join(), keys(), toLocaleString(), toReversed(), 
toSorted(), toSpliced(), values(), and with(). */
