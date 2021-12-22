const sections = [
  document.querySelector('.weather-info'),
  document.querySelector('.weather-error'),
];

export default function hideSecions() {
  sections.forEach((section) => {
    section.classList.add('hidden');
  });
}
