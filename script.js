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

// operations
function add(a,b){
    return a+b
};
function subtract(a,b){
    return a-b
};
function multiply(a,b){
    return a*b
};
function divide(a,b){
    return a/b
};
