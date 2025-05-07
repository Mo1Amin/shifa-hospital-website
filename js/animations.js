// You can add more advanced animations here if needed.
// For example, using libraries like GSAP (GreenSock Animation Platform)
// for more complex and performant animations.

// Example of a simple fade-in animation on scroll (requires CSS changes as well)

document.addEventListener('DOMContentLoaded', function() {
    const elementsToFade = document.querySelectorAll('.fade-in');

    function checkFade() {
        elementsToFade.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            const fadePoint = 200; // Adjust when the fade starts

            if (elementTop < windowHeight - fadePoint) {
                element.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', checkFade);
    checkFade(); // Initial check on load
});
