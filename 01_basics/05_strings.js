const name="Ayan"
const repocount=50
//console.log(name + repocount+ "value")
console.log(`Hello my name is ${name} and my repo count is ${repocount}`)

const gamename=new String('ayan-hc')
console.log(gamename)
console.log(name[0])
console.log(name.toUpperCase())
console.log(gamename.toUpperCase())
console.log(gamename.charAt(1))
console.log(gamename.indexOf("a"))
const newstring=gamename.substring(0,4)
console.log(newstring)

const anotherstring=gamename.slice(-7,4)
console.log(anotherstring)



const newstring1="   hittesh    "
console.log(newstring1)
console.log(newstring1.trim())


const url="https://ayan.com/ayan%20kamila"


console.log(url.replace('%20','-'))
console.log(url)
console.log(url.includes("ayan"))
console.log(url.includes("sundar"))
console.log(gamename.split("-"))