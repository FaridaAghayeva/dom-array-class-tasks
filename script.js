// // Loops, Arrays, Functions and Objects

// // task1

// function takeArray(arr) {
//   for (let i of arr) {
//     console.log(i);
//   }
// }
// takeArray([1, 2, 3, 4, 5, 6, 7]);

// // task2

// function sumArray(arr) {
//   let sum = 0;
//   for (let i of arr) {
//     sum += i;
//   }
//   console.log(sum);
// }
// sumArray([1, 2, 3, 4]);

// // task3

// function displayEvens(arr) {
//   let arr2 = [];
//   arr.map((item) => {
//     item % 2 == 0 ? arr2.push(item) : console.log();
//   });
//   console.log(arr2);
// }
// displayEvens([1, 2, 3, 4, 5, 6, 7]);

// // task4
// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// // task5

// function takeString(str) {
//   let reversed = str.split("").reverse().join("").toLowerCase();
//   console.log(reversed);
// }
// takeString("Feride");

// // task6

// function returnMax(arr) {
//   return Math.max(...arr);
// }
// const maximum = returnMax([114, 22, 31, 14, 5]);
// console.log(maximum);

// // task7

// function findPrimes(num) {
//   let arr = [];
//   for (let i = 1; i < num; i++) {
//     if (num % i === 0) {
//       arr.push(i);
//       if (arr.length === 2) {
//         return `${num} is not a prime number.`;
//       }
//     } else {
//       return `${num} is a prime number.`;
//     }
//   }
// }
// console.log(findPrimes(30));
// console.log(findPrimes(11));

// // task8

// function countOccurences(arr, target) {
//   let arr2 = [];
//   for (let i of arr) {
//     if (i === target) {
//       arr2.push(i);
//     }
//   }
//   return arr2.length;
// }
// console.log(countOccurences([1, 2, 3, 3, 4, 5], 3));

// // task9

// function mergeArrays(arr1, arr2) {
//   let arr3 = arr1.concat(arr2);
//   return arr3;
// }
// console.log(mergeArrays([1, 2, 3, 4], [2, 3, 4, 5, 6]));

// // task10

// function doubleArrays(arr) {
//   let arr2 = arr;
//   let mergedArray = arr2.concat(arr);
//   return mergedArray;
// }
// console.log(doubleArrays([1, 2, 3, 4, 5, 6]));

// // task11

// function findIndex(arr) {
//   arr.forEach((element) => {
//     let index = arr.indexOf(element);
//     console.log(`${element} və indeksi: ${index}`);
//   });
// }
// findIndex([1, 2, 3, 4, 5]);

// // task12

// function displayEvens(arr) {
//   let arr2 = [];
//   arr.filter((item) => {
//     item % 2 == 1 ? arr2.push(item) : console.log();
//   });
//   console.log(arr2);
// }
// displayEvens([1, 2, 3, 4, 5, 6, 7]);

// // task13

// function findSquare(arr) {
//   let arr2 = [];
//   arr.map((element) => {
//     element = element ** 2;
//     arr2.push(element);
//     return arr2;
//   });
//   console.log(arr2);
// }
// findSquare([1, 2, 3, 4, 5]);

// // task14

// function findObject(arr, key) {
//   let arr2 = [];
//   for (let i of arr) {
//     arr2.push(i[key]);
//   }
//   console.log(arr2);
// }

// findObject(
//   [
//     {
//       ad: "feride",
//       soyad: "agayeva",
//     },
//     {
//       ad: "leyla",
//       soyad: "memmedli",
//     },
//     {
//       ad: "leman",
//       soyad: "tagizade",
//     },
//   ],
//   "soyad"
// );

// // task15

// function checkObject(obj, key) {
//   for (let i in obj) {
//     if (key === i) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// console.log(
//   checkObject(
//     {
//       ad: "feride",
//       soyad: "agayaveva",
//       yas: 21,
//     },
//     "ad"
//   )
// );

// // task16

// function containsProperty(arr, key) {
//   let arr2 = [];
//   for (let i of arr) {
//     for (let j in i) {
//       if (key === j) {
//         arr2.push(i);
//       }
//     }
//   }
//   console.log(arr2);
// }

// containsProperty(
//   [
//     {
//       ad: "feride",
//       soyad: "agayeva",
//     },
//     {
//       yas: 21,
//       soyad: "memmedli",
//     },
//     {
//       ad: "leman",
//       soyad: "tagizade",
//     },
//   ],
//   "ad"
// );

// // task17

// function sumObjects(obj) {
//   let sum = 0;
//   for (let i in obj) {
//     sum += obj[i];
//   }
//   console.log(sum);
// }

// sumObjects({
//   yas: 21,
//   tevellud: 2003,
//   mezuniyyet: 2020,
// });

// // task18

