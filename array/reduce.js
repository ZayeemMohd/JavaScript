console.log('\n')
//sum of all numbers using reduce
var numbers = [1,2,3,4,5,9,8,7,6]

const sum = numbers.reduce((sum,elem)=>{
   return elem+sum
})
var op = [sum]

console.log('array of numbers: '); console.log(numbers)
console.log('sum of all numbers in array: '); console.log(op)

// 

// const f = new Intl.ListFormat("en-us");

console.log('\n')
//concatenate all strings in array using reduce

var string = ['Hi', 'guys', 'chai', 'peelo'];
const concStr = string.reduce((acc,el)=>{
    return acc.concat(el) + ' '
},'')

// console.log(f.format(concStr))
console.log('array of strings: '); console.log(string);
console.log('concatenated sentence from strings: ')
console.log(concStr)

console.log('\n')
//total price of all products using array

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

const totalPrice = products.reduce((total,proPrice)=>{
   return total+proPrice.Price
},0)


console.log('array of objects representing products with prices: ')
console.log(products)
console.log('Total price of products is: ')
console.log(totalPrice)

console.log('\n')
// array of transactions calculate the account balance

var transactions = [
    {
        type: 'debit',
        amount: 10000
    },
    {
        type: 'debit',
        amount: 5000
    },
    {
        type: 'credit',
        amount: 2000
    },
    {
        type: 'debit',
        amount: 2000
    },
    {
        type: 'credit',
        amount: 22000
    }
]

var balance = transactions.reduce((total,current)=>{
    if(current.type=='credit') return total+current.amount
    else if(current.type=='debit') return total-current.amount
},0)

console.log('Transactions: ')
console.log(transactions)
console.log('Remaining balance: ')
console.log(balance)