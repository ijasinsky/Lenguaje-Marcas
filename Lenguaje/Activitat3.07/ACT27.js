document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("navbar");
    const links = document.querySelectorAll("nav ul li a");

    hamburger.addEventListener("click", function() {
        nav.classList.toggle("open");
    });

    links.forEach(link => {
        link.addEventListener("click", function() {
            nav.classList.remove("open");
        });
    });
});