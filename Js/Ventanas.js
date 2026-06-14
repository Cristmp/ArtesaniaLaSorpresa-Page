const AbrirMenuDesplegable = () => {
    const btnMenu = document.querySelector(".btn-menu");
    const navPhone = document.getElementById("Nav-phone");
    const CardPhone = document.getElementById("Card-phone")
    if (!btnMenu || !navPhone) return;

    btnMenu.addEventListener("click", () => {
        navPhone.classList.toggle("active");
        CardPhone.classList.toggle("active")
    });
};

AbrirMenuDesplegable();

let lastScrollTop = 0;
const searchingBar = document.querySelector('.searching');

window.addEventListener('scroll', () => {
    let currentScroll = window.scrollY || document.documentElement.scrollTop;
    if (currentScroll < 0) currentScroll = 0;

    if (currentScroll > lastScrollTop && currentScroll > 150) {

        searchingBar.classList.add('searching-hidden');
    } else {
        searchingBar.classList.remove('searching-hidden');
    }

    lastScrollTop = currentScroll;
});