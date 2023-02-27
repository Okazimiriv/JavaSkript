
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

// _____________3 Модуль________


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//     country: "Jamaica",
//     city: "Kingston",
    
//   };
 
// console.log(apartment);

//___________________


// const countProps = {
//   mail: "poly@mail.com",
//   isOnline: true,
//   score: 500,
// }
//   let propCount = 0;

// for (const key in countProps) {
  
//     if (countProps.hasOwnProperty(key)) {
//       console.log(key);
//       propCount = Object.keys(countProps).length;
//       console.log(Object.keys(countProps));
//     }
//   }
//    console.log(propCount);

// countProps({});//0
// countProps({ name: "Mango", age: 2 });//2
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });//3

//_____________________

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

//____________________
// const salaries = {
//   kiwi: 200, poly: 50, ajax: 150
// }
  
//   let totalSalary = 0;
// const values = Object.values(salaries);
// for (const value of values) {
//   totalSalary += value;
// }
// console.log(totalSalary);

//__________________

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
//   console.log(color.hex);
//   console.log(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

//_____________

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
  // Change code below this line
// const propName = "name";
// const propName = "quantit";
// const propName = "price";
// const propName = "category";

// let result = [];

// for (const product of products) {
//   if (propName === "name") {
//     console.log(product.name);
//     result.push(product.name);
 
//   } else if (propName === "price") {
//     result.push(product.price);
//   } else if (propName === "quantity") {
//     result.push(product.quantity);
//   }
// }
//  console.log(result);
  

// console.log(result);
// getAllPropValues("name");//["Radar", "Scanner", "Droid", "Grip"]
// getAllPropValues("quantity");//[4, 3, 7, 9]
// getAllPropValues("price");//[1300, 2700, 400, 1200]
// getAllPropValues("category");//[]
//________________

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// const propName = "Blaster";
// // const propName = "Radar";
// // const propName = "Droid";
// // const propName = "Grip";
// // const propName = "Scanner";

// let result = 0;

// for (const product of products) {
//   if (propName === product.name) {
//     console.log(product.name);
// //
//     console.log(product.price);
//     console.log(product.quantity);
//   result = product.price * product.quantity;
//   break;
// }
// }
//  console.log('result=' , result);



// ("Blaster") повертає 0
// ("Radar") повертає 5200
// ("Droid") повертає 2800
// ("Grip") повертає 10800
// ("Scanner") повертає 8100
// []
// ________________

// const makeTask = {
//    category: "Finance", text: "Take interest"
// };

// const completed = false;
//   const category = "General";
// const priority = "Normal";
  
// const sekond = {
//   category: (category),
//   priority: (priority),
//   completed: (completed),
// };

// const newData = { ...sekond,...makeTask };
// //
// console.log('makeTask -', makeTask);
// console.log('sekond -', sekond);
// console.log('newData -', newData);
// // console.log(text);
// // console.log(completed);

//___________________

// function add(...args) {
//   let argSum = 0;
//   for (const arg of args) {
//     argSum += arg;
//   }
  

//   console.log(args);
//   console.log(argSum);
  
// }
// add(12, 4, 11, 48);

//_________________
// function addOverNum(firstNumber, ...otherArgs) {
  
//   let total = 0;

//   for (const arg of otherArgs) {
//     if (arg > firstNumber) {
//       total += arg;
//     }
    
//   }
//   console.log(firstNumber);
//   console.log(otherArgs);
//   console.log(total);
//   return total;
//   // Change code above this line
// }
// addOverNum(50, 15, 27); //0
// // addOverNum(15, 32, 6, 13, 19, 8); // 51

//____________________-

// function findMatches(firstArray, ...sekondArray) {
//   const matches = []; // Don't change this line
//   for (let i = 0; i < sekondArray.length; i += 1){
    
//     if (firstArray.includes(sekondArray[i])) {
//       matches.push(sekondArray[i]);
//     }
//   }


//   // Change code above this line

//   console.log(firstArray);
//   console.log(sekondArray);
  
//  console.log(matches);
// }
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7); // [1, 2]
// // findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);// [24, 9, 41]
// // findMatches([63, 11, 8, 29], 4, 7, 16); //[]

