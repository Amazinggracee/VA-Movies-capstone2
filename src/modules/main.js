const mainScript = () => {
  const gethumburger = document.querySelector('.humburgerToggle');
  const getclose = document.querySelector('.closeclass');
  gethumburger.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('menu');
  });
  getclose.addEventListener('click', () => {
    document.querySelector('body').classList.remove('menu');
  });
};

export default mainScript;
