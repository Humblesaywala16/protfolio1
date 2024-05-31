function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".Hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

/*don't use this one///////*/ 
/*document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('.navbar-links');

    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });
});
*/