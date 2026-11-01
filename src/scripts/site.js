// Quick exit and mobile menu. No third-party code, no tracking.
import { site } from '../data/site.js';

function quickExit(event) {
  if (event) event.preventDefault();
  // Hide the page at once so nothing lingers on screen, then replace this
  // history entry so the Back button does not return here.
  document.documentElement.style.visibility = 'hidden';
  window.location.replace(site.exitUrl);
}

document.querySelectorAll('[data-exit]').forEach((el) => el.addEventListener('click', quickExit));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') quickExit(e);
});

const toggle = document.querySelector('[data-menu]');
const nav = document.getElementById('site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}
