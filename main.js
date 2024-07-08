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
let counter = document.getElementById('counter');
let count = 0;
let repositoryElement = document.querySelector('.repository');
let incrementing = false;

function incrementCounter() {
  if (count <= 80) {
    counter.textContent = count + "+";
      count++;
      
    setTimeout(incrementCounter, 20); // increment every 100ms
  }
}

window.addEventListener('scroll', () => {
  let rect = repositoryElement.getBoundingClientRect();
  if (rect.top <= window.innerHeight && !incrementing) {
    incrementing = true;
    incrementCounter();
  }
});


