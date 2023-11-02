// ToUpperCase an array
console.log('\n')

var courses = ['html', 'css', 'js']
const upperCaseArray = courses.map(item => item.toUpperCase());
console.log(`'After Upper Class: ' ${upperCaseArray}`);

console.log('\n')
// change each number to square

var numbers = [2, 3, 9, 4, 5, 7]
const sqrt = numbers.map(item => item*item);
console.log('Original array of numbers is: ' + numbers)
console.log('Square to each number: ' + sqrt)

console.log('\n')
// array containing the product names only

var products = [
    {
        name: 'smartWatch',
        price: 2000
    },
    {
        name: 'smartPhone',
        price: 10000
    },
    {
        name: 'smartToothBrush',
        price: 1000
    }
];

const productsOnly = products.map(item => item.name)
console.log('Products only from arrat of objects: ' + productsOnly)

console.log('\n')
// Temperature in celcius to fahrenheit

var tempInCels = [40,102,200,500,278,224]
const tempInFrht = tempInCels.map(items => (items*9/5)+32)
console.log('Temperature in celcius: ' + tempInCels)
console.log("Temperature in Fahrenheit: " + tempInFrht)

console.log('\n')
// array of objects representing students with names and ages

var students = [
    {
        name: 'Zaheer',
        age: 22
    },
    {
        name: 'Sultan',
        age: 21
    },
    {
        name: 'Asim',
        age: 20
    }
];

console.log("Objects with Student's name and age: ")
console.log(students)

console.log('\n')

console.log("Objects with Student's name and yearOfBirth: ")
const stdYoB = students.map((elem) => {
    return ({name: elem.name, YoB: 2023-elem.age})
});

console.log(stdYoB)

console.log('\n')