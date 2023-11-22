// this keyword in javaScript

// const student = {
//     name: "zayeem",
//     age: 19,
//     math: 99,
//     phy: 99,
//     chem: 99,
//     getAvg(){
//         let avg = (this.math + this.phy + this.chem) / 3;
//         console.log(avg)
//     }
// }


// function something(){
//     console.log(this)
// }

// let target = 64;
// let sum = 0;

// for(let i=0 ; i<target ; i++){
//     sum += 2**i
//     console.log(`${2**i}`)
// }

// console.log(sum)

// console.log("hello1")
// console.log("hello1")
// try{
//     console.log(a)
// } catch(er){
//     console.log("this is an error");
//     console.log(er);
// }

// console.log("newHello")
// console.log("newHello")
// console.log("newHello")

// let sum = (a,b)=>{
//     console.log(a+b)
// }

// let cube = (n)=>{
//     console.log(n*n*n);
// }

// let power = (a,b)=>{
//     console.log(a**b)
// }

// const mul = (a,b) => (a*b);

// console.log(mul(2,4))

// let cube = n => n*n*n;

// console.log(cube(3));

// console.log("hello world");

// setTimeout(()=>{
//     console.log("hello world");
// },4000);

// console.log("hello world")

// let id = setInterval(()=>{
//     console.log("hello world!")
    
// },2000);

// clearInterval(id);

// this keyword in javaScript

// let a = 100;

// const student = {
//     name: "zayeem",
//     age: 19,
//     marks: 99,
//     prop: this, // window object
//     getName: function(){
//         console.log(this)  // student object
//         return this.name
//     },
//     getMarks: ()=>{
//         console.log(this) // window object
//     }
// }

// console.log(student);

// let square = n => n*n;

// console.log(square(4)); 


// var i=0;

// let id = setInterval(()=>{
//     console.log("Hello World");
//     i++;
//     console.log(i);
//     if(i==parseInt(5)){clearInterval(id); console.log("cleared interval")};
// },2000);


// let id = setInterval(()=>{
//     console.log("Hello World");
// },2000)

// setTimeout(()=>{
//     clearInterval(id);
//     console.log("cleared interval")
// },10000)

// let arr = [1,2,3,4,5,6,7,8,9];

// let average = array => {
//     let sum = 0
//     for(elem of array){
//         sum += elem;
//     }
//     return sum/array.length;
// }

// console.log(average(arr))

// let evenOrOdd = n => {
//     if(n%2==0){
//         return "even number"
//     } else {
//         return "odd number"
//     }
// }

// console.log(evenOrOdd(4));



// const isEven = n => (n%2==0);
// console.log(isEven(9))


const object = {
    message: "hello world",

    logMessage() {
        console.log(this.message);
    }
};

setTimeout(object.logMessage,1000);