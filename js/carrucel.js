const carrusel = document.querySelector('.cursos-principal');
const leftButton = document.querySelector('.carrusel-button-left');
const rightButton = document.querySelector('.carrusel-button-right');
let scrollAmount = 0;

rightButton.addEventListener('click', () => {
  const scrollWidth = carrusel.scrollWidth - carrusel.clientWidth;
  if (scrollAmount < scrollWidth) {
    scrollAmount += carrusel.clientWidth / 3; // Ajusta esto según la cantidad de desplazamiento deseado
    carrusel.style.transform = `translateX(-${scrollAmount}px)`;
  }
});

leftButton.addEventListener('click', () => {
  if (scrollAmount > 0) {
    scrollAmount -= carrusel.clientWidth / 3; // Ajusta esto según la cantidad de desplazamiento deseado
    carrusel.style.transform = `translateX(-${scrollAmount}px)`;
  }
});