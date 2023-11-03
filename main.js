// Parallax effect for header and parallax sections
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  const header = document.querySelector('.parallax-header');
  header.style.backgroundPositionY = -scrollY * 0.5 + 'px';

  const section = document.querySelector('.parallax-bg2');
  section.style.top = (scrollY - section.offsetTop) * 0.5 + 'px';
});
