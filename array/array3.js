console.log('\n')

var ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log('Ages are: ' + ages)

// sort
ages.sort();
console.log('Sorted array is: ' + ages)

// min age
var minAge = Math.min(...ages)
// console.log(...ages)
var maxAge = Math.max(...ages)
console.log('Min age is: ' + minAge)
console.log("Max age is: " + maxAge)

// Sorted array is: 19,19,20,22,24,24,24,25,25,26

// median age
var mid = (ages.length-1)/2
var midDown = Math.floor(mid);
var midUp = Math.ceil(mid);

if (ages.length%2==0){
    var ageMedian = (ages[midDown]+ages[midUp])/2
    console.log('median age if two items are present in the middle is: ' + ageMedian)
} else {
    console.log(mid)
    console.log('median age if one item is present in the middle is: ' + ages[mid])
}

//average age

// //for loop approach
// var sumAges =  0;
// for(let i = 0; i<ages.length ; i++){
//     sumAges += ages[i];
// }
// console.log("Average age in ages is: " + (sumAges/ages.length))

// //forEach() functon approach
// var sumAges1 = 0;
// ages.forEach((nums) => {sumAges1 += nums})
// console.log("Average age in ages is: " + (sumAges1/ages.length))

// reduce() approach
var averageAges = ages.reduce((a,b) => a + b, 0) / ages.length
console.log('Average age in ages is: ' + averageAges) 

// range of ages
console.log('Range of ages: ' + (maxAge-minAge));

//(min - average)
function differnce(a,b){
    return Math.abs(a-b);
}
console.log('min - average: ' + differnce(minAge,averageAges));
console.log('max - average: ' + differnce(maxAge,averageAges));

console.log('\n')
// Game haan! 

var brandNames = ["KIA", "Audi", "BMW", "Toyota", "Mercedes","XUV","Mahindra", "Volvo", "LCV", "UAZ"]
var moreThanThree = [];

function winningArr(names){

for(let i = 0; i < names.length; i++){
    if(names[i].length > 3){ 
        // moreThanThree[i] = names[i]
        moreThanThree.push(names[i])
    }    
}
}

winningArr(brandNames)
console.log("Game-Time!")
// const f = new Intl.ListFormat('en-us')
// f.format(moreThanThree)
console.log('Think of any car brand name and if that mathches to our thoughts then you win! \nThe winning names are: ' + moreThanThree)

console.log('\n')
//Shopping Cart

var shoppingCart = ['Shoes', 'T-Shirts', 'Jeans', 'Shirts', 'Formals', 'Sunglasses']
var itemName = 'Shirts'

console.log('Shopping Cart: ')
console.log(shoppingCart)

var indexItem = shoppingCart.indexOf(itemName)
    shoppingCart.splice(indexItem,1);
    
    console.log("Since you select " + itemName + ", it is removed!");
    console.log(shoppingCart)

console.log('\n')