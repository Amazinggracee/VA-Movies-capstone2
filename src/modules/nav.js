const navBase = () => {
  const menu = document.querySelector('nav');
  const hamburger = document.querySelector('.fa-bars');
  const closeBtn = document.querySelector('.closeclass');

  hamburger.addEventListener('click', () => {
    menu.classList.add('open');
  });

  closeBtn.addEventListener('click', () => {
    menu.classList.remove('open');
  });
};

export default navBase;
