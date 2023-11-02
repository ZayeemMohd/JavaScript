console.log('\n')
//array only containing even numbers

var numbers = [1,2,3,4,5,6,7,8,9,10,11];

var evenNums = numbers.filter((nums)=>{
    return nums % 2 ==0 ;
})

console.log('array containing all numbers: ')
console.log(numbers)
console.log('array containing only even numbers: ')
console.log(evenNums)

console.log('\n')
//filter out countries having <6 characters

var countries = ['India','Sokovia','Atlantis','USA','UK','Wakanda','New Asgard','Ethiopia']

const ftrCtr = countries.filter((country)=>{
    return country.length>6
})
console.log('names of countries: ')
console.log(countries)

console.log('\n')
console.log('list of countries after filterd out countries having <6 characters: ')
console.log(ftrCtr)

//fiter out county start with 'E'
const flrCtrE = countries.filter((country)=>{
    return country[0]!='E'
})
console.log('\n')
console.log('list of countries after filterd out county start with "E": ')
console.log(flrCtrE)

console.log('\n')
//array containing only products with price <$10
var products =[
    {   
        ProductName: 'Headset', 
        Price: 9
    },
    {
        ProductName: 'SmartWatch', 
        Price: 8
    },
    {
        ProductName: 'Laptop', 
        Price: 800
    },
    {
        ProductName: 'Pen', 
        Price: 1
    },
    {
        ProductName: 'Keyboard', 
        Price: 20
    }
];

const prdsTenDols = products.filter((items)=>{
    return items.Price<10
})


console.log('All products: ')
console.log(products); console.log('\n')
console.log('products with less than $10: ')
console.log(prdsTenDols)

console.log('\n')
//employees having salary >= $50,000

var employees = [
{
    empName: 'Tony Shark',
    salary : 1000000
},{
    empName: 'Bruce Banner',
    salary: 40000
},{
    empName: 'Captain America',
    salary: 10000
},{
    empName: "Thor Odinson",
    salary: 5000000
},{
    empName: "Hawkeye",
    salary: 20000
}
];

const empGT = employees.filter((emp)=>{
    return emp.salary>=50000
})
console.log("All Employees: "); console.log(employees) ; console.log('\n')
console.log("Employees whose salary is >= $50000: ")
console.log(empGT)