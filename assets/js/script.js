const navMenu = document.getElementById("nav-menu"),
    toggleMenu = document.getElementById("nav-toggle"),
    closeMenu = document.getElementById("nav-close");

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('nav-icon');


toggleMenu.addEventListener("click", function() {
    if (navMenu.classList.toggle("show")) {
        toggleMenu.innerHTML = '<i class="ri-close-line"></i>';
    } else {
        toggleMenu.innerHTML = ' <i class="ri-menu-line"></i>';
    }

});

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        themeButton.innerHTML = '<i class="ri-sun-line"></i>';
    } else {
        themeButton.innerHTML = '<i class="ri-moon-line"></i>';
    }
});