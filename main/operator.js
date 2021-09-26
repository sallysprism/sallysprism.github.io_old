console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 3}`);

console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(1 % 1);
console.log(2 ** 3);


let counter = 2;
const preIncrement = ++counter;
//  counter =  counter + 1;
// preIncrement = counter;

console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);


let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;



console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);


const value1 = false;
const value2 = 4 < 2;

// || (or)
console.log(`or: ${value1 || value2 || check()}`);

// && (and)
console.log(`and: ${value1 && value2 && check()}`);


function check() {
  for (let i = 0; i < 5; i++) {
    console.log('오잉');
  }
  return true;

}

console.log(!value2);




const stringFive = '5';
const numberFive = 5;

console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);


const sally1 = { name: 'sally1' };
const sally2 = { name: 'sally2' };
const sally3 = sally1;

console.log(sally1 == sally2);
console.log(sally1 === sally2);
console.log(sally1 === sally3);



console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);



const name = 'sally';

if (name === 'sally') {
  console.log('welcome');

} else if (name === 'coder') {
  console.log('you are amaizing coder');
} else {
  console.log('who???')
}


console.log(name === 'sally' ? 'yes' : 'no');


const browser = 'Chrome';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you');
    break;
  default:
    console.log('same all!');
    break;
}

let i = 2;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);


for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  console.log(`inline variable for: ${i}`);
}


function log(message) {
  console.log(message);
  return 0;
}
log('hello');


function changeName(obj) {
  obj.name = 'coder';
}

const ellie = { name: ' ellie ' };
changeName(ellie);
console.log(ellie);


const fruits = ['apple', 'banana', 'orange'];
const result = fruits.join(',');
console.log(result);

fruits.concat('aa'); // ?

const fruitss = '1, 2, 3';
const resultt = fruitss.split(',');
console.log(resultt); // ?


const array = [1, 2, 3, 4, 5];
const results = array.reverse();
console.log(results);
console.log(array);

const array1 = [1, 2, 3, 4, 5];
const result1 = array1.slice(2, 5);
console.log(result1);
console.log(array1);


class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}


const students = [
  new Student('A', 29, true, 45),
  new Student('B', 30, false, 20),
  new Student('C', 40, false, 90),
  new Student('D', 17, true, 55),
  new Student('E', 20, true, 85),
];
{
  const result2 = students.find((students) => students.score === 20);
  console.log(result2);
}

const result3 = students.filter((students) => students.enrolled === false); // ?
console.log(result3);


const result4 = students.map((students) => students.score);
console.log(result4);

const result5 = students.some((students) => students.score < 50);
console.log(result5);


const result6 = !students.every((students) => students.score > 10);
console.log(result6);

const result7 = students.reduce((prev, curr) => prev + curr.score, 0);
console.log(result7 / students.length);

const result8 = students
  .map((students) => students.score)
  .filter((score) => score >= 50)
  .join();
console.log(result8);


const result9 = students.map(students => students.score)
  .sort((a, b) => a - b)
  .join();
console.log(result9);



