console.log("\n")

var evenNumbers = []
var oddNumbers = []
var sum = 0;
var sumEven = 0;
var sumOdd = 0;

for(i=1;i<=100;i++){
    if(i%2==0){
       evenNumbers.push(i);
       sumEven += i;
    } else {
        oddNumbers.push(i)
        sumOdd += i;
    }
    sum += i;
}

var arrSum = [sumEven,sumOdd]

console.log(`Even numbers: ${evenNumbers}`)
console.log("\n")
console.log(`Odd numbers: ${oddNumbers}`)
console.log("\n")
console.log(`Sum of all numbers from 1-100 is: ${sum}`)
console.log("\n")
console.log(`Sum of all even numbers from 1-100 is: ${sumEven}`)
console.log("\n")
console.log(`Sum of all even numbers from 1-100 is: ${sumOdd}`)
console.log("\n")
console.log(`Sum of all even and odd numbers as an array :`); console.log(arrSum)
console.log("\n")

// arrays and loops

var countries = ["ALBANIA","BOLIVIA","CANADA","DENMARK","ETHIOPIA","FINLAND","GERMANY","HUNGARY","IRELAND","JAPAN","KENYA"];
var countriesLenght = []
var empty = ''
var countriesFiveLenght = []
var countriesRev = []

for(i=0;i<countries.length;i++){
    countriesLenght[i] = countries[i].length;
    countries[i].length

    if(empty.length<countries[i].length){
        empty = countries[i]
    }

    if(countries[i].length==5){
        countriesFiveLenght.push(countries[i])
    }
}

for(i=countries.length-1;i>=0;i--){
     countriesRev.push(countries[i])
}



console.log("Countries array: "); console.log(countries)
console.log('\n')
console.log('Countries lengths are: '); console.log(countriesLenght)
console.log("\n")
console.log('Country containing biggest number of characters is: ')
console.log(empty)
console.log("\n")
console.log('Countries containing only five characters: ')
console.log(countriesFiveLenght)
console.log("\n")
console.log('Countries in reverse order: ')
console.log(countriesRev)
console.log('\n')
