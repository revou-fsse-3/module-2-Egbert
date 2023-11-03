// function myFunction() {
//     var x = document.getElementById("myMenu");
//     if (x.className === "menu") {
//         x.className += "responsive";
//     } else {
//         x.className = "menu"
//     }
// }

const hamburger = document.querySelector('.hamburger')
const navbarMobile = document.querySelector('#navbarMobile')

let status = false

const showNav = () => {
    navbarMobile.classList.toggle('showNavbarMobile')
    navbarMobile.classList.toggle('navbarMobile')
    // let status = true

    // if (status === true) {
    //     navbarMobile.classList.remove('showNavbarMobile')
    //     navbarMobile.classList.remove('navbarMobile')
    // }
}

hamburger.addEventListener('click', showNav)