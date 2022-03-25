const navLinks = document.querySelectorAll('.nav__item');
const dropDowns = document.querySelectorAll('.nav__drop-down');
const linkIcon = document.querySelectorAll('.nav__link__icon');
const menu = document.querySelector('.nav__menu');
const mobileMenu = document.querySelector('.menu-mobile');

const toggleMobileMenu = (e) => {
  e.target.classList.toggle('nav__menu--active');
  mobileMenu.classList.toggle('menu-mobile--active');
};

const closeDropDown = () => {
  dropDowns.forEach((drop) => drop.classList.remove('nav__drop-down--active'));
  linkIcon.forEach((icon) => icon.classList.remove('nav__link__icon-up'));
};

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const parent = e.target.closest('.nav__item');
    if (!parent) return;
    const dropDown = parent.querySelector('.nav__drop-down');
    const icon = parent.querySelector('.nav__link__icon');
    closeDropDown();
    dropDown.classList.add('nav__drop-down--active');
    icon.classList.add('nav__link__icon-up');
  });
});

menu.addEventListener('click', toggleMobileMenu);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeDropDown();
});
document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav__item')) closeDropDown();

  if (!e.target.closest('.menu-mobile') && e.target !== menu) {
    menu.classList.remove('nav__menu--active');
    mobileMenu.classList.remove('menu-mobile--active');
  }
});
