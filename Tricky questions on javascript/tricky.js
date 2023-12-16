console.log("HEllo");

// How to find out duplicate elements from Array

// let array=[1,2,3,4,5,5,4]
// let uniqueArray=[...new Set(array)]

// console.log(uniqueArray,"uniquearray");
// console.log(array,"array");


// Second method

// let array=[1,2,3,4,4,1,7]

// let uniqueArray=array.filter((item,index)=> array.indexOf(item)== index)

// console.log(uniqueArray,"Unique");


// Third Method

// let array=[1,2,3,4,3,2,5,7,7,5,3,0,0]

//  let uniqueArray=array.reduce((accumulator,item)=>{
//     if(!accumulator.includes(item)){
//         accumulator.push(item)
//     }
//     return accumulator
//  },[])
 
//  console.log(uniqueArray,"Unique array");


// How to sort an array

// let array=[100,50,9,3,2,6,11]

// let sortedArray=array.concat().sort((a,b)=> a-b)

// console.log(sortedArray,"Sorted Array");

// How to sort an array by usig for loop

// function bubbleSort(arr) {
//     const len = arr.length;
  
//     for (let i = 0; i < len - 1; i++) {
//       for (let j = 0; j < len - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//           // Swap elements if they are in the wrong order
//           const temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp;
//         }
//       }
//     }
//   }
  
//   const numbers = [100,50,9,3,2,6,11];
//   bubbleSort(numbers);
//   console.log(numbers," sorted Numbers")


// Shallow copy and Deep copy example

// let array1=[1,2,3,4,{name:"Nilesh"}]
// let array2=JSON.parse(JSON.stringify(array1))
// array2[4].name="aamir"
// console.log(array1,"Array1");
// console.log(array2,"Array2");




