//printf("hello world");
//System.out.println("hello world");

//console.log("hello world");


    
// console.log(a); 
// console.log(typeof typeof a);  

// var arr = [1,2,3,4,"hello"];

// console.log(arr);

// var obj = {
//     name:"ramesh",
//     city:"bangalore",
//     age:25
// }

// console.log(obj);
//console.log(obj.city); 


// var a = 10;
//     a=20;
// const c = 30;   
//       c= 40;
// console.log(c);


// var foo = "4";
// var fooNum = Number(foo);
// console.log(fooNum);
// console.log(typeof foo);

//  var a = "100";
//  var b = 20;
//  var c = a+b;
//  console.log(typeof c);

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

//define a function subtract which expects two numbers in 
// an argumnets. if any of them or both of them  are not numbers
//then throw error.
//the error should have a message 2 numbers are expected
//if both are numbers subtract bigger number by smaller number


// function subtract(a,b){
//     if(typeof a !== "number" || typeof b !== "number"){
//         throw new Error("2 numbers are expected");
//     }else{
//         if(b>a){
//             return b-a;
//         }
//         return a-b;
//     }
// }

// const result = subtract(10 ,20);
// console.log(result);

//undefined and reference Error

// console.log("value of x is:", x);
// var x = 10;
// try{
//     console.log("value of y is y", y);

// }catch(err){
//     console.log("error is:", err);
// }



// console.log("this line is after error");

//first class functions in js

// function foo(name){
//     console.log("i'm in the function foo", name);
// }

// function baz(name){
//     console.log("i'm in the function baz", name);
// }

// function makeACall(functionTobeExecuted){
//     functionTobeExecuted("bhoomika");
// }
// function determineNumber(num){
//     if(num>4){
//         makeACall(foo);
//     }
//     else{
//         makeACall(baz);
//     }
// }

// determineNumber(3);

//int a =b;

// const add = function(a,b){
//      return a+b;
// }

// function x(){
//     var a = 10;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }

// z = x();
// console.log(z);

//hoisting

// console.log(b);
// var a = 20;  
// let b= 10;

// const pets = ["Cats", "Dog", "Fish", "Horse"];

// const [,catPets, fishPEts] = pets;

// console.log("fishpet is", fishPEts);
// console.log("catpet is", catPets);


//array Destructuring

// const pets = ["cat", "dog", "fish", "horse"];



// const [catpet, dogpet] = pets;

// console.log("catpet is", catpet);
// console.log("dogpet is", dogpet);


// let a = 10;
// function myFun(){
    
//    console.log(a); 
// }

// myFun();
// console.log(a);

// function a(){
//     console.log(b);
// }
// console.log(b);
// var b = 10;
// a();

//output 10

// function a(){
//     c();
//     function c(){
//         console.log(b);
//     }
// }
// var b = 100;
// a();

//output 100

// function a(){
//     c();
//     function c(){
//         var b = 10;
//         console.log(b);
//     }
// }
// var b = 100;
// a();

// function a(){
//     var b =10;
//     c();
//     function c(){
//         console.log(b);
//     }
// }

// a();
// console.log(b);


// console.log(b);
// var b = 100;
// const a = 10;

//javascript call(), apply(), bind()

//call()
//call() help us to use the method or function belonging another
//object

//what is this keyword in js

// let name1 = {
//     firstName:"ramesh",
//     lastName:"shivanna",
    
// }
// const printFullName = function(hometown,state){
//     console.log(this.firstName+" "+this.lastName+" "+hometown+" "+state);
// }

// printFullName.call(name1,"bangalore","karnataka");

// let name2={
//     firstName:"Bhoomika",
//     lastName:"A"
// }

// printFullName.apply(name2,["mumbai","maharastra"]);

// let name3={
//     firstName:"pavani",
//     lastName:"R"
// }

// const printMyName = printFullName.bind(name3,"chennai","TN");
// console.log(printMyName);
// printMyName();

// function myFunction(){
//     //const paragraph = document.getElementsByTagName("p");
//     const paragraph = document.querySelector(".blue");
//     console.log(paragraph);
//     paragraph.style.color="red";
//     paragraph.style.backgroundColor = "blue";
// }

// myFunction();

// console.log(1);
// setTimeout(()=>{
//     console.log("hello world");
// },3000)
// console.log(2);

// const intervalId = setInterval(()=>{
//     console.log("hello world");
// },3000)

// setTimeout(()=>{
//     clearInterval(intervalId);
// },10*1000)

// setInterval(()=>{
//     const timeHEading = document.getElementById("time");
//     const currentDate = new Date();
//     timeHEading.innerText = currentDate.getHours()+":"
//     + currentDate.getMinutes()+":"+
//     currentDate.getSeconds();
//     //console.log(currentDate);
// },1000)

//place order
//1.create order
//2.proceedToPayment
//3.showorderSummary
// function proceedTopayment(){
//     console.log("make a payment");
// }

// function createOrder(callback){
//     setTimeout(()=>{
//         console.log("create order");
//         callback();
//     },3000)
// }
// createOrder(function(){
//     proceedTopayment();
// })



const cart=["books","pens","shirts"];

createOrder(cart,function(orderId){
    proceedToPayment(orderId,function(paymentInfo){
        showOrderSummary(paymentInfo,function(showSummary){
            upadateWalletBallence();
        })
    })
})
//promise Chaining

createOrder(cart)
.then(function(orderId){
 return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    return showOrderSummary(paymentInfo);
})
.then(function(showSummary){
    upadateWalletBallence(showSummary);
})

//inversion of control

const cart=["books","pens","shirts"];

 b
