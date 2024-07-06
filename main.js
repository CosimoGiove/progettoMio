const provaElements = document.querySelectorAll('.prova .ciao');

window.addEventListener('scroll', () => {
  provaElements.forEach((element) => {
    if (element.offsetTop < window.innerHeight + window.scrollY) {
      element.classList.add('show');
    }
  });
});

const paragraphElements = document.querySelectorAll('.col-12 p');

window.addEventListener('scroll', () => {
  paragraphElements.forEach((element) => {
    if (element.offsetTop < window.innerHeight + window.scrollY) {
      element.classList.add('show');
    }
  });
});