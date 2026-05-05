function saymyname(){
    console.log("A")
    console.log("Y")
    console.log("A")
    console.log("N")
}
// function addtwonumbers(num1,num2){
//     console.log(num1+num2)
// }
//saymyname()

// 
function addtwonumbers(num1,num2){
//     let result=num1 + num2
//     return result
//     console.log("Ayan") // after return statement any line do not be executed
        return num1 + num2
 }
const result=addtwonumbers(3,5)
//console.log(result)


function loginusermessage(username){ //used by passing value
    if(username===undefined){
        console.log("Please enter a user name")
        return
    }
    return `${username} just logged in `
}
//const s=loginusermessage("Ayan")
//console.log(loginusermessage("Ayan"))
console.log(loginusermessage())
function loggin(username="Ayan"){ //use default value
    if(!username){
        console.log("please enter the name")
        return
    }
    return `${username} just logged in`
}
console.log(loggin())


