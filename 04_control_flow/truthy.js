const useremail="h@hitesh.ai"

if(useremail){
    console.log("Got user email")
}
else{
    console.log("Dont have user email")
}

//falsy  values
//1.false,0,-0,BigInt 0n,"",null,undefined,NaN <= all these are falsy values

 //truthy values
 //"0","false"," ",[],{},functio(){} <=all are truthy values
const uemail=[]
if(uemail.length===0){
    console.log("Array is empty")
}
const emptyobj={}
if(Object.keys(emptyobj).length===0){
    console.log("Object is empty")
}
const s=""
if(s){
    console.log("The string is empty")
}
if(emptyobj){
    console.log("Object is empty")
}
else{
    console.log("Object is not empty")
}
  //Nullish Coalescing Operator(??):null ,undefined
  let val1
  //val1=5??10
  ///val1=null ?? 10   
  //val1=undefined ?? 15
  val1=null ?? 10 ?? 20
  console.log(val1)


  //Terniary operator

 // condition ? true : false
const iceteaprice=100
iceteaprice <=80 ? console.log("Less than 80") : console.log("more than 80")
