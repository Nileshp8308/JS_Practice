// let array=[5,6,9,9,2,1,5,2,4]

// let setArray=[...new Set(array)]

// console.log(setArray,"Unique Array");


// let array2=[5,6,9,9,2,1,5,2,4,7,7,8]

// let setArray2=array2.filter((element,index)=>{
//     return array2.indexOf(element) == index
// })

// console.log(setArray2,"Second sorted array");


// let array3=[5,6,9,9,2,1,5,2,4,7,7,8]

// let setArray3=array3.reduce((check,item)=>{
//     if(!check.includes(item)){
//          check.push(item)
//     }
//     return check
// },[])

// console.log(setArray3,"Set array3");

// let array=[500,400,200,300,4,2,8]

// let sortedArray=array.concat().sort((a,b)=>a-b)

// console.log(sortedArray,"Sorted array vfalue");

let array = [500, 400, 200, 300, 4, 2, 8]

for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; i < array.length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
            // Swap elements if they are in the wrong order
            const temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}

console.log(array,"array")



