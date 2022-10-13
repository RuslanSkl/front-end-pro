const url =
  "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19";
const image = document.querySelector(".img-fluid");
let today = new Date().toLocaleDateString();

fetch(url)
  .then((response) => response.json())
  .then((data) => {
   


    
  });