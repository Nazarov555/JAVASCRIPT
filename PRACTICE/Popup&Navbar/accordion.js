const accordionBox = document.querySelector(".accordion-box");
const accordionHeader = document.querySelector(".accordion-header");
const accordionContent = document.querySelector(".accordion-content");

accordionHeader.addEventListener('click', () => {
    accordionBox.classList.toggle("active");
});
