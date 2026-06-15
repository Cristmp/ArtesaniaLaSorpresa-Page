document.addEventListener("DOMContentLoaded", () => {
    const banners = document.querySelectorAll(".banner-oferta");

    banners.forEach(banner => {
        banner.addEventListener("click", () => {
            const productoId = banner.getAttribute("data-id");

            if (productoId) {
                localStorage.setItem("productoSeleccionado", productoId);
                window.location.href = "../Pages/InfoProductMarina.html";
                }
        });
    });
});