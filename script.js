const display = document.querySelector(".display");

const numbers = Array.from(document.querySelectorAll(".num"));


numbers.forEach(num => {
    num.addEventListener('click', function(e){
        let nu = e.currentTarget.value
        console.log(nu)
        
        console.log('clicking')
    });
});


const n = document.querySelector("#nine");

n.addEventListener('click', function(e){
    console.log(document.getElementById("nine").value)
    console.log(e.currentTarget.value)
    console.log('cluck');
});
