// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if(window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        // Only remove if not the default style for subpages
        if(window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || !window.location.pathname.includes('.html')) {
            nav.classList.remove('scrolled');
        }
    }
});

// Reveal elements on scroll
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}
window.addEventListener('scroll', reveal);
reveal(); // Trigger on load
