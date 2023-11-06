const introContainer = document.querySelector(".intro-container");

const button = document.querySelector(".myButton");

const popupContent = document.querySelector(".popup-content");

const closeIcon = document.querySelector(".close-icon");

button.addEventListener('click', ()=>{
    introContainer.classList.add("active"); 
    popupContent.classList.remove("active");
});

closeIcon.addEventListener('click', ()=>{
    introContainer.classList.remove("active"); 
    popupContent.classList.add("active");
});