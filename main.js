const navEmail = document.querySelector('.nav__email');
const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive')
}