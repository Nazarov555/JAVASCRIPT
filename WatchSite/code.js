const menuBtn = document.querySelector('.menu-btn');
let navbar = document.querySelector('.menu-container');

menuBtn.addEventListener('click', ()=>{
    navbar.classList.toggle('active');
});
