const navBase = () => {
  const hamburger = document.querySelector('.hamburger-wrapper');
  const navigation = document.querySelector('nav');

  hamburger.addEventListener('click', () => {
    navigation.classList.toggle('open');
  });
};

export default navBase;
