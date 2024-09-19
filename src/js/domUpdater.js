import updateInfoSection from "./sections/infoSection";
import updateAdditionalSection from "./sections/additionalSection";

export default function updateDOM(data) {
  if (!data) {
    // TODO: Show error message
    return;
  }

  updateInfoSection(data);
  updateAdditionalSection(data);
}
