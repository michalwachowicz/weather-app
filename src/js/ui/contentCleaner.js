export default function cleanContent(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
