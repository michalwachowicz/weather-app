import hideSections from '../sectionsHider';

export default function displayError(error) {
  const errorElement = document.querySelector('.weather-error');
  const errorTitleElement = errorElement.querySelector('.weather-error__title');

  hideSections();
  errorElement.classList.remove('hidden');
  errorTitleElement.textContent = error.message;
}
