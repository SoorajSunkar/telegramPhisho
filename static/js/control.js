console.log('control js is ready to use ');
let firstBtn = document.querySelector('#first-btn');
let secondBtn = document.querySelector('#second-btn');
let container =  document.querySelector(".container");
firstBtn.addEventListener('click',()=>{
    let form = document.querySelector('.header');
    let box = document.querySelector('.default');
    box.style.display = "none";
    form.style.display = "none"
    container.classList.toggle('active') 

})


secondBtn.addEventListener("click",()=>{
    let form = document.querySelector('form');
    form.style.display = 'none';
    let box = document.querySelector('.default');
    container.classList.toggle('active') 
})
