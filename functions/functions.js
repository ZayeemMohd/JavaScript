// function hello(){
//     console.log("hello");
// }


// function printName(){
//     console.log("zayeem")
// }

// function print1to5(){
//     for(let i=1; i<=5; i++){
//         console.log(i)
//     }
// }

// function isAdult(){
//     let age = 67;
//     if(age>=18){
//         console.log("adult");
//     } else {
//         console.log("not an adult")
//     }
// }

// function printPoem(){
//     console.log("Twinkle, Twinkle, little star");
//     console.log("How I wonder what you are!");
//     console.log("Up above the world so high");
//     console.log("Like a diamond in the sky");
// }

// function wow(){
//     console.log("So beautiful");
//     console.log("So elegant");
//     console.log("Just looking like a wow")
// }

// function rollDice(){
//     let value = Math.floor(Math.random()*6)+1;
//     console.log(value)
// }

// function printNameWithArg(name){
//     console.log(name);
// }
// function printInfo(name,age){
//     console.log(`${name}'s age is ${age}`);
// }


// // printInfo("zayeem",19);
// // printInfo("miyan")

// function sum(a,b){
//     // console.log(a+b);
//     return a+b;
// }

// // console.log(sum(sum(2,1),3))

// function average(a,b,c){
//     let avg = (a+b+c)/3;
//     return avg;
// }

// // average(1,2,3);

// function table(n){
//     for(let i = n;i<=n*10; i+=n){
//         console.log(i)
//     }
// }

// // table(5)

// // console.log(average(1,5,6))

// // let str = ["hi","hello","bye","!"];

// // function arrayConcat(arr){
// //     let concat = '';
// //     for(elem of arr){
// //         concat += elem;
// //     }
// //     return concat
// // }

// // console.log(arrayConcat(str));

// function multipleGreet(n,func){ //higher order function
//     for(let i=0; i<func; i++){
//         n();
//     }

// }

// let greet = function(){
//     console.log("hello world")
// }

// // multipleGreet(greet,4)


// function evenOrOddFactory(request) {
//     if(request == 'even'){
//         let even = function(n){
//             console.log(n%2==0);
//         }

//         return even;
//     } else if(request == 'odd'){
//         let odd = function(n){
//             console.log(!(n%2==0));
//         }

//         return odd;
//     } else {
//         console.log("wrong request")
//     }
// }

// let request = 'odd'

// const calculator = {
//     add: function(a,b){
//         return a+b;
//     },
//     sub: function(a,b){
//         return a-b;
//     },
//     mul: function(a,b){
//         return a*b;
//     }
// }


// let arr = [1,2,3,4,5,6,7,8,9,10];

// function largeArr(arr,n){
//     let larger = []
//     for(elem of arr){
//         if(elem>n){
//             larger.push(elem)
//         }
//     }
//     return larger;
// }

// console.log(largeArr(arr,5));


// let arr = [1,2,3,4,5,6,7,8,9,10];

// function largeArr(arr,n){
//     for(elem of arr){
//         if(elem>n){
//             console.log(elem);
//         }
//     }
    
// }

// console.log(largeArr(arr,5));

// let str = "abcdabcdefgggh";


// function uniqueChar(str){
//     let ans = '';
//     for(let i=0; i<str.length; i++){
//         if(!(ans.includes(str[i]))){
//             ans += str[i]
//         }
//     }
//     return ans;
// }


// console.log(uniqueChar(str));

// let countries = ["Australia", "Germany", "United States of America","India"];

// function largestCountry(country){
//     let largest = 0;
//     let largeCountry;
//     for(country of countries){
//         if(country.length>largest){
//             largest = country.length
//             largeCountry = country;
//         } 
//     }
//     return largeCountry
// }

// console.log(largestCountry(countries))

// function randomNumber(start,end){
//     let diff = end-start
//     let random = Math.random();
//     console.log(random)
//     return Math.floor((random*diff)+start+1);
// }
// console.log(randomNumber(10,12));

let str = "ISL ENGINEERING COLLEGE";

function vowelsCounter(alfaaz){
    let count = 0;
    for(let i=0;i<alfaaz.length;i++){
        if(alfaaz[i] == 'a' || alfaaz[i] == "e" || alfaaz[i] == "i" || alfaaz[i] == 'o' || alfaaz[i] == "u" || alfaaz[i] == "A" || alfaaz[i] == "E" || alfaaz[i] == "I"|| alfaaz[i] == "O" || alfaaz[i] == "U"){
            count++;
        }
    }
    return count;
}

console.log(vowelsCounter(str));
