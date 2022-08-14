/* eslint-disable require-jsdoc */
import { getData } from "./API";
import { dateConverter } from "./time";

const searchBar = document.querySelector("#searchBar");
const subbtn = document.querySelector("#submit");
const weatherArea = document.querySelector("#weatherArea");

let weatherData;
let myData;

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

subbtn.addEventListener("click", async (e) => {
  e.preventDefault();

  weatherData = await getData(searchBar.value);
  myData = await weatherData;

  displayData();
});

async function displayData() {
  weatherArea.innerHTML = "";
  const weatherObject = await myData;
  iterate(weatherObject);
}

function iterate(obj) {
  const line = document.createElement("div");
  let tz;
  line.className = "values country";

  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      iterate(obj[key]);
    } else {
      if (key === "id" || key === "main") {
        return;
      } else if (key === "name" || key === "country") {
        const div = document.createElement("div");
        div.innerHTML = obj[key];
        line.appendChild(div);
        weatherArea.appendChild(line);
      } else if (key === "temp" || key === "feelsLike") {
        if (key === "temp") {
          createDivs("Temperature:", `${Math.round(obj[key] - 273.15)}&#176;C`);
        } else if (key === "feelsLike") {
          createDivs("Feels Like:", `${Math.round(obj[key] - 273.15)}&#176;C`);
        }
      } else if (key === "date" || key === "timezone") {
        if (key === "timezone") {
          tz = obj[key];
        } else {
          const div = document.createElement("div");
          const line3 = document.createElement("div");
          line3.className = "date";
          div.innerHTML = dateConverter(obj[key], tz);
          line3.appendChild(div);
          weatherArea.appendChild(line3);
        }
      } else if (key === "icon") {
        const div = document.createElement("div");

        const pic = document.createElement("img");
        pic.src = `http://openweathermap.org/img/wn/${obj[key]}@2x.png`;
        div.appendChild(pic);
        weatherArea.appendChild(div);
      } else {
        if (key === "description") {
          createDivs("Description:", capitalizeFirstLetter(obj[key]));
        } else if (key === "windSpeed") {
          createDivs("Wind Speed:", `${obj[key]} m/s`);
        } else if (key === "humidity") {
          createDivs("Humidity:", `${obj[key]}%`);
        } else {
          createDivs("Pressure:", `${obj[key]} hPa`);
        }
      }
    }
  });
}

function createDivs(key, y) {
  const div2 = document.createElement("div");
  const line2 = document.createElement("div");
  line2.className = "values";
  const div3 = document.createElement("div");
  div2.className = "obj-key";
  div3.className = "obj-val";
  div2.innerHTML = key;
  div3.innerHTML += y;
  line2.appendChild(div2);
  line2.appendChild(div3);
  weatherArea.appendChild(line2);
}

export { searchBar };