//___________________

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const newBook = this.books;
//       newBook.splice(this.books.indexOf(oldName), 1, newName);
    
//     console.log('newBook -', newBook);
//      return newBook;
//     // Change code above this line
//   }
// }

// console.log('books -', bookShelf.books);
// // bookShelf.updateBook("Haze", "Dungeon chronicles"); //["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]
// bookShelf.updateBook("The last kingdom", "Dune");//["Dune", "Haze", "The guardian of dreams"]


//_______________________

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
  
//     const newBook = this.books;
//     newBook.splice(this.books.indexOf(oldName), 1, newName);
//     console.log(newBook);
//     return newBook;
//     // Change code above this line
//   },
// };
// // bookShelf.updateBook("Haze", "Dungeon chronicles"); //["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]
// bookShelf.updateBook("The last kin", "Dune");//["Dune", "Haze", "The guardian of dreams"]

//____________________-


// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line

// // const newBook = this.books;
// //     newBook.splice(this.books.indexOf(oldName), 1, newName);
//     console.log(this['potions']);
//     console.log(this.potions.indexOf(potionName));
//     this.potions.splice(this.potions.indexOf(potionName), 1);
//     console.log('result ', this['potions']);
//   // return newBook;
//     // Change code above this line
//   },
// };
// atTheOldToad.removePotion("Dragon breath");//["Speed potion", Stone skin"]
// atTheOldToad.removePotion("Speed potion");//["Stone skin"]

//_________________________

  
  
  // getPotions() {
  //   return this.potions;
  // },
  // addPotion(newPotion) {
  //   for (const potion of this.potions) {
      
  //   if (potion.name.includes(newPotion.name)) {
  //     return `Error! Potion ${newPotion} is already in your inventory!`;
  //     };
  //   }
    

  //   this.potions.push(newPotion);
  //   // console.log(this.potions.push(newPotion));
  //   console.log(this.potions);
  // },


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     // console.table(this.potions);

//     for (const potion of this.potions) {       
//       if (potion.name === newPotion.name) {
//         console.log('Error! Potion ${newPotion} is already in your inventory!`');
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       };
//     };
//     this.potions.push(newPotion);
//   },
    
  

//   updatePotionName(oldName, newName) {
//     const { potions } = this;

//     for (let i = 0; i < potions.length; i += 1){
//     //   const potion = this.potions[i].name;
    
//     // for (const potion of potions) {
      
    
//     // console.log('name', potion.name);
//     console.log('oldName', oldName);
//     console.log('newName', newName);

//     if (potions[i].name === oldName) {      
//       console.log(`${oldName} === `, potions[i].name);
//       console.log(potions.indexOf(potions[i]));
    
//       potions[i].name = newName;
//       return;
//       }
//     }   
//      console.log(`Error! Potion ${oldName} is not in inventory!`);
//     return `Error! Potion ${oldName} is not in inventory!`;
//     //   this.potions.splice(potionIndex, 1, newName);
    
//   }, 
// };


// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");


// // atTheOldToad.removePotion("Dragon beath");

// console.log(atTheOldToad);


//++++++++++++++++++++++++++++++++++++ решение задачи зелье

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//     if (potion.name === newPotion.name) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//     // return `Potion ${newPotion} is added`;
//   },
//   removePotion(potionName) {
//     // const potionIndex = this.potions.indexOf(potionName);

//     // if (potionIndex === -1) {
//     //   return `Potion ${potionName} is not in inventory!`;
//     // }
// for (let i = 0; i < this.potions.length; i += 1) {
//       const potion = this.potions[i];
//     if (potionName === potion.name) {
//         this.potions.splice(i, 1);
//       };       
//     };
// return `Potion ${potionName} is not in inventory!`;
//     // this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//         const { potions } = this;

// for (let i = 0; i < potions.length; i += 1){
//     if (potions[i].name === oldName) {      
//       console.log(`${oldName} === `, potions[i].name);
//       console.log(potions.indexOf(potions[i])); 
      
//       potions[i].name = newName;
//       return;
//       };
//     } ;    
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };
// console.log('Math.max', Math.sum(20, 10)); 
//++++++++++++++++++++++===
