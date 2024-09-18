import clockIcon from "../../assets/icons/ui/clock.svg";
import calendarIcon from "../../assets/icons/ui/calendar.svg";

import humidityIcon from "../../assets/icons/weather/rain.svg";
import cloudinessIcon from "../../assets/icons/weather/cloudy.svg";
import windspeedIcon from "../../assets/icons/weather/wind.svg";

const SECTION_ICON_CLASS = ".card-section-icon";
const ADDITIONAL_ICON_CLASS = ".card-additional-icon";

const getIconElement = (parentSelector, iconSelector) => {
  const parent = document.querySelector(parentSelector);

  return parent.querySelector(iconSelector);
};

export default function updateSectionIcons() {
  const hourly = getIconElement(".card-hourly", SECTION_ICON_CLASS);
  hourly.innerHTML = clockIcon;

  const weekly = getIconElement(".card-weekly", SECTION_ICON_CLASS);
  weekly.innerHTML = calendarIcon;

  const humidity = getIconElement(".card-humidity", ADDITIONAL_ICON_CLASS);
  humidity.innerHTML = humidityIcon;

  const cloudiness = getIconElement(".card-cloudiness", ADDITIONAL_ICON_CLASS);
  cloudiness.innerHTML = cloudinessIcon;

  const windspeed = getIconElement(".card-windspeed", ADDITIONAL_ICON_CLASS);
  windspeed.innerHTML = windspeedIcon;
}
