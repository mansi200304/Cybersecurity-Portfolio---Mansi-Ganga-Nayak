document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section, .hero-section');
    const projectCards = document.querySelectorAll('.project-card');
    const skillCategories = document.querySelectorAll('.skill-category');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    
                    navLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                }
            }
        });
    });
    
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
    };
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                
                const sectionId = entry.target.getAttribute('id');
                if (sectionId) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    const cardObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('card-visible');
                }, index * 100);
                cardObserver.unobserve(entry.target);
            }
        });
    }, cardObserverOptions);
    
    projectCards.forEach(card => {
        cardObserver.observe(card);
    });
    
    skillCategories.forEach(skill => {
        cardObserver.observe(skill);
    });
    
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.willChange = 'transform, box-shadow';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.willChange = 'auto';
        });
    });
    
    const glitchElements = document.querySelectorAll('.glitch');
    glitchElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.classList.add('glitch-active');
        });
        
        element.addEventListener('mouseleave', function() {
            this.classList.remove('glitch-active');
        });
    });
    
    let lastScrollTop = 0;
    const nav = document.getElementById('main-nav');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    }, { passive: true });
    
    const experienceItems = document.querySelectorAll('.experience-item');
    const itemObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('item-visible');
                itemObserver.unobserve(entry.target);
            }
        });
    }, cardObserverOptions);
    
    experienceItems.forEach(item => {
        itemObserver.observe(item);
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey || e.metaKey) {
            return;
        }
        
        const currentActiveLink = document.querySelector('.nav-link.active');
        const allNavLinks = Array.from(navLinks).filter(link => link.getAttribute('href').startsWith('#'));
        
        if (e.key === 'ArrowDown' && e.shiftKey) {
            e.preventDefault();
            const currentIndex = allNavLinks.indexOf(currentActiveLink);
            const nextIndex = (currentIndex + 1) % allNavLinks.length;
            allNavLinks[nextIndex].click();
        } else if (e.key === 'ArrowUp' && e.shiftKey) {
            e.preventDefault();
            const currentIndex = allNavLinks.indexOf(currentActiveLink);
            const prevIndex = (currentIndex - 1 + allNavLinks.length) % allNavLinks.length;
            allNavLinks[prevIndex].click();
        }
    });
    
    document.querySelectorAll('a, button, [tabindex]').forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid rgba(0, 255, 159, 0.5)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
});
