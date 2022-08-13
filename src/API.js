/* eslint-disable require-jsdoc */
const key = "62d50fd38f48aba39355b8ae5a3ae053";
let url;

function urlLocator(searchTerm) {
  return (url = `http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&APPID=${key}`);
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

  return {
    temp,
    pressure,
    maxTemp,
    minTemp,
    name,
    country,
    weather,
    windSpeed,
  };
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

async function getData(searchTerm) {
  try {
    const response = await fetch(urlLocator(searchTerm), { mode: "cors" });
    response.json().then(function (response) {
      return jsonParser(response);
    });
  } catch {
    alert(`There's an error`);
  }
}





export { getData };
