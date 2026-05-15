//1.syntax of the if 

const { useReducer } = require("react")

// if(condition){
//     //statemen
// }
// in case if the condition is true then the block of code will be executed inside if statement
const isuserloggedin=true
const temp=41
 if(2=="2"){
     console.log("executed")
 }
if(temp===41){
    console.log("Less than 50")
}
// if(temp == 50){
//     console.log("less than 50")
// }
// else{
//     console.log("Temparature is greater than 50")
// }
// const score=200
// if(score > 100){
//     const power="fly"
//     console.log(`user power ${power}`)
// }


const balance=1000
//if(balance>500) console.log("test");

// if(balance<500){
//     console.log("Less than")
// }
// else if(balance<750){
//     console.log("Less than 750")
// }
// else if(balance<900){
//     console.log("Less than 900")
// }
// else{
//     console.log("Greater than 900")
// }



const userloggedin=true
const debitcard=true
const loggedininfromgoogle=false

const loggedinfromemail=true 
if(userloggedin && debitcard && 2==2){
    console.log("Allow to buy course")
}
if(loggedininfromgoogle || loggedinfromemail){
    console.log("congartulations ,we logged in")
}