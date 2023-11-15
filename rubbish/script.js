
// let fruits = ["mango","banana","apple","litchi","pineapple"];

// for (fruit of fruits){
//     console.log(fruit)
// }

// let string1 = "zayeem";

// for(word of string1){
//     console.log(word)
// }

// let i = 0;
// let j = 8;

// checkIAndJ: while (i < 4) {
//                         console.log(`i: ${i}`);
//                         i++;

//                         checkJ: while (j > 4) {
//                         console.log(`j: ${j}`);
//                         j--;

//                         if (j % 2 === 0) continue checkJ;
//                         console.log(`${j} is odd.`);
//                         }

//                         console.log(`i = ${i}`);
//                         console.log(`j = ${j}`);
// }


// let students = [["zayeem",99],["farhan",88],["salman",89]];

// for(let i = 0; i<students.length; i++){
//     console.log(`info of student ${i+1}`)
//     for(let j=0; j<students[i].length; j++){
//         console.log(students[i][j])
//     }
// }

// let heroes = [["ironman","spiderman","thor"],["superman","wonderwoman","flash"]];

// //accessing using for-of loop

// for(item of heroes){
//     for(elems of item){
//         console.log(elems)
//     }
// }

// for(let i = 0 ; i<heroes.length; i++){
//     for(let j = 0 ; j<heroes[i].length; j++){
//         console.log(heroes[i][j])
//     }
// }

//loops  with arrays

// let fruits = ["mango","apple","banana","litchi","orange"];

// // print this array in reverse order

// for (let i = fruits.length-1 ; i>=0; i--){
//     console.log(i,fruits[i])
// }

// for (let i=0; i<fruits.length; i++){
//     console.log(i,fruits[i]);
// }

// if we asked to print only odd array elements, then

// for (let i =1; i<fruits.length; i+=2){
//     console.log(i,fruits[i]);
// }

// if we asked to print only even array elements, then

// for(let i=2; i<fruits.length; i+=2){
//     console.log(i,fruits[i]);
// }

//write this in a new program

// const favMovie = "titanic";

// let guess = prompt('enter the movie name')

// while(guess!=favMovie){

//     if(guess=='quit'){
//         break;
//     }

//     alert('wrong guess!');
//     guess = prompt('please try again')
// }

// if(guess==favMovie){
//     alert('congo you are right!');
// } else {
//     alert('Aap haar gai');
// }

// let i = 1;

// while(i<=20){
//     console.log(i);
//     i=i+2
// }

// let i = 1;

// while(i<5){
//     console.log(i);
//     i++;
// }

// let i = 0;
// // console.log(i)
// for(;i<5;i++){
//     console.log(i)
// }


// let n = prompt("Enter the Number You want the table of:")

// n = parseInt(n)

// for(let i=n; i<=n*10; i=i+n){
//     console.log(i)
// }


// for(let i=16; i>=1; i=i-2){
// console.log(i)
// }


// for(let i=1; i<=15; i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

// for(let i=2; i<=15; i=i+2){
//     console.log(i)
// }

// var i = 0;

// if(i<=5){
//     console.log(i);
//     i++;
//     console.log(i)
// }

// let arr = []
// for (let i = 0 ; i <= 5 ; i++ ){
//     arr.push(i);
//     console.log(arr)
// }

// let arr1 = [];
// let arr2 = [];

// let rows = prompt('enter the number of elements you want to add in this array');
// let columns = prompt('enter the length of inner array');


// for(i=0;i<rows;i++){
//     for(j=0;j<columns;j++){
//     arr1.push(arr2.push(prompt('enter the inner elems:')));
// }
// }

// console.log(arr1);

// let arr1 = [[1,2],[2,4],[3,6],[4,8]];

// console.log(arr1)

// console.log(arr1[0][0])
// console.log(arr1[0][1])

// console.log(arr1[1][0])
// console.log(arr1[1][1])

// console.log(arr1[2][0])
// console.log(arr1[2][1])

// console.log(arr1[3][0])
// console.log(arr1[3][1])

// const food = ["pizza","cake","salad","cookie"];

