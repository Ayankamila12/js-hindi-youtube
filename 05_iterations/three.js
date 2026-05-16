// for of
// ["","",]
// [{},{},{}]
const arr=[1,2,3,4,5,6]
for (const value of arr) {
    //console.log(value)
}
const greetings="hello world"
for (let element of greetings) {
    //console.log(element)
}
///maps

const map=new Map()
map.set("IN","India")
map.set("USA","United States of america")
map.set("Fr","France")
map.set("IN","India")
console.log(map)
for (const [key,value] of map) {
    console.log(key,":-",value)
}

const myobj={
    "game1":"NFS",
    "game2":"Spiderman"
}
// for (const [key,value] of myobj) {
//     console.log(key,":-",value)   <= In this case we do not iterate object key and value  
// }