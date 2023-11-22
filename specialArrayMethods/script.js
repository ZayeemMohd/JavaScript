// let arr = [1,2,3,4,5,6,7,8,9];

// arr.forEach( e => console.log(e) )

// arr.forEach(print)
// function print(elem){
//     console.log(elem)
// }

// let arrOfObj = [
//     {
//         name: "zayeem",
//         marks: 99
//     },{
//         name: "salman",
//         marks: 100
//     },{
//         name: "adnan",
//         marks: 98
//     }
// ]

// arrOfObj.forEach(e=>console.log(e))
// arrOfObj.forEach(e=>console.log(e.marks))

// let num = [1,2,3,4,5];

// let double = num.map(elem=>(elem*elem));
// // let double = num.map(elem=>console.log(elem*elem));
// console.log(double)

// const students = [
//     {
//         name: "zayeem",
//         marks: 99
//     },
//     {
//         name: "sultan",
//         marks: 89
//     },
//     {
//         name: "zaheer",
//         marks: 81
//     }
// ]

// // let cgpa = students.map(obj=>(obj.marks/10));
// let cgpa = students.map(obj=>(obj.name,obj.marks/10));

// console.log(cgpa);

// let num = [1,2,3,4,5,6,7,8,9];

// let evenNums = num.filter(e=>(e%2==0));
// let oddNums = num.filter(e=>(e%2!=0));

// console.log(evenNums)
// console.log(oddNums)

// console.log(evenNums.every(e=>(e%2==0)));
// console.log(oddNums.every(e=>(e%2!=0)))

// console.log(num.some(e=>(e%2==0)));

// console.log(num.some(e=>(e%2==9)));


// let num = [1,2,3,4,5,46,44,99,89];

// let sum = num.reduce((sum,elem)=>{
//     console.log(sum)
//     return sum+elem
// })

// console.log(sum);

// let max = -1;
// for(let i=0;i<num.length;i++){
//     if(max<num[i]){
//         max=num[i]
//     }
// }
// console.log(max)

// let max = num.reduce((max,i)=>{
//     if(max<i){
//      max=i
//     }
//     return max
// })
// console.log(max)

// let arr = [11,10,9,20,30,40,50];

// let isMultiple = arr.every(e=>(e%10==0))

// console.log(isMultiple);

// function getMin(arr){
// let min = arr.reduce((min,i)=>{
//     if(min<i){
//         return min
//     } else {
//         min = i
//         return min
//     }
// })
//     return min
// }

// console.log(getMin(arr))

// default parameters

// function sum(a,b=3){
//     return a+b;
// }

// console.log(sum(1)) // 4
// console.log(sum(1,5)) // 6

// function sumUpto4(a=0,b=0,c=0,d=0){
//     return a+b+c+d;
// }

// console.log(sumUpto4(7,8,3))

// let str = 'zayeemuddin'
// let arr = [1,2,4,6,4,7,88,33,-44,5];

// let min = Math.min(...arr);

// console.log(min)
// console.log(...str)
// console.log(...arr)

// let arr = [1,2,3,4,5];
// let newArr = [...arr]
// console.log(arr);
// newArr.push(6)
// console.log(newArr)
// console.log(arr)

// let str = "hello"
// let newStr = [...str]
// console.log(str)
// console.log(newStr)

// let oddNum = [1,3,5,7]
// let evenNum = [2,4,6,8]
// let allNum = [...oddNum, ...evenNum]
// console.log(allNum);

// const data = {
//     email: "ironman@gmail.com",
//     password: "abcd",
// };

// const copyData = {...data,id: 123,country: 'USA'}

// console.log(copyData)

// let arr = [1,2,3,4,5,6,7,8];

// const arrObj = {...arr};

// console.log(arrObj);

// let str = 'hello world'

// const strObj = {...str}

// console.log(strObj);

// function sum(...args){
//     for(let i=0; i<args.length; i++){
//         console.log(args[i]);
//     }
// }
// console.log(sum(2,3,5,4))

// function test(...args){
//     console.log(args)
// }

// test(1,2,3,4)

// function sum(...args){
//     return args.reduce((sum,el)=>(sum+el));
// }

// console.log(sum(1,3,4,5,2))

// function min(...args){
//     return args.reduce((min,i)=>{
//         if(min<i){
//             return min
//         } else {
//             return i
//         }
//     });
// }

// console.log(min(1,35,64,74,-2))]

//destructuring

// let names = ["tony","bruce","steve","peter",'thor','natasha'];

// let [winner,runnerup, ...others] = names;

// console.log(winner)
// console.log(runnerup )
// console.log(others)

// const student = {
//     name: "zayeem",
//     class: 'A',
//     age: 14,
//     subjects: ["physics","math","chem"],
//     userName: "zayeemuddin123",
//     password: 1234,
//     city: "Medina"
// }

// // let userName = student.userName;
// // let password = student.password;

// // let {userName,password} = student;

// let {userName: name, password: secret, city: place = "hyderabad"} = student;

// // console.log(userName);
// // console.log(password)

// console.log(name);
// console.log(secret);

// let arr = [1,3,57,7,5,78,3];

// let squareArr = arr.map(el=>(el*el));

// console.log(`square of arr is: ${squareArr}`);

// let sumArr = arr.reduce((sum,i)=>(sum+i));

// console.log(`sum of arr is: ${sumArr}`)

// console.log(`average of arr is: ${sumArr/arr.length}`)

// let newArr = arr.map(el=>(el+5));
// console.log(`original array is: ${arr}`)
// console.log(`new array with +5 each: ${newArr}`)

// let names = ["zayeem","sultan","qhadeer","asim","zaheer"];

// console.log(names.map(name=>name.toUpperCase()));

// const double_ReturnArgs = (arr,...args)=>[...arr,...args.map(e=>e*2)]

// console.log(double_ReturnArgs([1,2,3],4,4));
// console.log(double_ReturnArgs([2],10,4));

const mergeObjects = (obj1,obj2)=>{
    return {
        ...obj1,...obj2
    }
}

console.log(mergeObjects({a:1,b:2},{c:3,d:4}));