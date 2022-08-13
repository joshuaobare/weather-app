/* eslint-disable require-jsdoc */
import { getData } from "./API";

const searchBar = document.querySelector("#searchBar");
const subbtn = document.querySelector("#submit");
const main = document.querySelector("main");
const weatherArea = document.querySelector("#weatherArea");

let weatherData;
let myData;

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

subbtn.addEventListener("click", async (e) => {
  console.log(e);
  e.preventDefault();

  weatherData = await getData(searchBar.value);
  myData = await weatherData;
  console.log(myData);
  displayData();
});

async function displayData() {
    weatherArea.innerHTML = ""
  const weatherObject = await myData;
  iterate(weatherObject);
}

function iterate(obj) {

    const line = document.createElement("div")
    
    line.className = "values country"
    
    

  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      iterate(obj[key]);
    } else {
      if ((key === "id") || (key === "icon") ||(key === "main")) {
        return;
      } else if ((key === "name")||(key ==="country")) {
          const div = document.createElement("div")
          div.innerHTML = obj[key]
          line.appendChild(div)
            weatherArea.appendChild(line)
      } else if  ((key === "temp")||(key ==="maxTemp")||(key === "minTemp")){
        
        if (key==="temp") {
            createDivs("Temperature",`${Math.round((obj[key])-273.15)}&#176;C`)
        } else if (key ==="maxTemp") {
            createDivs("Highs",`${Math.round((obj[key])-273.15)}&#176;C`)
        } else {
            createDivs("Lows",`${Math.round((obj[key])-273.15)}&#176;C`)
        }
        
      }else {

        if (key === "description") {
            createDivs(capitalizeFirstLetter(key),capitalizeFirstLetter(obj[key]))
        } else if (key === "windSpeed") {
            createDivs("Wind Speed",`${obj[key]} km/h`)
        } else {
            createDivs(capitalizeFirstLetter(key),`${obj[key]} hPa`)
        }
        
      }
    }
  });
}

function createDivs(key,y) {
    const div2 = document.createElement("div")
        const line2 = document.createElement("div")
        line2.className = "values"
        const div3 = document.createElement("div")
        div2.innerHTML = key
        div3.innerHTML += y
        line2.appendChild(div2)
        line2.appendChild(div3)
        weatherArea.appendChild(line2)
}

export { searchBar };