// let deletedItems = food.splice(1,0,"burrito");
// deletedItems = food.splice(3,1);

// console.log(food)
// console.log(deletedItems)


// const cities = ["Tokyo","Cairo","Los Angeles","Paris","Seattle"];

// let citiesCopy = cities.slice(1,3);

// console.log(citiesCopy);
// console.log(cities);


// let  cars = ['audi','BMW', "hyundai","toyota", "force"]
// let array1 = ['zayeem','qhadeer',"sultan","asim","zaheer"];

// let fullArray = array1.concat(cars)

// console.log(fullArray)

// let carName = "BMW";

// if(cars.includes(carName)){
//     console.log('the given car is present in the list');
// } else {
//     console.log('given car is not present in the list')
// }

// let array1 = ['zayeem','qhadeer',"sultan","asim","zaheer"];

//whether the given name is present in the list or not

// let name1 = "zaheer"

// let index = array1.indexOf(name1);

// if(index === -1){
//     console.log('name is not present');
// } else {
//     console.log(`name is present at ${index} index`);
// }


// array1.push('kashfur');
// array1.pop();

// array1.unshift('salman');
// array1.shift();
// console.log(array1);


// let arr4 = ['zayeem',45,'zaheer',170,45.6];
// let element = 45
// if (arr4.includes(element)){
//     console.log('element is present in the array');
// } else {
//     console.log('element is not present in the array');
// }


// let sting = '  zayeem   '
// console.log(sting.trim());

// let ism = "Apna College";

// let charIndex = 6;

// if(ism[charIndex]===ism[charIndex].toLowerCase()){
//     console.log('Character at given index is in lowercase');
// } else {
//     console.log('character at the given index is not in lowercase');
// }




// let str = ''
// // console.log()
// if(str.length===0){
//     console.log("string is empty");
// } else {
//     console.log('string is not empty');
// }

// let arr = [7,9,0,-2];
// let n = 3;

// let newArr = arr.slice(-n)

// console.log(newArr)


// let nums = [[1,2],[2,4],[3,6]];

// console.log(nums[0][1])

// let technologies = ["c","c++","html","javascript","python","java","c#","sql"];
// console.log(technologies.reverse().indexOf('javascript'))

// let months = ["january","july","march","august"];

// months.splice(0,2,"july","june");

// console.log(months)

// let days = ['sunday','monday',"tuesday","wednesday","thursday"];
// let numbers = [1,90,8,22,55];
// let nums = ["1","90","8","22","55"];

// numbers.sort();
// nums.sort();
// days.sort();

// console.log(nums)
// console.log(numbers)
// console.log(days);


// let cars = ['audi',"BMW"];

// cars.splice(1,0,'toyota');
// cars.splice(1,0,"mercedise");

// cars.splice(cars.indexOf('mercedise'),1,"GWagon");
// // cars.replace("GWagon","Mercedise");


// cars.reverse();
// console.log(cars)

// let primary = ["red","yellow","blue"];
// let secondary = ["orange","green","voilet"];

// let mergedArray = primary.concat(secondary);
// mergedArray.reverse();
// console.log(mergedArray)

// let months = ["january","july","march","august"];

// months.shift();
// months.shift();

// months.unshift('june')
// months.unshift('july')

// console.log(months);



// let cars = ['audi','BMW','XUV','maruti'];


// console.log(cars.indexOf('hundai'))

// cars.push('ferrari');
// cars.pop();

// cars.unshift('omni')
// cars.shift();

// console.log(cars);


// let info = [24,'zayeem',55.4];

// let student1 = 'zayeem'
// let student2 = 'zaheer';
// let student3 = 'sultan'

// let arrayKaNaam = [student1,student2,student3]

// console.log(arrayKaNaam)

// let pencilPrice = 10;
// let eraserPrice = 4;
// console.log("The Total Price is: ", pencilPrice +  eraserPrice , "Rupees")
// console.log(`The total price is: ${pencilPrice + eraserPrice} rupees`)


// let a = 10;

// let b = 3;

// console.log(a++) // 10

