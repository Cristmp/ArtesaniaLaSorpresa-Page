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