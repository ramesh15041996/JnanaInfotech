//System.out.printls("hello world");

//const { useParams } = require("react-router-dom");


// console.log("hello world");

// var a;
//     a = 20;
// let b= 30;
//     b=40;
//let b= 50;    
// console.log(b);   

// const c = 50;
//       c=60;
// console.log(c);      

// var a = 10;
// console.log(typeof typeof a);

// const arr = [1,2,3,4,"hello"];
// console.log(arr);

// var obj = {
//     name:"ramesh",
//     city:"bangalore",
//     age:25
// }


// console.log(obj.city);

// var foo = "4";
// var fooNum = Number(foo);
// console.log(typeof fooNum);
 

// var a = "10";
// var b= "100";
// var c = a+b;
// console.log(c);
// console.log(typeof c);

//== checks only the value not the data type
//=== checks both the value and data type
// function judgeValue(num){
//     if(num === 5){
//         console.log("you guessed the right output");
//     }else{
//         console.log("you guessed the wrong output");
//     }
// }

// judgeValue("5");

// getName();
// console.log(x);
// var x =7;
// function getName(){
//     console.log("my name is ram");
// }

//reference error vs undefined

// console.log("value of x is ", x);
// var x = 7;

// try{
//     console.log("value of y is", y);
// }catch(err){
//     console.log("error is", err);
// }


// console.log("this line is after the error");


//first class functions in java

// function foo(name){
//     console.log("im in function foo", name);
// }
// function baz(name){
//     console.log("im in function baz", name);
// }

// function makeACall(functionTobeExecuted){
//     functionTobeExecuted("sushanth");
// }

// function determineNumber(num){
//     if(num > 4){
//         makeACall(foo);
//     }else{
//         makeACall(baz);
//     }
// }


// determineNumber(5);

// const add1 = function(a,b){
//     return a+b;
// }

// const result = add1(4,5);
// console.log(result);

//var add = b;


// function x(){
// let a = 10;
//  function y(){
//     console.log(a);
//  }
//  return y;
// }

// var z = x();
// console.log(z);

//predict the output

// function a(){
//     console.log(b);
// }

// var b = 10;
// a();

// function a(){
//     var b = 10;
//     c();
//     function c(){
       
//         console.log(b);
//     }
// }

// a();
// console.log(b);


// const arr = [1,2,3,4,5,6];//[1,4,9,16,25,36];

// const squareArray = arr.map(function(element, index){
     
//     return element * element;

// })

// console.log("square of array is", squareArray);


//filter

//return even numbers from an array

// const arr = [1,2,3,4,5,6];//[2,4,6];

// const evenArray = arr.filter(function(element, index){
//      return element%2 === 0;
// })

// console.log(evenArray);

//you have an array of 10 numbers, you want to make a new array
//that has square of first 5 elements

// const arr = [1,2,3,4,5,6,7,8,9,10];

// const firstFiveNumbers = arr.filter(function(element,index){
//           return index<5;
// })

// const squareArray = firstFiveNumbers.map(function(element,index){
//                 return element * element;
// })

// console.log(squareArray);

//reduce

//sum of all the numbers in array

// let num = [1,2,3,4,5];

// const sumOfNumbers = num.reduce(function(accumulator, currentValue,
//     index){
//         return accumulator + currentValue;
//     },0)

//     console.log(sumOfNumbers);

// const arrofObjects = [
//     {
//         name:"ramesh",
//         rank: 1
//     },
//     {
//         name:"sushanth",
//         rank:3
//     },
//     {
//         name:"ramesh",
//         rank:2
//     }
// ];

// const myEntry = arrofObjects.findIndex(function(currentObject){
//      return currentObject.name === "sushanth";
// })
// console.log(myEntry);

//spread operator

// function addFourNum(num1, num2, num3, num4){
//     return num1+num2+num3+num4;
// }

// let fourNumbers = [1,2,3,4];
// const result =  addFourNum(...fourNumbers);
// console.log(result);

//rest operator

// function addAllargs(...args){
//     let sumOfArgs = 0;
//     let i =0;
//     while(i<args.length){
//         sumOfArgs += args[i];
//         i++;
//     }
//     return sumOfArgs;
// }

// const add  = addAllargs(1,2,3,4);
// console.log(add);


// console.log(a);

// let a = 10;

// var b = 20;

//for In 
//for of
//forEach


//for In loop

//the javascript for in loop used to iterate through
//properties of an object
//for in loop iterates over the object
//each iteration returns a key
//key is used to access the value of the key

// const obj = {

//     name:"ramesh",
//     city:"bangalore",
//     age:26
// }

// for(let property in obj){
//     console.log("current property is", property);
//     console.log("current value is", obj[property]);
// }

//for of
//for in works for objects
//for of works for arrays

// const arr = [1,2,3,4];
// for(let element of arr){
//     console.log("current element is", element);
// }

//forEach()

//forEach() method calls a function for each element of an 
//array. forEach() is not executed for empty elemetns

// let sum =0;
// const numbers = [10,20,30,40];
// numbers.forEach(myFunction);

// function myFunction(item){
//     sum += item;
// }

// console.log(sum);

//event propagation
//event bubbling
//event capturing

// const redDiv = document.getElementById("red");
// const greenDiv = document.getElementById("green");
// const blueDiv = document.getElementById("blue");

// redDiv.addEventListener("contextmenu",(event)=>{
//        event.preventDefault();
//        alert("red clicked");
// },true)

