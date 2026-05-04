//Array

const myarray=[0,1,2,3,4,5,]

const myheroes= ["shaktiman","nagraj"]

const myarr2=new Array(1,2,3,4)

console.log(myarray[0])

console.log(myarray[1])
//Array methods
// myarray.push(6)
// myarray.push(7)
// myarray.pop(7)
///remove last element from the array
// myarray.unshift(10) //Add element at first of the array
// myarray.shift() //Delete element from the first position of the array
// myarray.shift()
console.log(myarray.includes(9))
console.log(myarray.indexOf(3))

// const newarray=myarray.join()
// console.log(newarray)
// console.log(myarray)


//slice,splice

console.log("A",myarray)

const mun1=myarray.slice(1,3)
console.log(mun1)

console.log("B",myarray)

const myn2=myarray.splice(1,3)//  1 to 3 index elements are removed from main array  
console.log("c",myarray)
console.log(myn2)
