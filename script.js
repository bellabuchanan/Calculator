const display = document.querySelector(".display");

const numbers = Array.from(document.querySelectorAll(".num"));

let content = "";

// add clicks for numbers and operators
numbers.forEach(num => {
    num.addEventListener('click', function(e){
        
        content += e.target.value;
        display.textContent = content;
        console.log('clicking');
        
    });
});

// clear all 
const clear=document.querySelector(".clear");
clear.addEventListener('click',function(e){
    content="";
    display.textContent=content;
});

// clear a character
const back =document.querySelector(".back");
back.addEventListener('click',function(e){
    content = content.substring(0,content.length - 1);
    display.textContent=content;
});


// equals buttonn calculations 
const equ =document.querySelector(".is-equals");
equ.addEventListener('click', function(e){
    
    let newstring = content.split(" ");
    console.log(newstring);

    let operator = ops(newstring[1]);
    console.log(operator);

    let answer = operator(newstring[0],newstring[2]);
    console.log(answer);
})

// operations
function add(x,y) {
    x = parseFloat(x);
    y = parseFloat(y);
    return x + y
};
function subtract(x,y) {
    x = parseFloat(x);
    y = parseFloat(y);
    return x - y
};
function multiply(x,y) {
    x = parseFloat(x);
    y = parseFloat(y);
    return x * y
};
function divide(x,y) {
    x = parseFloat(x);
    y = parseFloat(y);
    return x/y
};


// function to extract the operation to be performed
function ops(str) {
    switch(str) {
        case "+":
            return add;
            console.log('adding')
        case "-":
            return subtract;
        case "/":
            return divide;
        case "*":
            return multiply;
}};

