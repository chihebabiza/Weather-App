// console.log("welcome to github");
const api = 'fbe673210543304029d14d2ed6fd75c4';
const results = document.querySelector('.results');
let input = document.querySelector('.input');
const searchBtn = document.querySelector('.btn');

searchBtn.addEventListener("click", () => {
    const city = input.value;
    // console.log("chiheb");
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`)
        .then((response) => response.json())
        .then((data) => {
            results.innerHTML = `
            <h3 class="city">${city}</h3>
            <h4 class="status">${data.weather[0].main}</h4>
            <div class="img">
                <img class="icon" src=" https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
            </div>
            <h2 class="temp">${(data.main.temp - 273.15).toFixed(2)} °C</h2>
            `
        })
        .catch(() => {
            if (!navigator.onLine) {
                results.innerHTML = `<h3 class="off">you are offline</h3>`
            } else {
                results.innerHTML = `<h3 class="off">Enter a valid city name</h3>`
            }
        })
})
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        searchBtn.click();
    }
})

