// Personal Website JavaScript - Siddharth Santhosh
// Navigation, animations, and interaction handling

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get navigation elements
    const navLinks = [...document.querySelectorAll('nav a[href^="#"]')];
    const sections = [...document.querySelectorAll('main section[id]')];
    const mobileToggle = document.querySelector('[data-mobile-toggle]');
    const navList = document.querySelector('.nav-links');

    // Navigation Functions
    function setActiveLink(id) {
        navLinks.forEach(a => {
            const isActive = a.getAttribute('href') === `#${id}`;
            if (isActive) {
                a.setAttribute('aria-current', 'page');
            } else {
                a.removeAttribute('aria-current');
            }
        });
    }

    function soloModeIfRequested(targetId) {
        const params = new URLSearchParams(location.search);
        const solo = params.get('view') === 'solo';
        
        sections.forEach(s => {
            if (solo && s.id !== targetId) {
                s.style.display = 'none';
            } else {
                s.style.display = '';
            }
        });
        
        document.body.classList.toggle('solo', solo);
    }

    function goTo(hash) {
        const id = (hash || '#home').replace('#', '');
        const el = document.getElementById(id) || document.getElementById('home');
        
        if (el) {
            soloModeIfRequested(el.id);
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // Set focus for accessibility
            el.setAttribute('tabindex', '-1');
            el.focus({ preventScroll: true });
            
            setActiveLink(el.id);
            
            // Close mobile menu if open
            if (navList) {
                navList.classList.remove('open');
            }
        }
    }

    // Navigation Event Listeners
    navLinks.forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            const target = a.getAttribute('href');
            const newUrl = target + location.search;
            
            // Update URL without page reload
            if (history.pushState) {
                history.pushState(null, '', newUrl);
            } else {
                location.hash = target;
            }
            
            goTo(target);
        });
    });

    // Handle browser back/forward buttons
    window.addEventListener('hashchange', () => goTo(location.hash));
    window.addEventListener('popstate', () => goTo(location.hash));

    // Mobile Menu Functionality
    if (mobileToggle && navList) {
        mobileToggle.addEventListener('click', () => {
            navList.classList.toggle('open');
            const isOpen = navList.classList.contains('open');
            mobileToggle.setAttribute('aria-expanded', isOpen);
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileToggle.contains(e.target) && !navList.contains(e.target)) {
                navList.classList.remove('open');
                mobileToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        // Close mobile menu on Escape
        if (e.key === 'Escape' && navList) {
            navList.classList.remove('open');
            if (mobileToggle) {
                mobileToggle.setAttribute('aria-expanded', 'false');
                mobileToggle.focus();
            }
        }
        
        // Handle Enter key on focusable elements
        if (e.key === 'Enter') {
            const focused = document.activeElement;
            if (focused && focused.classList.contains('btn') && !focused.href) {
                focused.click();
            }
        }
    });

    // Scroll Spy - Update active navigation based on scroll position
    const scrollSpy = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveLink(entry.target.id);
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '-20% 0px -20% 0px'
    });

    sections.forEach(section => {
        if (section.id) {
            scrollSpy.observe(section);
        }
    });

    // Fade-in Animation Observer
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        fadeObserver.observe(el);
    });

    // External Link Security
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        if (!link.getAttribute('rel')) {
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });

    // Email Links Enhancement
    document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
        link.addEventListener('click', (e) => {
            // Add slight delay to show button press effect
            if (link.classList.contains('btn')) {
                e.preventDefault();
                link.style.transform = 'translateY(0)';
                link.style.boxShadow = 'var(--shadow-inset)';
                
                setTimeout(() => {
                    window.location.href = link.href;
                }, 150);
            }
        });
    });

    // Form Enhancement (if any forms are added later)
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', (e) => {
            const submitBtn = form.querySelector('button[type="submit"], input[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending...';
            }
        });
    });

    // Smooth Focus Management
    document.querySelectorAll('.card, .btn').forEach(el => {
        el.addEventListener('focus', () => {
            if (el.scrollIntoViewIfNeeded) {
                el.scrollIntoViewIfNeeded();
            }
        });
    });

    // Details/Summary Enhancement for Awards
    document.querySelectorAll('details').forEach(details => {
        const summary = details.querySelector('summary');
        if (summary) {
            summary.addEventListener('click', (e) => {
                // Add smooth transition effect
                setTimeout(() => {
                    if (details.open) {
                        const content = details.querySelector('p');
                        if (content) {
                            content.style.animation = 'fadeIn 300ms ease-out';
                        }
                    }
                }, 10);
            });
        }
    });

    // Dynamic CSS Animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .card:hover {
            transform: translateY(-2px);
        }
        
        .highlight:hover {
            transform: translateY(-1px);
        }
    `;
    document.head.appendChild(style);

    // Performance: Intersection Observer for resource loading
    const resourceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Load any deferred resources here if needed
                // For future image lazy loading, etc.
            }
        });
    });

    // Initialize on page load
    function initialize() {
        // Set initial navigation state
        goTo(location.hash || '#home');
        
        // Add loaded class to body for any CSS transitions
        document.body.classList.add('loaded');
        
        // Focus management for accessibility
        if (!location.hash) {
            const mainHeading = document.querySelector('h1');
            if (mainHeading) {
                mainHeading.focus();
            }
        }
    }

    // Error Handling
    window.addEventListener('error', (e) => {
        console.error('JavaScript Error:', e.error);
        // Graceful degradation - ensure basic functionality works
    });

    // Initialize the website
    initialize();

    // Development helper (remove in production)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('Personal Website Loaded Successfully');
        console.log('Sections:', sections.map(s => s.id));
        console.log('Navigation Links:', navLinks.length);
    }
});

// Service Worker Registration (for future PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment when service worker is implemented
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        setActiveLink,
        goTo,
        soloModeIfRequested
    };
}