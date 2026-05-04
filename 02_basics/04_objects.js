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
