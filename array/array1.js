var Emptyarr = [];

console.log("empty array")
console.log(Emptyarr)

console.log("array with more than 5 number of elements")
var arr1 = [1,2,3,4,5,6,7]

console.log("length of an array")
console.log(arr1.length)

console.log("first item")
console.log(arr1[0])

console.log("middle item")
if(arr1.length%2==0){
    console.log("given array has even numbers of elements, can't find middle term")
}
else{
    console.log(arr1[(arr1.length-1)/2])
}

console.log("last item")
console.log(arr1[arr1.length-1])


var mixedDataTypes = ["String","Number","Boolean","undefined","Null","Symbol","Object","Array"]
console.log(mixedDataTypes)
console.log("lenght of data types array is")
console.log(mixedDataTypes.length)

var itCompanies = ["Facebook",'Google',"Microsoft",'Apple','IBM','Oracle','Amazon']
console.log(itCompanies)

console.log("Number of companies in array:")
console.log(itCompanies.length)

console.log("First Company:")
console.log(itCompanies[0])

console.log("Middle Company:")
if(itCompanies.length%2==0){
    console.log("given array has even numbers of elements, can't find middle company")
}
else{
    console.log(itCompanies[(itCompanies.length-1)/2])
}

console.log("Last Company:")
console.log(itCompanies[itCompanies.length-1])

console.log("Each company name in uppercase:")
for (var i=0 ; i<itCompanies.length ; i++){
    console.log(itCompanies[i].toUpperCase())
}


console.log("Joined sentence is:")
var jArr = [" are big IT Companies"]
console.log(itCompanies.join(",")+jArr)


var something = "Google"
if(itCompanies.includes(something)){
    console.log(something)
} else {
    console.log("company is not found")
}

