const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});
// Toggle del menu de tablet y celular

// Efecto Parallax
document.addEventListener('DOMContentLoaded', function () {
const layer1 = document.getElementById('fondo');
const layer2 = document.getElementById('sol');
const layer3 = document.getElementById('edificios');
const layer4 = document.getElementById('personaje');
const container = document.getElementById('parallax-container');
const speed1 = 0.1;
const speed2 = 0.2;
const speed3 = 0.48;
const speed4 = 0.3;

 
function updateParallax() {
    const scrollOffset = container.getBoundingClientRect().top;
    layer1.style.transform = `translate3d(0, ${scrollOffset * speed1}px, 0)`;
 
    layer2.style.transform = `translate3d(0, ${scrollOffset * speed3}px, 0)`;
    
    layer3.style.transform = `translate3d(0, ${scrollOffset * speed4}px, 0)`;
    
    layer4.style.transform = `translate3d(0, ${scrollOffset * speed2}px, 0)`;
    }
 
    window.addEventListener('scroll', updateParallax);
 
    updateParallax();
});