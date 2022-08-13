import { getData } from "./API";

const searchBar = document.querySelector("#searchBar");
const subbtn = document.querySelector("#submit");
const main = document.querySelector("main")

let weatherData,wD;




subbtn.addEventListener("click",async (e) => {
  console.log(e);
  e.preventDefault();
  
  
    weatherData = await getData(searchBar.value)
    wD = await weatherData
    console.log(wD)
    
        
    })
    
    

    
  





export { searchBar };
