//const tinderuser=new Object()
const tinderuser={}
tinderuser.id="123abc"
tinderuser.name="Sammy"
tinderuser.isloggedin=false

//console.log(tinderuser)
const regularuser={
    email:"Some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Ayan",
            lastname:"Kamila"
        }
    }
}
//console.log(regularuser.fullname.userfullname.firstname)

const obj1={
    1:"a",
    2:"b",
    3:"c"
}
const obj2={
    1:"a",
    4:"b"
}
const obj3=Object.assign({},obj1,obj2)
console.log(obj3)
regularuser.a2=function(){
    let a=2
    let b=3
    console.log(a+b)
    console.log(a*b)
    console.log(a/b)
    console.log(b-a)
}
console.log(regularuser.a2())
const target={a:1,b:5}
const source={b:4,c:5}
const returnedtarget=Object.assign(target,source)
console.log(returnedtarget)
const obj4 ={1:"a",2:"b"}
const obj5={3:"c",4:"d"}
const obj6={5:"e",6:"f"}
//const obj7=Object.assign({},obj4,obj5,obj6)
//console.log(obj7)
//console.log(obj7[1])
const obj8={...obj4,...obj5,...obj6} //using spread 
console.log(obj8)


const users=[
    {
        id:1,
        email:"aynakamila@gmail.com"
    },
    {
        id:2,
        email:"ayan123@gmail.com"
    },
    {
        id:3,
        email:"ayankamila123@gmail.com"
    },
    {
        id:4,
        email:"ayankamila123456@gmail.com"
    }
]
console.log(users)
console.log(users[1]["email"])
console.log(users[2]["email"])


console.log(Object.keys(tinderuser)) //returns the array of the keys

console.log(Object.values(tinderuser)) //returns all the varray of all the values

console.log(Object.entries(tinderuser)) // output:[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isloggedin', false ] ] 

console.log(tinderuser.hasOwnProperty('isloggedin'))

console.log(tinderuser.hasOwnProperty('islogged'))

