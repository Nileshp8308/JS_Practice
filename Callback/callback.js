console.log("HElo welcome to JavaScript");

function simplify(){
    console.log("HEllo callback");
}

function simplies(){
    console.log("hiiiii....");
}

function add(num1,num2,callback){
    callback()
    console.log(num1+num2);
}

add(10,20,simplify)

add(50,20,simplies)

add(100,100, function (){
    console.log("Bye");
})


// here why we are using callback function we can also call that particular function and we get the output
// here if we directly pss the function then we have to mention that function where we want to call it
// thats why we are using call back function simply we are passing the function as argument then we get the output

