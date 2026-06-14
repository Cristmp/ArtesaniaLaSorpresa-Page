document.addEventListener("DOMContentLoaded", () => {
    const loginModal = document.querySelector(".login");
    const ubiModal = document.querySelector(".ubi")
    const registerModal = document.querySelector(".register");
    
    const loginButtons = document.querySelectorAll(".btnLogin, .btn-start");
    const registerButtons = document.querySelectorAll(".btnRegister");
    const ubiButtons = document.querySelectorAll(".btn-ubi");

    const closeUbi = ubiModal?.querySelector(".closeubi")
    const closeLogin = loginModal?.querySelector(".closebtn");
    const closeRegister = registerModal?.querySelector(".closebtn");

    ubiButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            if (ubiModal) {
                ubiModal.classList.add("active");

                loginModal?.classList.remove("active");
                registerModal?.classList.remove("active");

                document.getElementById("Nav-phone")?.classList.remove("active");
                document.getElementById("Card-phone")?.classList.remove("active");
            }
        });
    });

    closeUbi?.addEventListener("click", () => ubiModal?.classList.remove("active"));

    window.addEventListener("click", (e) => {
        if (e.target === ubiModal) ubiModal.classList.remove("active");
    });

    loginButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            loginModal.classList.add("active");
            registerModal.classList.remove("active"); // Cierra el de registro por si acaso
            // Opcional: cierra el menú del teléfono si está abierto
            document.getElementById("Nav-phone")?.classList.remove("active");
            document.getElementById("Card-phone")?.classList.remove("active");
        });
    });

    registerButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            registerModal.classList.add("active");
            loginModal.classList.remove("active");    // Cierra el de login por si acaso
            document.getElementById("Nav-phone")?.classList.remove("active");
            document.getElementById("Card-phone")?.classList.remove("active");
        });
    });

    closeLogin?.addEventListener("click", () => loginModal.classList.remove("active"));
    closeRegister?.addEventListener("click", () => registerModal.classList.remove("active"));

    window.addEventListener("click", (e) => {
        if (e.target === loginModal) loginModal.classList.remove("active");
        if (e.target === registerModal) registerModal.classList.remove("active");
    });

    const btnMenu = document.querySelector(".btn-menu");
    const navPhone = document.getElementById("Nav-phone");
    const cardPhone = document.getElementById("Card-phone");
    
    if (btnMenu && navPhone && cardPhone) {
        btnMenu.addEventListener("click", (e) => {
            e.stopPropagation();
            navPhone.classList.toggle("active");
            cardPhone.classList.toggle("active");
        });
    }

let lastScrollTop = 0;
    const searchingBar = document.querySelector('.searching');

    if (searchingBar) {
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
    }
});