//for loop

// for (let index = 0; index<=10; index++) {
//     console.log(b+index)
    
// }

// n=10
// let element
// for(let i=1;i<=n;i++){
//     element=i
//     if(element===5){
//         console.log("5 is the best number")
        
//     }
//     console.log(element)
// }


// for(let i=1;i<=3;i++){
//     console.log(`inner loop value is ${i}`)
//     for(let j=1;j<=3;j++){
//         //console.log(`inner loop value ${j} and and inner loop  ${i}`)
//         console.log(`${i} * ${j} = ${i*j}`)
//     }
// }

// let a=[1,2,3,4,5,6,7,8]
// console.log(a.length)
// for (let index = 0; index < a.length; index=index+2) {
//     let element = a[index];
//     console.log(element)
// }

//break and continue  keyword

let n=10
// for (let index = 0; index <n; index++) {
//     let element =index;
//     if(element == 7){
//         console.log("The break statement is executed")
//         break
//     }
//     console.log(element)
    
// }
for (let index = 0; index < n; index++) {
    
    let element=index
    if(element===5){
        console.log(`${element} is detected`)
        continue
    }
    console.log(element)
}
