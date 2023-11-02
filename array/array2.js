console.log('\n')
//shopping Cart CRUD

var shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

console.log('Shopping Cart: ')
console.log(shoppingCart);

// add Meat if it is not exist

if (shoppingCart.includes('Meat')) {
    console.log("Meat is already exist in the shoppingCart!")
} else {
    shoppingCart.unshift('Meat')
    console.log('Meat Added')
}

console.log(shoppingCart);

// add Sugar if it is not exist

if (shoppingCart.includes('Sugar')) {
    console.log("Sugar is already exist in the shoppingCart!")
} else {
    shoppingCart.push('Sugar')
    console.log('Sugar Added')
}

console.log(shoppingCart);

// allergic to honey or not

var allergicHoney = true

if (allergicHoney) {
    var indexHoney = shoppingCart.indexOf('Honey')
    shoppingCart.splice(indexHoney,1);
    console.log("Since you are allergic to honey it is removed");
    console.log(shoppingCart)
} else {
    console.log('no change with honey')
    console.log(shoppingCart)
}

// modify tea to green-tea;

var teaIndex = shoppingCart.indexOf('Tea');
shoppingCart[teaIndex] = "Green Tea"

console.log('Tea modified to green tea');
console.log(shoppingCart)

console.log('\n')
// Countries array 

var countries = [' Australia', ' Pakistan', ' Bangladesh', ' England', ' Srilanka']
console.log("Countries are: " + countries)

if(countries.includes('India')){
    console.log("India is already included!")
} else {
    countries.unshift('India');
    console.log('India is added \n' + countries)
}

console.log('\n')
// concat 2 array and store in a variable

var arr1 = ['HTML','CSS','JS','React']; 
console.log("First array is: " + arr1);
var arr2 = ['Node','Express','MongoDB'];
console.log("Second array is: " + arr2);

var fullStack = arr1.concat(arr2);
console.log("fullStack variable is: " + fullStack)

console.log('\n')