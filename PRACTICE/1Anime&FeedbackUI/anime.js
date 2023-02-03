const button = document.getElementById("button");
const animePicsContainer = document.querySelector(".anime-pics-container");
const animeImg = document.querySelector(".anime-img");
const animeName = document.querySelector(".anime-name");
let firstWords = document.querySelector(".first-words");

button.addEventListener('click', async function(){
    try {
        button.disabled = true;
        button.innerText = "Загрузка...";
        animeName.innerText = "Обновляется...";
        animeImg.src = "spinner.svg";
        const response = await fetch("https://api.catboys.com/img");
        const data = await response.json();
        button.disabled = false;
        button.innerText = "Показать аниме персонажа"
        animePicsContainer.style.display = "block";
        animeImg.src = data.url;
        animeName.innerText = data.artist;
    } catch (error) {
        console.log(error);
        button.disabled = false;
        button.innerText = "Показать аниме персонажа";
        animeName.innerText = "Хмм... кажется произошла какая-то ошибка🤔. Проверь подключение к интернету или кол-во запросов показа аниме исчерпаны 😣"
    }
});



