var str0 = "Hello everybody I am Zayeem";
var str1 = "Hello World"
var str2 = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
var str3 = "Javascript"
var str4 = "Javascript is used";
var str5 = "to add functionalities to web app"
var str6 = "This course is all about Javascript"
var str7 = "He earns 50000 from salary per month, 10000 annual bonus."

console.log(str0.toUpperCase());
console.log(str0.toLowerCase());
console.log(str1.substr(0,5));
console.log(str2.split(", "));
console.log(str3.indexOf("a"));
console.log(str3.lastIndexOf("a"));
console.log(str4.concat(str5));
console.log(str6.includes("Javascript"));

console.log(Math.floor(Math.random()*101));
console.log(Math.floor(Math.random()*50)+50);

console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

var salPM = str7.substr(9,5);
var anlBns = str7.substr(38,5);

var annInc = salPM*12 + Number(anlBns) ;

console.log(annInc);