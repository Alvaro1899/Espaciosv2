// Corregir errores tipográficos
const inicio_container = document.getElementById('inicio_container');
const close = document.getElementById('close');

// Agregar evento al botón de cerrar
close.addEventListener('click', () => {
    inicio_container.classList.add('hidden'); // Cambia a la clase 'hidden'
});