// console.log(++a) //12

// console.log(b = a);
// console.log(b)


//operators

// let age = 18
// console.log(age<18)
// console.log(3>5)
// console.log(0>-1)
// console.log(0==-0)
// console.log(5!=4)

// console.log(5=='5')

// console.log(0=='')

// console.log(1==true)
// console.log(0==false)
// console.log('a'=='A')

//conditionals statements

// console.log('before if statement');

// let age = prompt('Enter Your Age:  ')

// if (age>=18){
//     console.log('You can vote and drive');
 
// }
// if(age<18){
//         console.log("you can't vote and drive")
// }


// console.log('After if statement');

// let name = prompt('Enter your name: ')

// if (name == 'zayeem'){
//     console.log('welcome zayeem, we are glad to see you here and this is the secret message for you " "');
// }


// traffic light interpretter 

// let color = prompt('Enter the color you are seeing on the signal: ')


// if(color == 'red'){
//     console.log('The color is red so you need to stop!');
// }
// if(color == 'yellow'){
//     console.log('The color is yellow, slow down your vehicle!');
// }
// if(color == "green"){
//     console.log('The color is green, you can go!');
// }

// let age =  14;

// if (age >=18 ){
//     console.log('you can vote');
// }
// else if (age )


// let marks = 45;

// if (marks >= 33){
//     console.log('pass');

//     if (marks >= 80){
//         console.log('grade : O');
//     } else {
//         console.log('Grade : A');
//     }

// } else {
//     console.log('better luck next time');
// }

// let marks = 97;

// if(marks >= 33 && marks >=80){
//     console.log('pass');
//     console.log('A+');
// }


// let yourString = prompt('Enter your string: ');

// if(yourString[0]=='a' && yourString.length>3){
//     console.log('your string is a good string');
// } else {
//     console.log('your string is not a good string');
// }

// let num = 12

// if ((num % 3 ===  0)&&)


//truthy and falsy

// if(' '){
//     console.log('True value')
// } else {
//     console.log('False value')
// }

// let num = 0;

// if (num){
//     console.log('Num is not zero');
// } else {
//     console.log('Num is zero')
// }


// let color = prompt('Enter the color of light');

// switch(color){
//     case 'red':
//         console.log('stop');
//         break;
    
//     case 'yellow':
//         console.log('slow down');
//         break;

//     case 'green':
//         console.log('go');
//         break;

//     default:
//         console.log('light is broken');
// }


// let day = prompt('enter the number');

// switch(day){
//         case '1':
//         console.log("Monday");
//         break;

//         case '2':
//         console.log("Tuesday");
//         break;

//         case '3':
//         console.log("Wednesday");
//         break;

//         case '4':
//         console.log("Thursday");
//         break;

//         case '5':
//         console.log("Friday");
//         break;

//         case '6':
//         console.log("Saturday");
//         break;

//         case '7':
//         console.log("Sunday");
//         break;

//         default:
//             console.log('Not a Day!');
// }

// let name = prompt('Enter your name: ');

// alert('welcome ' + name);

// console.info('why are you here');
// console.error('why are you here');
// console.warn('why are you here');


//string methods

// let str = '    zayeem    '

// // console.log(str)
// // console.log(str.trim())

// str = str.trim();

// console.log(str)

// let name = 'Rapid Solutions'

// let newName = name.toUpperCase().trim()

// console.log(newName)

//slice

// let str = "ILOVECODING"

// console.log(str.slice(5))
// console.log(str.slice(1,5))
// console.log(str.slice(-4))

// console.log(str.replace('LOVE',"DO"))
// console.log(str.repeat(4))

// let arr=[];

// arr = str.repeat(4)

// console.log(arr)


// let msg = 'help!';

// let newMsg = msg.trim().toUpperCase();

// console.log(newMsg)

// let name = 'ApnaCollege'

// console.log(name.slice(4,9))
// console.log(name.indexOf('na'))
// console.log(name.replace('Apna','Our'))
// console.log(name.slice(4).replace('l','t').replace('l','t'))

// console.log(name);

