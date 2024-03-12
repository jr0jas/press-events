import './styles.css';

(() => {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('#menu-btn');
    const closeMenuBtn = document.querySelector('#close-mobile-menu-btn');
    const menu = document.querySelector('#menu');

    if (!menuBtn || !closeMenuBtn || !menu) {
      console.error('One or more navigation elements are missing.');
      return;
    }

    const toggleNavigation = (forceClose = false) => {
      if (forceClose) {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
        menuBtn.classList.remove('open');
        // Set aria-expanded attribute to "false" when menu is closed
        menuBtn.setAttribute('aria-expanded', 'false');
      } else {
        menu.classList.toggle('flex');
        menu.classList.toggle('hidden');
        menuBtn.classList.toggle('open');
        // Set aria-expanded attribute to "true" when menu is opened
        const isOpen = menu.classList.contains('flex');
        menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      }
    };

    menuBtn.addEventListener('click', () => toggleNavigation());
    closeMenuBtn.addEventListener('click', () => toggleNavigation(true));
  });
})();
