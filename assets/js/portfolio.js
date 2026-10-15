'use strict';
document.body.classList.add('js-ready');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
if (menuButton && nav) {
  menuButton.hidden = false;
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    nav.classList.remove('is-open');
  };
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    nav.classList.toggle('is-open', open);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuButton.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!nav.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
  });
  window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
}
const publicationTools = document.querySelector('.publication-tools');
const filterButtons = document.querySelectorAll('[data-filter]');
const publications = [...document.querySelectorAll('.publication')];
const count = document.querySelector('.publication-count');
if (publicationTools && publications.length) {
  publicationTools.hidden = false;
  filterButtons.forEach(button => button.addEventListener('click', () => {
    const topic = button.dataset.filter;
    filterButtons.forEach(other => other.setAttribute('aria-pressed', String(other === button)));
    let visible = 0;
    publications.forEach(publication => {
      const show = topic === 'all' || publication.dataset.topics.split(' ').includes(topic);
      publication.hidden = !show;
      if (show) visible++;
    });
    if (count) count.textContent = `${visible} publication${visible === 1 ? '' : 's'}`;
  }));
}
