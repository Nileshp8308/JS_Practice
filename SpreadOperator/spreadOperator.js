console.log("HEllo");

let array1=[1,2,3]
let array2=[4,5,6,{
    name:"Nilesh"
}]
array3=[...array2,7,8,9]
array3[3].name="Shubham"
console.log(array3,"Array3");
console.log(array2,"Array2");

let object1={
    name:'Nilesh',
    dessignation:'Developer'
}

let object2={
    names:'Shubham',
    dessignations:'HR'
}   

let object3={...object1,type:'check',...object2}

console.log(object3,"Object 3");