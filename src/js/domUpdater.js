import updateInfoSection from "./sections/infoSection";
import updateAdditionalSection from "./sections/additionalSection";
import updateHourlySection from "./sections/hourlySection";

export default function updateDOM(data) {
  if (!data) {
    // TODO: Show error message
    return;
  }

  updateInfoSection(data);
  updateAdditionalSection(data);
  updateHourlySection(data);
}
