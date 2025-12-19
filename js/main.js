
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navContainer = document.getElementById('header-nav-container');

    if (hamburgerBtn && navContainer) {
        hamburgerBtn.addEventListener('click', function() {
            navContainer.classList.toggle('is-open');
            hamburgerBtn.classList.toggle('is-open');
        });
    }
});
