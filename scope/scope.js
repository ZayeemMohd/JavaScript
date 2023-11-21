// function calSum(a,b){
//     let sum = a+b;
//     return sum;
// }

// console.log(sum)

// let sum = 56;

// function CalSum(a,b){
//     // console.log("value of sum before defined in function i.e. from global scope: ",sum)
//     let sum = a+b;
//     console.log("value of sum after defined in function: ",sum)

//     function innerFunc(){
//         // let sum = 66;
//         console.log(sum)
//     }

//     innerFunc();
//     return sum;
// }

// CalSum(4,5)

// console.log(sum)


// {
//     var a = 25;
// }

// // console.log(a)

// for(let i = 0; i<=5 ; i++){
//     console.log(i);
// }

// console.log(i);

// let age = 25;
// if(age>=18){
//     let str = "adult";
//     console.log(str);
// }

// console.log(str)

// let greet = "hello"; //  Global Scope

// {
//     let greet = "Assalamualikum";  // Block Scope
// }

// function outerGreet(){

//     let greet = "world";  //  Functional Scope
//     console.log(greet);

//     function innerGreet(){
//         console.log(greet)  // Lexical Scope
//     }

//     innerGreet();
//     // outerGreet();

// }

// outerGreet();

// console.log(greet);

let sum = (a,b)=>{
    return a+b;
}

let moon;
console.log(moon = sum(2,4))