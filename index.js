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