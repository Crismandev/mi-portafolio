document.addEventListener('DOMContentLoaded', () => {
    // Animación de la barra de navegación al hacer scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(0, 31, 63, 0.9)'; // Un azul más oscuro y semitransparente
        } else {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Fondo semitransparente al inicio
        }
    });

    // Animación de las tarjetas de proyecto al hacer scroll (Intersection Observer)
    const projectCards = document.querySelectorAll('.project-card');

    const observerOptions = {
        root: null, // El viewport
        rootMargin: '0px',
        threshold: 0.1 // Cuando el 10% del elemento sea visible
    };

    const projectObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target); // Dejar de observar una vez que se ha animado
            }
        });
    }, observerOptions);

    projectCards.forEach(card => {
        projectObserver.observe(card);
    });

    // Animación de aparición gradual para elementos específicos en la hero section
    const heroElements = document.querySelectorAll('.hero-section h1, .hero-section p, .hero-section .btn');
    heroElements.forEach((element, index) => {
        // Estas animaciones ya están manejadas por CSS con 'forwards' y 'animation-delay'
        // pero podrías añadir JavaScript si quisieras un control más dinámico.
        // Por ahora, el CSS es suficiente para el comportamiento deseado.
    });

    // Pequeño efecto para los enlaces del nav al hacer click (scroll suave)
   document.querySelectorAll('.navbar-nav a').forEach(anchor => {
    // Verifica si el enlace es interno (comienza con #)
    if (anchor.getAttribute('href').startsWith('#')) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Evita el salto brusco solo para enlaces internos
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    // Si el enlace no comienza con # (como "blog.html"), no se le añade este comportamiento
    // y funcionará de manera normal, abriendo la nueva página.
});
            });