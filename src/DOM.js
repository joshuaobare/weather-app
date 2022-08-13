import { getData } from "./API";

const searchBar = document.querySelector("#searchBar");
const subbtn = document.querySelector("#submit");
let weatherData;




subbtn.addEventListener("click", (e) => {
  console.log(e);
  e.preventDefault();

  weatherData = getData(searchBar.value)
  
  
});


export { searchBar };
