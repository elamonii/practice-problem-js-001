// Practice Problem 001 ==================================

var fruits = ['Apple', 'Banana', 'Orange'];

var bananaPosition = fruits.indexOf('Banana');
console.log('Banana Position: '+bananaPosition);

fruits.pop('Orange');
console.log(fruits);

fruits.push('Watermelon');
console.log(fruits);


// Practice Problem 002 ==================================

var Kazi = 85;
var Tom = 66;
var Jane = 95;
var Peter = 56;
var John = 40;

// var number

// if(){

// }

// Practice Problem 003(a) ==================================
var x = 13;
var y = 79;
var z = 45;
var largeNumber = 0;

if(x >= y){
    if(x >= z){
        largeNumber = x;
    }else{
        largeNumber = z;
    }
}else{
    if(y >= z){
        largeNumber = y;
    }else{
        largeNumber = z;
    }
}

console.log("Large Number: "+largeNumber);

// Practice Problem 003(b) ==================================

var x = 9;
var y = 8;
var z = 9;

if((x == y) || (x == z) || (y == z)){
    console.log('It is Isosceles');
}else{
    console.log('Not Isosceles');
}
