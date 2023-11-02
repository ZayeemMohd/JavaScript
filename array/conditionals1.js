var a = 2;
console.log(`a is: ${a}`)

var b = 4;
console.log(`b is: ${b}`)

console.log('\n')

console.log('Using if-else')
if(a>b) console.log('a is greater than b')
else console.log('a is less than b')

console.log('Using ternary operator')
a>b ? console.log('a is greater than b') : console.log('a is less than b');

console.log('\n')

// check if a number is even or odd

var num = prompt('Enter a number to check even or odd: ')
if(num%2==0) console.log(`${num} is an even number`)
else console.log(`${num} is an odd number`);

console.log('\n')

//age advisory

var age = prompt('Enter your age: ')
age >= 18 ? console.log('You are old enough to drive') : console.log(`You are left with ${18-age} years to drive`)

console.log('\n')
//largest of three numbers
var c = 7
console.log(`Three numbers are: ${a},${b},${c}`)
console.log(`Largest of three numbers: `)
if(a>b) console.log(a)
else if(b>c) console.log(b)
else console.log(c)

console.log('\n')
//working day or not

var day = 'Monday'
console.log(`Day is: ${day}`)
 switch(day){

    case 'Sunday':
    case 'Saturday':
        console.log('Weekend')
    break;

    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        console.log('Working Day')
    
 }