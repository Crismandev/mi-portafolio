/**
 * PORTFOLIO CLIENT LOGIC - CRISTHIAN MANTILLA
 * Vanilla JS features: Scroll Reveal, Button Hover Microinteractions, Dark/Light Mode
 */

document.addEventListener('DOMContentLoaded', () => {
    // --------------------------------------------------------------------------
    // 1. THEME MANAGER (DARK / LIGHT MODE)
    // --------------------------------------------------------------------------
    const themeToggle = document.getElementById('theme-toggle');
    
    // Function to apply theme changes
    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        console.log(`Theme toggled to: ${theme}`);
    };

    // Toggle button event listener
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }

    // --------------------------------------------------------------------------
    // 2. NAVBAR SCROLL DYNAMICS
    // --------------------------------------------------------------------------
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
    }

    // --------------------------------------------------------------------------
    // 3. SMOOTH ANCHOR SCROLLING WITH ACTIVE NAV-LINK HIGHLIGHTING
    // --------------------------------------------------------------------------
    const navLinks = document.querySelectorAll('.navbar-nav a');
    
    navLinks.forEach(anchor => {
        const href = anchor.getAttribute('href');
        if (href.startsWith('#') || href.includes('index.html#')) {
            anchor.addEventListener('click', function (e) {
                const targetId = href.substring(href.indexOf('#'));
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    
                    // Close Bootstrap mobile collapse menu if open
                    const navbarCollapse = document.getElementById('navbarNav');
                    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                        const toggler = document.querySelector('.navbar-toggler');
                        if (toggler) toggler.click();
                    }

                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        }
    });

    // --------------------------------------------------------------------------
    // 4. INTERSECTION OBSERVER FOR SCROLL REVEAL ANIMATIONS
    // --------------------------------------------------------------------------
    const observerOptions = {
        root: null, // relative to viewport
        rootMargin: '0px 0px -80px 0px', // trigger slightly before entering fully
        threshold: 0.1 // 10% of element is visible
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target); // Animate once
            }
        });
    }, observerOptions);

    // Automatically prepare and observe elements for premium transition
    const prepareReveal = () => {
        // Section Headers
        const titles = document.querySelectorAll('.section-title, .section-about h2, Mi Blog');
        titles.forEach(el => {
            el.classList.add('reveal-on-scroll', 'reveal-scale');
            revealObserver.observe(el);
        });

        // About Grid Layout Elements
        const aboutAvatar = document.querySelector('.about-avatar-container');
        if (aboutAvatar) {
            aboutAvatar.classList.add('reveal-on-scroll', 'reveal-left');
            revealObserver.observe(aboutAvatar);
        }

        const aboutCard = document.querySelector('.section-about .card');
        if (aboutCard) {
            aboutCard.classList.add('reveal-on-scroll', 'reveal-right');
            revealObserver.observe(aboutCard);
        }

        // Project Cards (Staggered load)
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.classList.add('reveal-on-scroll');
            // Stagger items by setting alternate delays
            const delayClass = `reveal-delay-${(index % 4) + 1}`;
            card.classList.add(delayClass);
            revealObserver.observe(card);
        });

        // Blog Posts (Staggered load)
        const blogPosts = document.querySelectorAll('.blog-post');
        blogPosts.forEach((post, index) => {
            post.classList.add('reveal-on-scroll');
            const delayClass = `reveal-delay-${(index % 3) + 1}`;
            post.classList.add(delayClass);
            revealObserver.observe(post);
        });

        // Blog Sidebar Cards
        const sidebarCards = document.querySelectorAll('.blog-sidebar .blog-card');
        sidebarCards.forEach((card, index) => {
            card.classList.add('reveal-on-scroll', 'reveal-right');
            revealObserver.observe(card);
        });
        
        // Contact Button Links
        const contactLinks = document.querySelectorAll('.section-contact p a');
        contactLinks.forEach((link, index) => {
            link.classList.add('reveal-on-scroll', 'reveal-scale');
            const delayClass = `reveal-delay-${(index % 4) + 1}`;
            link.classList.add(delayClass);
            revealObserver.observe(link);
        });
    };

    prepareReveal();

    // --------------------------------------------------------------------------
    // 5. MICROINTERACTIONS: CUSTOM BUTTON HOVER EFFECT
    // --------------------------------------------------------------------------
    const interactableButtons = document.querySelectorAll('.btn-primary, .btn-outline-light, .btn-secondary, .theme-toggle-btn');
    
    interactableButtons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left; // x coordinate within the element
            const y = e.clientY - rect.top;  // y coordinate within the element
            
            // Set dynamic CSS properties for hover gradients if needed
            button.style.setProperty('--mouse-x', `${x}px`);
            button.style.setProperty('--mouse-y', `${y}px`);
        });
        
        // Add smooth scale spring microinteraction
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px) scale(1.03)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = '';
            button.style.removeProperty('--mouse-x');
            button.style.removeProperty('--mouse-y');
        });
    });
});