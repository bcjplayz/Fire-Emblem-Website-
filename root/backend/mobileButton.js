const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
    const toggleMenu = () => {
        const isOpen = siteNav.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
        document.getElementById("console").textContent += "worked?S"
    };

    navToggle.addEventListener('click', toggleMenu);
}