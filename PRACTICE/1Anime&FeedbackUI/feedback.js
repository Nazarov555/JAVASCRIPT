const ratings = document.querySelectorAll(".rating");
const buttonRating = document.getElementById("btn");
const feedbackContent = document.querySelector(".feedback-content");

let selectedRating = "";

ratings.forEach((rating) => {
    rating.addEventListener('click', (event) => {
        selectedRating = event.target.innerText || event.target.parentNode.innerText;
    });
});

buttonRating.addEventListener('click', () => {
    if(selectedRating !== "") {
        feedbackContent.innerHTML = `
         <strong>Спасибо броу!</strong>
         <br>
         <br>
         <strong>Твоя реакция: ${selectedRating}</strong>        
        `
    }
});

