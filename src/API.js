const key = "62d50fd38f48aba39355b8ae5a3ae053";
let url = `http://api.openweathermap.org/data/2.5/weather?q=London&APPID=${key}`;

function urlLocator(x) {
  return (url = `http://api.openweathermap.org/data/2.5/weather?q=${x}&APPID=${key}`);
}

fetch(urlLocator("Nairobi"), { mode: "cors" })
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response);
  });
