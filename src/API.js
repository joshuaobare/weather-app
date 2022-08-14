/* eslint-disable require-jsdoc */
const key = "62d50fd38f48aba39355b8ae5a3ae053";

function urlLocator(searchTerm) {
  return `http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&APPID=${key}`;
}

function jsonParser(x) {
  console.log(x);
  const temp = x.main.temp;
  const date = x.dt;
  const pressure = x.main.pressure;
  const feelsLike = x.main.feels_like;
  const name = x.name;
  const humidity = x.main.humidity;
  const country = x.sys.country;
  const icon = x.weather[0].icon;
  const description = x.weather[0].description;
  const windSpeed = x.wind.speed;
  const timezone = x.timezone;

  console.log(`Today's temperature is ${temp}, pressure is ${pressure}`);

  return {
    name,
    country,
    timezone,
    date,
    icon,
    description,
    temp,
    humidity,
    pressure,
    feelsLike,
    windSpeed,
  };
}

async function getData(searchTerm) {
  try {
    const response = await fetch(urlLocator(searchTerm), { mode: "cors" });
    const data = await response.json();
    return jsonParser(data);
  } catch {
    alert(`There's an error`);
  }
}

export { getData };
