const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
    // keep a simple clickable fallback commented for reference
    // navToggle.addEventListener('click', () => {
    //     const isOpen = siteNav.classList.toggle('is-open');
    //     navToggle.setAttribute('aria-expanded', String(isOpen));
    // });

    navToggle.type = 'button';

    const setMenuState = (isOpen) => {
        siteNav.classList.toggle('is-open', isOpen);
        navToggle.classList.toggle('is-active', isOpen);
        navToggle.setAttribute('aria-expanded', String(isOpen));
    };

    // quick pressed feedback separate from open-state
    const addPressed = () => navToggle.classList.add('is-pressed');
    const removePressed = () => navToggle.classList.remove('is-pressed');

    let touchToggleLocked = false;

    const toggleMenu = (event) => {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }

        setMenuState(!siteNav.classList.contains('is-open'));
    };

    navToggle.addEventListener('pointerdown', (e) => { addPressed(); console.log('navToggle pointerdown', e.type); });
    navToggle.addEventListener('pointerup', (e) => { removePressed(); console.log('navToggle pointerup', e.type); });
    navToggle.addEventListener('pointercancel', (e) => { removePressed(); console.log('navToggle pointercancel', e.type); });
    navToggle.addEventListener('pointerleave', (e) => { removePressed(); console.log('navToggle pointerleave', e.type); });

    navToggle.addEventListener('touchstart', (event) => {
        touchToggleLocked = true;
        toggleMenu(event);
    }, { passive: false });

    navToggle.addEventListener('click', (event) => {
        console.log('navToggle click', event.type, 'touchLocked=', touchToggleLocked);
        if (touchToggleLocked) {
            touchToggleLocked = false;
            return;
        }

        toggleMenu(event);
    });

    // keyboard accessibility: show pressed state on key activation
    navToggle.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
            addPressed();
        }
    });
    navToggle.addEventListener('keyup', (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
            removePressed();
        }
    });

    siteNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => setMenuState(false));
    });
}