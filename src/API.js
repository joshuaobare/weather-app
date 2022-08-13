/* eslint-disable require-jsdoc */
const key = "62d50fd38f48aba39355b8ae5a3ae053";
let url;

function urlLocator(x) {
  return (url = `http://api.openweathermap.org/data/2.5/weather?q=${x}&APPID=${key}`);
}

function jsonParser(x) {
  const temp = x.main.temp;
  const pressure = x.main.pressure;
  const maxTemp = x.main.temp_max;
  const minTemp = x.main.temp_min;
  const name = x.name;
  const country = x.sys.country;
  const weather = x.weather;
  const windSpeed = x.wind.speed;

  console.log(
    `Today's temperature is ${temp}, pressure is ${pressure}, maximum temperature is ${maxTemp}, minimum temprerature is ${minTemp}`
  );

  return {temp,pressure,maxTemp,minTemp,name,country,weather,windSpeed}
}

/* fetch(urlLocator("Nairobi"), { mode: "cors" })
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    jsonParser(response);
  })
  .catch(function(err) {
      alert(`There's an error: ${err}`)
  }); */

async function getData() {
  try {
    const response = await fetch(urlLocator("Nairobi"), { mode: "cors" });
    response.json().then(function (response) {
        console.log(response)
      jsonParser(response);
    });
  } catch {
    alert(`There's an error`);
  }
}

getData();
