console.log("Hello");

let myProise = new Promise((resolve, reject) => {
    let a = 10
    let b = 20
    let c=a+b
    if(c===30){
        resolve('promise resolved')
    }
    else{
        reject("promise rejected")
    }
})

myProise.then((m)=>{
    console.log(m,"mmmmmm")}
    )
.catch((err)=>{
    console.log(err,"Errrrrr")
})

console.log("Checking");


// Code shortform by using arrow function if you have only one line code in your function
// myProise.then((m)=>console.log(m,"mmmmmm"))
// .catch((err)=>console.log(err,"Errrrrr"))

