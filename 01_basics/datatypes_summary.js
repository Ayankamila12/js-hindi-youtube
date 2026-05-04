//premitive

//7 types : String,Number,Boolean,null,undefined,symbol,Bigint
const score=100
const score1=100.1
const isloggin=false
const uytsidetemp=null
let useremail

const id =Symbol('123')
const anotherid=Symbol('123')
console.log(id == anotherid);
const bignumber=35453651534655646756n



//reference(non-premitive)
//arrays,objects,functions
const heroes=["shaktiman","doga"]
let myobj={
    name:"hitesh",
    age:22,

}
const myfunction=function(){
    console.log("Hello world")
}

console.log(typeof bignumber)



//++++++++++++++++++++++++++++++++++++++++++++++++++
//stack(primitive),Heap(Non-premitive)

let myyoutubename="ayan"
let anothername=myyoutubename
anothername="ayankamila"
console.log(myyoutubename)
console.log(anothername)
let userone={
    email:"Ayan@gmail.com",
    upi:"user@ybl"
}
let usertwo=userone
usertwo.email="Ayankamila@gmail.com"
console.log(userone.email)
console.log(usertwo.email)