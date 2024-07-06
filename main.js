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

const masterElement = document.querySelector('.master');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const elementPosition = masterElement.offsetTop;

  if (scrollPosition >= elementPosition) {
    masterElement.classList.add('active');
  }
});

const masterElements = document.querySelector('.animazione');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const elementPosition = masterElements.offsetTop;

  if (scrollPosition >= elementPosition) {
    masterElements.classList.add('active');
  }
});

const masterElementss = document.querySelector('.animazione2');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const elementPosition = masterElementss.offsetTop;

  if (scrollPosition >= elementPosition) {
    masterElementss.classList.add('active');
  }
});