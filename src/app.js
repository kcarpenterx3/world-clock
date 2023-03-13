function updateTime() {
//Paris
let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");

parisDateElement.innerHTML = moment().format("MMMM Do, YYYY");
parisTimeElement.innerHTML = `${parisTime.format(
  "h:mm:ss"
)}<small> ${parisTime.format("A")}</small>`;
//Seoul
let seoulElement = document.querySelector("#seoul");
let seoulDateElement = seoulElement.querySelector(".date");
let seoulTimeElement = seoulElement.querySelector(".time");
let seoulTime = moment().tz("Asia/Seoul");

seoulDateElement.innerHTML = moment().format("MMMM Do, YYYY");
seoulTimeElement.innerHTML = `${seoulTime.format(
  "h:mm:ss"
)}<small> ${seoulTime.format("A")}</small>`;
//Denver
let denverElement = document.querySelector("#denver");
let denverDateElement = denverElement.querySelector(".date");
let denverTimeElement = denverElement.querySelector(".time");
let denverTime = moment().tz("America/Denver");

denverDateElement.innerHTML = moment().format("MMMM Do, YYYY");
denverTimeElement.innerHTML = `${denverTime.format(
  "h:mm:ss"
)}<small> ${denverTime.format("A")}</small>`;
//Perth
let perthElement = document.querySelector("#perth");
let perthDateElement = perthElement.querySelector(".date");
let perthTimeElement = perthElement.querySelector(".time");
let perthTime = moment().tz("Australia/Perth");

perthDateElement.innerHTML = moment().format("MMMM Do, YYYY");
perthTimeElement.innerHTML = `${perthTime.format(
  "h:mm:ss"
)}<small> ${perthTime.format("A")}</small>`;

}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
        <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}
        <small> ${cityTime.format("A")}</div>`;
  };


updateTime();
setInterval(updateTime, 1000);


let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);


