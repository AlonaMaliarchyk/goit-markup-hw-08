(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu-open'),
    closeMenuBtn: document.querySelector('.menu-close'),
    menu: document.querySelector('.mob-menu'),
    body: document.querySelector('body')
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', closeMenu);

  function toggleMenu() {
    refs.menu.classList.remove('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }

  function closeMenu() {
    refs.menu.classList.add('is-hidden');
  }
})();