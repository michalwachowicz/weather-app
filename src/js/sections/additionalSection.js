const humidityCard = document.querySelector(".card-humidity");
const humidityValue = humidityCard.querySelector(".card-additional-value");

const cloudinessCard = document.querySelector(".card-cloudiness");
const cloudinessValue = cloudinessCard.querySelector(".card-additional-value");

const windspeedCard = document.querySelector(".card-windspeed");
const windspeedValue = windspeedCard.querySelector(".card-additional-value");

export default function updateAdditionalSection(data) {
  if (!data) return;

  const { humidity, cloudiness, windspeed } = data;

  humidityValue.textContent = `${humidity}%`;
  cloudinessValue.textContent = `${cloudiness}%`;
  windspeedValue.textContent = `${windspeed} m/s`;
}
