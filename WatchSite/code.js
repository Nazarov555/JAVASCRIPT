const menuBtn = document.querySelector('.menu-btn');
let navbar = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', ()=>{
    navbar.classList.toggle('active');
});
