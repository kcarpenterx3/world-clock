function updateTime() {
  //Denver
  let denverElement = document.querySelector("#denver");
  let denverDateElement = denverElement.querySelector(".date");
  let denverTimeElement = denverElement.querySelector(".time");
  let denverTime = moment().tz("American/Denver");

  denverDateElement.innerHTML = moment().format("MMMM Do, YYYY");
  denverTimeElement.innerHTML = `${denverTime.format(
    "h:mm:ss"
  )}<small> ${denverTime.format("A")}</small>`;

  //Halifax
  let halifaxElement = document.querySelector("#halifax");
  let halifaxDateElement = halifaxElement.querySelector(".date");
  let halifaxTimeElement = halifaxElement.querySelector(".time");
  let halifaxTime = moment().tz("American/Halifax");

  halifaxDateElement.innerHTML = moment().format("MMMM Do, YYYY");
  halifaxTimeElement.innerHTML = `${halifaxTime.format(
    "h:mm:ss"
  )}<small> ${halifaxTime.format("A")}</small>`;
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
