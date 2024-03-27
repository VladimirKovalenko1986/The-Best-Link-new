const refs = {
  mobileMenu: document.querySelector('.js-menu-container'),
  openMenuBtn: document.querySelector('.js-open-menu'),
  closeMenuBtn: document.querySelector('.js-close-menu'),
};

const toggleMenu = () => {
  const isMenuOpen =
    refs.openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  refs.openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  // refs.openMenuBtn.classList.toggle('is-open');
  refs.mobileMenu.classList.toggle('is-open');
};

refs.openMenuBtn.addEventListener('click', toggleMenu);
refs.closeMenuBtn.addEventListener('click', toggleMenu);

window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (!e.matches) return;
  refs.mobileMenu.classList.remove('is-open');
  refs.openMenuBtn.setAttribute('aria-expanded', false);
});
