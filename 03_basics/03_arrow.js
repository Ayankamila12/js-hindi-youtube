const user={
    username:"Ayan",
    price:999,

    welcomemeassage:function(){
        console.log(`${this.username},welcome to website `)
        //console.log(this)
    }

}
// function chai(){
//     let username="Ayan"
//     console.log(this.username)
// }
// chai()


// const chai=function(){
//     let username="Ayan"
//     console.log(this.username)
// }
// chai()
const chai= () => { //Arrow function
    let username="Ayan"
    console.log(this.username)
 }


chai()

const addtwo=(num1,num2) =>{
    return num1 + num2
}
console.log(addtwo(2,3)) //in arrow function if i use second bracket then we use return keeywor for return a value

// const add =(num1,num2)=>num1 +num2
// console.log(add(3,4))
//const add=(num1,num2) => (num1 + num2) //in case we do not write return keyword
const add= (num1,num2) => ({username:"Ayan"}) // when we return a object then write this syntax
console.log(add(8,9))
const even=(num1,num2)=>{
    if(num1 % 2==0){
        return num1
    }
    else{
        return num2
    }
}
console.log(even(3,4))