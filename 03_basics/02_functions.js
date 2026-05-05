function calculatecartprice(...num1){
    return num1
}
//console.log(calculatecartprice(200,400,500,2000))
const user={
    username:"Ayan",
    price:199
}
function handelobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
//handelobject(user)
handelobject(
    {
        username:"Ayan",
        price:199
    }
)
handelobject(
    {
        username:"Ayan",
        price:399,

    }
)
const myarray=[200,400,500,600]
function handel(user){
    console.log(`${user[0]}`)
}
handel(myarray)


function hello(user1,user2){
    console.log(`username is ${user1.username} and the price is ${user2[2]}`)
}
hello({
    username:"Ayan",
},
[200,300,400,500]
)

