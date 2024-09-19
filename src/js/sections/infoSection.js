const section = document.querySelector(".info");

const address = section.querySelector(".info-city");
const temperature = section.querySelector(".info-temperature");
const conditions = section.querySelector(".info-conditions");

export default function updateInfoSection(data) {
  if (!data) return;

  address.textContent = data.address;
  temperature.textContent = `${data.temperature}°`;
  conditions.textContent = data.conditions;
}
