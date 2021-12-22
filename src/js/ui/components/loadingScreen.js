import hideSecions from '../sectionsHider';

export default function displayLoadingScreen() {
  const loadingScreen = document.querySelector('.loading-screen');

  hideSecions();
  loadingScreen.classList.remove('hidden');
}
