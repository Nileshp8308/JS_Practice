// remove duplicate items

// let array=[1,4,2,7,5,9,3,4,1,9]

// let sortedArray=[...new Set(array)]

// console.log(sortedArray,"Sorted array");


// remove duplicate items

// let array=[1,4,2,7,5,9,3,4,1,9]

// let sortedArray=array.filter((items,index)=>{
//     return array.indexOf(items) == index
// })

// console.log(sortedArray,"Sorted ARray value");

// remove duplicate items

// let array=[100,500,50,6.6,345,367,900]

// let sortedArray=array.reduce((check,item)=>{
//     if(!check.includes(item)){
//         check.push(item)
//     }
//     return check
// },[])

// console.log(sortedArray,"Sorted Array");

// Sort Array

// let array = [100, 500, 50, 6.6, 345, 367, 900]

// let sortedArray = array.sort((a, b) => {
//     console.log(a,"Value of A");
//     console.log(b,"VAlue of B");
//     return a - b
// })

// console.log(sortedArray, "Sorted Array");

//Sort Array

// let array = [100, 500, 50, 6.6, 345, 367, 900]

// for (let i = 0; i < array.length - 1; i++) {
//     for (let j = 0; j < array.length - 1 - i; j++) {
//         if (array[j] > array[j + 1]) {
//             const temp = array[j]
//             array[j] = array[j + 1]
//             array[j + 1] = temp
//         }
//     }
// }

// console.log(array,"sortyed array");




