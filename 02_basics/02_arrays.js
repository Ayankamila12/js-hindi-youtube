const marvel_heroes=["thor","Ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]
// marvel_heroes.push(dc_heroes)
console.log(marvel_heroes)
// console.log(marvel_heroes[3])
// console.log(marvel_heroes[3][0])
const newar=marvel_heroes.concat(dc_heroes) // This method returns a new array
console.log(newar)


const all_newheroes=[...marvel_heroes,...dc_heroes]//spread 
console.log(all_newheroes)


const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const useable_another_array=another_array.flat(Infinity)//returns a new array whise is consist all elements of original  array b

console.log(useable_another_array)



console.log(Array.isArray("hitesh"))

console.log(Array.from("Hitesh"))

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))