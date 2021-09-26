'use strict';

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();


class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (value < 0) {
      throw Error('age can not be nagative');
    }
    this._age = value < 0 ? 0 : value; // ?
  }
}

const user1 = new User('Steve', 'job', '20');
console.log(user1.age);
console.log(user1.firstName);

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }
  getArea() {
    return width * this.height;
  }
}

class Rectangle extends Shape { }
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log('삼각형');
  }
  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle: color: ${this.color}`;
  }
}
const rectangle = new Rectangle(20, 20, 'blue'); // ?
rectangle.draw();
const triangle = new Triangle(20, 20, 'red'); // ?
triangle.draw();

// console.log(Shape);

console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());



const obj1 = {};
const obj2 = new Object();
function print(person) {
  console.log(person.name2);
  console.log(person.age2);
}

const ellie2 = { name2: 'ellie', age2: 4 };
print(ellie);


ellie.hasJab = true;
console.log(ellie.hasJab); // ?

delete ellie.hasJab;
console.log(ellie.hasJab);


console.log('name' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

// console.clear();

for (const key in ellie) {
  console.log(key);
}
// -> 이것은 왜 안되지? 

const array = [1, 2, 3, 4];
for(let i = 0; i < array.lenth ; i ++) {
  console.log(array[i]); // ?
}
// - > 출력 안되나 ??

for(const value of array) {
  console.log(value);
}
// -> 7번강의 15분쯤 


const user = { name: 'ellie', age: '30' };
const user4 = user;
user4.name = 'coder';
console.log(user);


const user5 = {};
for (const key in user) {
  user5[key] = user[key];
}
console.clear();
console.log(user5);



