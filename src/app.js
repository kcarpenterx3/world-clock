function updateTime() {
  //New York
  let newYorkElement = document.querySelector("#new_york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("American/New_York");

  newYorkDateElement.innerHTML = moment().format("MMMM Do, YYYY");
  newYorkTimeElement.innerHTML = `${newYorkTime.format(
    "h:mm:ss"
  )}<small> ${newYorkTime.format("A")}</small>`;

}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do, YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} 
    <small>${cityTime.format("A")}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
