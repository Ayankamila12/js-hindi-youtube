//reduce 
const  mynums=[1,2,3]
const initialvalue=0
// const mytotal=mynums.reduce(function (acc,curval){
//     console.log(`acc:${acc} and currval :${curval}`)
//     return acc + curval
// },0)
const mytotal=mynums.reduce((acc,curval)=> acc + curval,0)
console.log(mytotal)
const course=[
    {itemname:"javascript",price:999},
    {itemname:"python",price:1999},
    {itemname:"Data science",price:12999}
]
let myttotal_price=course.reduce((acc,item)=>acc + item.price,0)
console.log(myttotal_price)