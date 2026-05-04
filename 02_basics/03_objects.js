//singleton

//object literals
const mysym1=Symbol("key1")
const jsuser={
    name:"Ayan",
    "full_name":"Ayan Kamila",
    [mysym1]:"mykey1",
    age:18,
    location:"Jaipur",
    email:"ayan@gmail.com",
    isloggedin:"false",
    lastloggin:["Monday","saturday"]
}
console.log(jsuser.email)

// console.log(jsuser["email"])
// console.log(jsuser["full_name"])
// console.log(jsuser[mysym1])
// jsuser["email"]="Ayankamila@gmail.com"
// console.log(jsuser["email"])
// Object.freeze(jsuser)
// jsuser["email"]="ayan@chatgpt.com"
// console.log(jsuser)

jsuser.a=function(){
   let a=2
   let b=3
    console.log("Hello js user")
    console.log(a+b)
}
console.log(jsuser.a())
jsuser.a2=function(){
    console.log(`Hello js user,${this.age}`)
}
console.log(jsuser.a2())
