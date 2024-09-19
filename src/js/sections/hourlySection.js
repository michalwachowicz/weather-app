import getIcon from "../components/weatherIcon";

const hourlyCards = document.querySelector(".card-hourly-cards");

export default function updateHourlySection({ hourly }) {
  hourlyCards.innerHTML = "";

  hourly.forEach(({ hour, icon, temperature }) => {
    const card = document.createElement("div");
    card.className = "card card-dark card-hour";
    card.innerHTML = getIcon(icon);

    const hourElement = document.createElement("div");
    hourElement.className = "card-hour-hour";
    hourElement.textContent = hour;

    const tempElement = document.createElement("div");
    tempElement.className = "card-hour-temp";
    tempElement.textContent =
      typeof temperature === "number" ? `${temperature}°` : temperature;

    card.insertBefore(hourElement, card.firstChild);
    card.appendChild(tempElement);
    hourlyCards.appendChild(card);
  });
}
