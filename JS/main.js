const hamburger = document.querySelector('.hamburger')
const navbarMobile = document.querySelector('#navbarMobile')

let status = false

const showNav = () => {
    navbarMobile.classList.toggle('showNavbarMobile')
    navbarMobile.classList.toggle('navbarMobile')
}

hamburger.addEventListener('click', showNav)

if (localStorage.getItem("darkMode") === "true") {
    document.getElementById("checkbox-dark-mode").checkhed = true;
    document.body.classList.add("dark-mode");
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    if (!document.getElementById("checkbox-dark-mode").checked) {
        localStorage.setItem("darkMode", false);
    } else {
        localStorage.setItem("darkMode", true)
    }
}