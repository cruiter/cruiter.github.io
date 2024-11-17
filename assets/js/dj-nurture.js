document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('load', function() {
        setTimeout(() => {
            // Start the logo spin
            const logo = document.querySelector('.loader-logo');
            logo.classList.add('spin');
            
            // Slight delay before starting the fade
            setTimeout(() => {
                // Fade out the loader
                document.querySelector('.loader-overlay').classList.add('fade-out');
                // Fade in all content sections
                document.querySelectorAll('.fade-content').forEach(element => {
                    element.classList.add('visible');
                });
                
                // Remove loader after animation
                setTimeout(() => {
                    document.querySelector('.loader-overlay').style.display = 'none';
                }, 1000);
            }, 200); // Small delay after spin starts
        }, 100);
    });
});