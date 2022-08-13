import { getData } from "./API";

const searchBar = document.querySelector("#searchBar");
const subbtn = document.querySelector("#submit");
const main = document.querySelector("main");
const weatherArea = document.querySelector("#weatherArea");

let weatherData;
let myData;

subbtn.addEventListener("click", async (e) => {
  console.log(e);
  e.preventDefault();

  weatherData = await getData(searchBar.value);
  myData = await weatherData;
  console.log(myData);
  displayData();
});

async function displayData() {
  const weatherObject = await myData;
  iterate(weatherObject);
}

function iterate(obj) {
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      iterate(obj[key]);
    } else {
      if (key === "id" || key === "icon") {
        return;
      } else {
        weatherArea.innerHTML += `${key}: ${obj[key]}<br>`;
      }
    }
  });
}

export { searchBar };
