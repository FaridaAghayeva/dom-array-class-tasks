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
  #balance = 0;
  constructor(owner) {
    this.owner = owner;
  }
  deposit(amount) {
    this.#balance += amount;
  }
  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
    } else {
      console.log("Insufficient funds");
    }
  }
}

// task 10

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
class Library {
  constructor() {
    this.books = [];
  }
  addBook(book) {
    this.books.push(book);
  }
  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title);
  }
  listBooks() {
    this.books.forEach((book) =>
      console.log(`${book.title} by ${book.author}`)
    );
  }
}
