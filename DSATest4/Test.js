// Question 1:

// Write a JavaScript for loop that iterates from 0 to 20 and prints only the even numbers, but skips the number 10.
for(i=0 ; i<= 20 ;i++){
    if(i%2 === 0 && i!=10 ){
        console.log("The number is even", i)
    }
}
// Question 2:

// Write a JavaScript while loop that calculates the factorial of a given number and also counts how many iterations were needed.

var temp = 1
var number = 5
var count =0
i=1
while(i<=number){
    temp = temp*i;
    i++
    count++
}
console.log(temp)

// Question 3:

// Create a JavaScript function that takes an array of numbers as input and returns the sum of all the even numbers using a for loop.

const array =[1,2,3,5,4,10]
const array1 =[]
function sumofeven(array, array1){
for(i=0 ; i<=array.length-1 ; i++){
    if(array[i]%2==0){
        var sum = array[i] + sum;
        array1.push(sum);
    }
}
return (array1)
}
console.log(sumofeven(array , array1))

// Question 4:

// Write a JavaScript program that generates the first n numbers in the Fibonacci sequence, using a while loop, and stores them in an array.
let num = 0;
let num1 = 1;
function fibonacci(num , num1){
    var number = 10
    let temp2 = num + num1;
    var newnum = []
    newnum.push(num)
    newnum.push(num1)
    newnum.push(temp2)
 while (temp2 <= number) {
  num = num1;
  num1 = temp2;
  temp2 = num + num1;
  newnum.push(temp2)
}
return(newnum)
}
console.log(fibonacci(num, num1))
// Question 5:

// Create a JavaScript function that takes an array of strings as input and returns a new array with only the strings that have a length greater than 7 characters.

function funarray(students){
        var tempvalue =[];
        for (var i = 0; i < students.length; i++) {
            if (students[i].length > 7) {
                tempvalue.push(students[i])
    
            }
        }
        return(tempvalue)
    }
    var students = ["Nilesh Devaga", "Chetan ing", "Rupali Marathe", "Vanita", "Riya"];
    const newarray= funarray(students)
    console.log(newarray)
// Question 6:

// Write a JavaScript function that takes a number as input and returns true if it is a prime number, otherwise false. Additionally, the function should also print all the factors of the number.

const newnumber = 7;
function TruePrime(newnumber) {
    if (newnumber < 2) {
      return false;
    }

    for (i = 2; i <= newnumber / 2; i++) {
        if (newnumber % i == 0) {
        return false;
      }
    }

    return true;
  }

  console.log(`${newnumber} is prime:`, TruePrime(newnumber));


// Question 7:

// Create a JavaScript program that calculates the sum of all numbers from 1 to 1000 that are divisible by 3, 5, or 7.


for (let i = 1; i <= 1000; i++) {
  if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0) {
    console.log(i);
  }
}
// Question 8:

// Write a JavaScript function that takes a string as input and returns the reverse of the string without using a built-in reverse method, using a for loop.

// Question 9:

// Create a JavaScript program that generates a random password of a specified length, consisting of letters (both uppercase and lowercase), numbers, and special characters.

function randomPass(){
    let password = '';
    let random = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz' + '0123456789' + '@#$%&*_' ;
 
    for (let i = 1; i <= 10; i++) {
        let char = Math.floor(Math.random()
            * random.length );
 
        password += random.charAt(char)
    }
 
    return password;
}
 
console.log(randomPass());

// Question 10:

// Write a JavaScript function that takes an array of numbers as input and returns the maximum difference between any two consecutive numbers in the array.


var diffnumber=[35,40,5,48,1,98,81,3,8,9,66,74,55,36]
var min=diffnumber[0];
var max=diffnumber.length-1;
function difference(diffnumber,min,max){
    
for(let i=0;i<diffnumber.length;i++){
   
    if(diffnumber[i]<min){
        min=diffnumber[i]; 
        
    }

    if(diffnumber[i]>max){
        max=diffnumber[i]; 
        
    }
}
console.log("Min number is :",min);
console.log("Max number is :",max);
var new1 = max-min;
return new1 ;
}

console.log("Max difference in an array",difference(diffnumber,min,max))