// function calculateAverage(arr, key) {
//   let avg;
//   let sum = 0;
//   for (let i of arr) {
//     sum += i[key];
//     avg = sum / arr.length;
//   }
//   console.log(avg);
// }

// calculateAverage(
//   [
//     {
//       ad: "feride",
//       qiymet: 100,
//     },
//     {
//       ad: "leyla",
//       qiymet: 97,
//     },
//   ],
//   "qiymet"
// );

// // task19

// function filterStudent(arr, minGrade) {
//   return arr.filter((student) => student.qiymet >= minGrade);
// }

// const newfilterStudents = filterStudent(
//   [
//     {
//       ad: "feride",
//       qiymet: 100,
//     },
//     {
//       ad: "leyla",
//       qiymet: 97,
//     },
//     {
//       ad: "fatime",
//       qiymet: 66,
//     },
//     {
//       ad: "cicek",
//       qiymet: 85,
//     },
//   ],
//   86
// );
// console.log(newfilterStudents);

// task20 ??

// function countObjects(arr, key) {
//   return arr.reduce((count, obj) => {
//     key in obj ? count + 1 : count, 0;
//   });
// }

// countObjects(
//   [
//     {
//       ad: "feride",
//       soyad: "agayeva",
//     },
//     {
//       yas: 21,
//       soyad: "memmedli",
//     },
//     {
//       ad: "leman",
//       soyad: "tagizade",
//     },
//   ],
//   "ad"
// );

//task 21

// const isPositive = (num) => {
//   if (num > 0) {
//     return "Positive";
//   } else if (num === 0) {
//     return "Zero";
//   } else {
//     return "Negative";
//   }
// };

// console.log(isPositive(7));

// //task22

// function filterAndMap(arr) {
//   const arr2 = [];
//   const arr3 = [];
//   for (let i of arr) {
//     if (i % 2 === 0) {
//       arr2.push(i);
//     }
//   }
//   for (let j of arr2) {
//     j = j ** 2;
//     arr3.push(j);
//   }
//   console.log(arr3);
// }

// filterAndMap([1, 2, 3, 4, 5, 6]);

// task 22

// function filterAndMap(arr) {
//   return arr.filter((num) => num % 2 === 0).map((num) => num * num);
// }

// // Tasks -DOM
// //task 1

// document.getElementById("demo").textContent = "Hello, World!";

// //task 2

// document.getElementById("demo").innerHTML = "<strong>Hello, World!</strong>";

// //task 3

// document.getElementById("myImage").src = "https://picsum.photos/536/354";

// //task 4

// document.getElementById("myElement").style.display = "none";

// // task 5

// const visibleElement = document.getElementById("myElement");
// document.getElementById("btn").addEventListener("click", () => {
//   if (visibleElement.style.display === "none") {
//     visibleElement.style.display = "block";
//   } else {
//     visibleElement.style.display = "none";
//   }
// });

// // task 6

// const newElement = document.createElement("p");
// newElement.textContent = "Hello, World!";
// document.getElementById("container").append(newElement);

// //task 7

// const myElement = document.getElementById("myElement");

// if (myElement.classList.contains("highlight")) {
//   console.log(true);
// } else console.log(false);

// //task 8

// const element = document.getElementById("myElement");
// element.parentNode.removeChild(element);

// // task 9

// const btn = document.getElementById("btn");
// const email = document.getElementById("email");
// const error = document.getElementById("message");
// function isValidEmail(email) {
//   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return re.test(email);
// }
// myForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const emailValue = email.value.trim();

//   if (!isValidEmail(emailValue)) {
//     error.textContent = "Please enter a valid email address.";
//     errorElement.style.color = "red";
//   }
// });

// task 10 




// JavaScript Classes

class Person {
  // task 1
  constructor(fname, age) {
    this.fname = fname;
    this.age = age;
  }
  // task 2
  sayHello() {
    console.log(`Hello, ${this.fname}`);
  }
  // task 5
  static averageAge() {
    const arr = [];
    arr.push(this.age);
    const sum = 0;
    for (let i of arr) {
      sum += i;
      const length = arr.length;
      return sum / length;
    }
  }
  // task 6
  get fullName() {
    return this.fname;
  }

  set fullName(fullname) {
    this.fname = fullname;
  }
}
// task 3
class Student extends Person {
  constructor(fname, age, grade) {
    super(fname, age);
    this.grade = grade;
  }

  // task 4
  sayHello() {
    console.log(
      `Hello, my name is ${this.fname} and I am in grade ${this.grade}.`
    );
  }
}

// task 7

class Employee extends Person {
  constructor(fname, age, grade, position) {
    super(fname, age, grade);
    this.position = position;
  }
}

// task 8

class Animal {
  makeSound() {
    console.log("generic animal sound");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof!");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow!");
  }
}

// task 9

class BankAccount {
  constructor(balance, owner) {
    this.balance = balance;
    this.owner = owner;
  }
}
