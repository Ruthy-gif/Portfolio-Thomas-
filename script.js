document.addEventListener('DOMContentLoaded', () => { 
    const menuToggle = document.querySelector('.menu-toggle'); 
    const navLinks = document.querySelector('.nav-links'); 
    const links = document.querySelectorAll('.nav-links a'); 
 
    if (menuToggle && navLinks) { 
        // Ouverture / fermeture du menu mobile 
        menuToggle.addEventListener('click', () => { 
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true'; 
            menuToggle.setAttribute('aria-expanded', String(!isExpanded)); 
            navLinks.classList.toggle('active'); 
        }); 
 
        // Fermeture automatique du menu lors du clic sur un lien d'ancre 
        links.forEach((link) => { 
            link.addEventListener('click', () => { 
                navLinks.classList.remove('active'); 
                menuToggle.setAttribute('aria-expanded', 'false'); 
            }); 
        }); 
    } 
}); 
