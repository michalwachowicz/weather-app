import weatherIcon from "../components/weatherIcon";

const weeklyCards = document.querySelector(".card-weekly-cards");

export default function updateWeeklySection({ weekly }) {
  weeklyCards.innerHTML = "";

  weekly.forEach(({ day, tempmin, tempmax, icon }) => {
    const card = document.createElement("div");
    card.className = "card card-dark card-day";
    card.innerHTML = weatherIcon.getIcon(icon);

    const dayElement = document.createElement("div");
    dayElement.className = "card-day-day";
    dayElement.textContent = day;

    const tempContainer = document.createElement("div");
    tempContainer.className = "card-day-temp";

    const tempMaxElement = document.createElement("div");
    tempMaxElement.className = "card-day-temp-max";
    tempMaxElement.textContent = `${tempmax}°`;

    const tempMinElement = document.createElement("div");
    tempMinElement.className = "card-day-temp-min";
    tempMinElement.textContent = `${tempmin}°`;

    tempContainer.append(tempMaxElement, tempMinElement);

    card.insertBefore(dayElement, card.firstChild);
    card.appendChild(tempContainer);

    weeklyCards.appendChild(card);
  });
}
