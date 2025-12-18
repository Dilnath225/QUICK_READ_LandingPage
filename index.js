function toggleMenu(menuIcon) {
    const nav = document.querySelector('.nav-links ul');
    menuIcon.classList.toggle('active');
    nav.classList.toggle('active');
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            if(window.innerWidth <= 768) {
                document.querySelector('.nav-links ul').classList.remove('active');
                document.querySelector('.hamburger').classList.remove('active');
            }
        }
    });
});

const observerOptions = {
    threshold: 0.15 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// See More Functionality

const seeMoreButtons = document.querySelectorAll('.see-more-btn');

seeMoreButtons.forEach(button => {
    button.addEventListener('click', (e) => {
       
        e.preventDefault();  
        const card = button.closest('.feature-card'); 
        card.classList.toggle('expanded');
        if (card.classList.contains('expanded')) {
            button.textContent = 'See Less';
        } else {
            button.textContent = 'See More';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('demoVideo');
    
    if (video) {
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    video.play().catch(error => {
                        console.log("Autoplay blocked:", error);
                    });
                } else {
                    video.pause();
                }
            });
        }, { threshold: 0.5 });

        videoObserver.observe(video);
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const status = document.getElementById('contactStatus');
        status.textContent = 'Sending...';
        // Simulate async submit (replace with real POST in production)
        setTimeout(() => {
            status.textContent = 'Thank you — your message has been received. We will contact you shortly.';
            contactForm.reset();
            setTimeout(() => { status.textContent = ''; }, 5000);
        }, 900);
        
    });
});