// greenDiv.addEventListener("click",(event)=>{
//     //event.stopPropagation();
//     alert("green clicked");
// },true)

// blueDiv.addEventListener("click",(event)=>{
//    // event.stopPropagation();
//     alert("blue clicked");
// },true)


// function sushanth(){
//     //const paragraph = document.getElementsByClassName("blue");
//      //const paragraph = document.getElementsByTagName("p");
//     // const paragraph = document.querySelector("#para")
//     const paragraph = document.querySelector(".blue");
//     paragraph.style.backgroundColor = "red";
    
// }

// sushanth();
//reference error
// console.log(b);
// var a = 10;
// let b = 20;
//type error
// const a =1000;
//    a=100;
//    console.log(a);

//    let a = 100;
//    let a =1000;
//    console.log(a);

// var a;
// a =30;
//    a=40;

//    let a;
//        a= 200;
//     //let a = 300;   

//     const a;
//         a = 19; 
//         const a = 1000;

// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }

// var z = x();
// console.log(z);
// //1000 lines code 

// z();

//synchronous: one command at a time
//asynchronous: multiple command at a time

// console.log(1);

// setTimeout(()=>{
//     console.log("hello world");
// },3000)

// console.log(2);

//ideal output
//1
//hello world
//2
//1
//2
//hello world

// const IntervalID = setInterval(()=>{
//     console.log("hello world");
// },3000)

// setTimeout(()=>{
//     clearInterval(IntervalID);
// },10*1000)


// setInterval(()=>{
//     const timeHEading = document.getElementById("time");
//     const currentDate = new Date();
//    // console.log(currentDate);
//    timeHEading.innerText = currentDate.getHours()+":" +
//    currentDate.getMinutes()+":" + currentDate.getSeconds();
// },1000)

//callback
//callback hell
//Inversion of controle
//promise
//promise chaining
//classes
// function showOrderSummary(){
//     console.log("show summary")
// }
//  function proceedToPayment(callback){
//     setTimeout(()=>{
//         console.log("make a payment");
//         callback();
//     },3000)
   
//  }   
// function createOrder(callback){
//     setTimeout(()=>{
//         console.log("create order");
//         callback();
//     },3000)
// }

// createOrder(function(){
//     proceedToPayment(function(){
//         showOrderSummary();
//     });
// })

//promises
//Inversion of control

//const cart = ["pants", "shoes", "kurthas"];
//place a order
//create a order
//proceedToPayment
// createOrder(cart);

// proceedToPayment(orderId);

// createOrder(cart,function(orderId){
//    proceedToPayment(orderId);
// })

//Promise
//promise is a Object which represents eventual completion
//or failure of an asynchronous operations


// const promise = createOrder(cart);
// {data:orderId}

// promise.then(function(orderId){
//     proceedToPayment(orderId);
// })

//callback hell

// const cart = ["pants", "shoes", "kurthas"];

// createOrder(cart,function(orderId){
//     proceedToPayment(orderId,function(paymentInfo){
//         showOrderSummary(paymentInfo,function(){
//             updateWalletBalance();
//         })
//     })
// })

// //promise chaining

// createOrder(cart)
// .then(function(orderId){
//     return proceedToPayment(orderId);
// })
// .then(function(paymentInfo){
//     return showOrderSummary(paymentInfo);
// })
// .then(function(paymentInfo){
//     updateWalletBalance(paymentInfo);
// })


// const cart = ["shoes","pants","kurtha"];

// function validateCart(){
//     return false;
// }

// function createOrder(){
//     const pr = new Promise(function(resolve,reject){
//         //resolve and reject both are functions
//         //resolve takes the promise to fulfilled state
//         //reject takes the promise to rejected state
//         if(!validateCart()){
//             reject(new Error("cart is not valid"));
//         }else{
//             const orderId = "12345";
//             resolve(orderId);
//         }
//     })
//     return pr;
// }

// createOrder().then(function(data){
//     console.log("orderId is ", data);
// }).catch((err)=>{
//     console.log("error is ", err.message);
// })

// const Promise1 = new Promise((resolve,reject)=>{
//     resolve("resolve promise1");
// })

// const Promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("resolve promise2");
//     },3000)
//     })
    

// const Promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("resolve promise3");
//     },6000)
    
// })

// Promise.all([Promise1,Promise2,Promise3]).then(function(data){
//     console.log(data);
// })


//const URL = "https://api.github.com/users/ramesh15041996";


// const UserData = fetch(URL);

// UserData.then(data=>{
//     console.log("fetch data",data);
//     return data.json()
// }).then((finalData)=>{
//     console.log(finalData);
//     const imageElement = document.createElement("img");
//     imageElement.setAttribute("src",finalData.avatar_url);
//     document.querySelector("body").appendChild(imageElement);

// })

//call()

// let name1 = {
//     firstName:"ramesh",
//     lastName:"shivann",
   
// }
// const printFullName=function(hometown,state){
//     console.log(this.firstName +" "+this.lastName +" "+ hometown +" "+ state);
// }

// printFullName.call(name1,"bangalore","karnataka");

// let name2 = {
//     firstName:"sushanth",
//     lastName:"purshotham"
// }

// printFullName.apply(name2,["mumbai","maharastra"]);

// const printMyName = printFullName.bind(name2,"mumbai","MH");
// console.log(printMyName);
// printMyName();