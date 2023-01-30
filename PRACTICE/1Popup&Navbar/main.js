 //navbar script
 
const closeBtn = document.getElementById("close-btn")
const openBtn = document.getElementById("open-button");
let navbar = document.querySelector("nav"); 

openBtn.addEventListener('click', () => {
    navbar.classList.add("open");
});

closeBtn.addEventListener('click', () =>{
    navbar.classList.remove("open");
});