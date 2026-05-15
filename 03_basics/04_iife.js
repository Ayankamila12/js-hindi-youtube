//Immediate Invoked Function Expressions(IIFE)
(function chai(){
    //named IIFE
    console.log("DB connected")
})(); //sometimes we face global scope pollution problem then we use IIFE
//after write a IIFE funtion we use a semi collon for stop context 


( ()=> {
    console.log(`DB connected`)
})();

//by using parameter
((name)=>{
    console.log(`DB CONNECTED ${name}`)
})("Ayan");


((num1,num2)=>(console.log(num1 + num2)))(2,3)

let val1=10
let val2=5
function addNum(num1,num2){
    let total=num1 + num2
    return total
}
let result1=addNum(val1,val2)
let result2=addNum(10,2)
console.log(result1,result2)