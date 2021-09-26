'use strict';

const arr1 = new Array();
const arr2 = [1, 2];


const fruits = ['사과', '바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);


for (let i = 0; i < fruits.length; ++i) {
    console.log(fruits[i]);
}

for (const fruit of fruits)