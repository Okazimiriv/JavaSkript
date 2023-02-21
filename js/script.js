
// const name = prompt("name");
// const message = `Name ${name} is ${name.length} characters long`;
// console.log(message);




// const string = "Hello world";
// const length = prompt("nlength");
 
// const substring = string.slice(0, length);
//  console.log(substring);

// const message= prompt("message");
//   let result;
//  result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');
// console.log(result);

// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript - це цікаво";
// console.log(message.split(" "));//['JavaScript', '-', 'це', 'цікаво']
// console.log(message.split("-"));//['JavaScript ', ' це цікаво']


// const array = [1, 2, 3, 4, 5];
// // const deletedArray = array.splice(1, 2);
// const deletedArray = [array[0], array[array.length - 1]];
// console.log(deletedArray);


// function getExtremeElements(array) {
//   let array = [1, 2, 3, 4, 5];
// const getExtremeElements = [array[0], array[array.length - 1]];

 
//   return getExtremeElements;
// }
// // getExtremeElements([1, 2, 3, 4, 5]);
// console.log(getExtremeElements);

// const message = "JavaScript is in my blood";
// const pricePerWord = 10;
// let price;
// price = pricePerWord * message.split(" ").length;
// console.log('Вартість роботи - ', price, 'грн');

// const title = "Arrays for begginers";
// const slug = title.toLowerCase().split(' ').join('-');
// console.log(slug);

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstTwoEls = fruits.slice(0, 2) ;
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// const firstArray = ["Mango", "Poly"];
// const secondArray = ["Ajax", "Chelsea", "Mango"];
// const maxLength = 5;

// const allArray = firstArray.concat(secondArray);
// console.log(allArray);
// console.log(allArray.length);
// let allArrayNew;
// if (allArray.length > maxLength) {
//   allArrayNew = allArray.slice(0, maxLength);
// } else {
//   allArrayNew = allArray;
// }

// console.log(allArrayNew);

// const start = 3;
// const end = 7;

// for (let i = 3; i <= 7; i += 1) { // Change this line
//   console.log(i);
// }

// ___________

// const number = 4;
// let total = 0;
// const numbers = [];

// for (let i = 1; i <= number; i += 1) {
//   numbers.push(i);
// }
// console.log(numbers);

// for (const value of numbers) {
//   total += value;
// }
// console.log('Total: ', total);
//___________________________

// const string = "The quick brown fox jumped over the lazy dog";
// let stringNew = string.split(" ");
// let longestWord = '';
// console.log(stringNew);

// for (let i = 0; i < stringNew.length; i += 1) {
//   if (stringNew[i].length > longestWord.length) {
//     longestWord = stringNew[i];
//   }
// }
 
// console.log('найдовше слово - ', longestWord);

//____________________________
// const numbers = [1, 2, 3, 4, 5];
// const value = 3;
// const numbersNew = [];

// for (let i = 0; i < numbers.length; i += 1){
//   // console.log(numbersNew);
//   if (numbers[i] > value) {
//     numbersNew.push(numbers[i]);
//   }
// }
// console.log('numbersNew = ', numbersNew);
// //___________________________

// const fruits = ["apple", "plum", "pear", "orange"];
// const fruit = "plum";
// console.log(fruits.includes(fruit));

//___________________
// const array1 = [24, 12, 27, 3];
// const array2 = [12, 8, 3];
// let arrayNew = [];


// for (let i = 0; i < array1.length; i += 1) {
//    console.log(array1[i]);
//   if (array2.includes(array1[i])) {
//         arrayNew.push(array1[i]);
//       }
//   }
//   console.log(arrayNew);

 //_________________
 
//  const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// // const d = 12 % 7;
// const e = 8 % 3;
//  console.log(e);

//____________________

// const start = 3;
// const end = 11;
// let evenNumbers = [];

// for (let i = start; i <= end; i += 1){
//   if (i % 2 === 0) {
//     evenNumbers.push(i);
//   }
// }
// console.log(evenNumbers)

//________________

// const array = [1, 2, 3, 4, 5];
// const value = 3;
// const array = [1, 2, 3, 4, 5];
// const value = 17;

// for (let i = 0; i < array.length; i += 1){
//   value === i;
// }
// console.log(array.includes(value))


