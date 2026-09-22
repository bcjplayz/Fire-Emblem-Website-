const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
    // navToggle.addEventListener('click', () => {
    //     const isOpen = siteNav.classList.toggle('is-open');
    //     navToggle.setAttribute('aria-expanded', String(isOpen));
    // });

    navToggle.type = 'button';

    const setMenuState = (isOpen) => {
        siteNav.classList.toggle('is-open', isOpen);
        navToggle.setAttribute('aria-expanded', String(isOpen));
    };

    let touchToggleLocked = false;

    const toggleMenu = (event) => {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }

        setMenuState(!siteNav.classList.contains('is-open'));
    };

    navToggle.addEventListener('touchstart', (event) => {
        touchToggleLocked = true;
        toggleMenu(event);
    }, { passive: false });

    navToggle.addEventListener('click', (event) => {
        if (touchToggleLocked) {
            touchToggleLocked = false;
            return;
        }

        toggleMenu(event);
    });

    siteNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => setMenuState(false));
    });
}