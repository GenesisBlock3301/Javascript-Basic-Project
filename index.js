// javaScript console API
console.log("Hello sifat");
// document.write("This is document write")
console.warn("This is warning.")
console.error("this is an error.")


// JavaScript Variable
// container to store data value
var num1 = 34;
var num2 = 54

console.log(num1+num2)

// Data type of Js
//number , string,object

// var str = "This is a string"
// var str2 = 'THis is second string'
var num = 23

// objects

var marks = {
    ravi:34,
    sifat:6,
    nur:77
}
console.log(marks)

// Boolean
var tr = true
var tf = false

//undefine
var un = undefined
var bl
console.log(bl)

//null
var n = null

//null and undefine are not same , they are just differect from each other.

// var arr = [1,2,3,4,54,5,6]
// console.log(arr)

// #function

function avg(a,b) {
    return a+b
}
c = avg(2,4)
console.log("Addition value is: ",c)

//loop

var arr = [1,2,3,4,5,6,7]
// console.log(arr)
// for (var i = 0 ; i < arr.length;i++)
// {
//     console.log(arr[i])
// }
// console.log("forEach loop: ")
// arr.forEach(function (element) {
//     console.log(element)
// })

let j = 0;
const ac = 20;
// ac++;
// console.log()


// array method

let arr1 = ["Fan","Camera",34,null,true];
arr1.pop()
console.log("Array lenght: ",arr1.length)
arr1.push("Sifat")
console.log(arr1)

// #remove 1st element
arr1.shift()
const newa = arr1.unshift("Nur")
console.log("array",newa)

// #array to
// console.log("Array to String: ",arr1.toString())

let myLOve = "I'm from jamalpur."
let rep = myLOve.replace("I'm","sifat")
console.log(rep)
console.log("The length of string: ",myLOve.length)
console.log("The index of 'from'",myLOve.indexOf("from"))
// co

//Date method
let myDate = new Date();
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDate());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
