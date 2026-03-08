const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (burgerBtn && mobileMenu) {

  const menuLinks = mobileMenu.querySelectorAll('a');

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-open');

    const expanded = burgerBtn.classList.contains('is-active');
    burgerBtn.setAttribute('aria-expanded', expanded);

    document.body.classList.toggle('menu-open');
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      burgerBtn.classList.remove('is-active');
      mobileMenu.classList.remove('is-open');
      burgerBtn.setAttribute('aria-expanded', 'false');

      document.body.classList.remove('menu-open');
    });
  });

}