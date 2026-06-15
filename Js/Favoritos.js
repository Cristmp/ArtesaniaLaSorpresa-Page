const productos = [
    { id: 1, nombre: "Tarro de barro", oferta: true, txtoferta: "2x1", descripcion: "hermoso tarro de barro para almacenar cosas.", precio: 300.00, imagen: "https://i.ibb.co/NdQXG9nJ/IMG-6273.jpg" },
    { id: 2, nombre: "Jarrones decorados", oferta: false, txtoferta: "", descripcion: "Jarrones decorados con designs de naturaleza", precio: 250.00, imagen: "https://i.ibb.co/7J7KK3ds/IMG-6368.jpg" },
    { id: 3, nombre: "Pequeño tarro de madera", oferta: false, txtoferta: "", descripcion: "artesanías hechas a manos con barro, cerámica, madera, vidrio.", precio: 120.00, imagen: "https://i.ibb.co/ds4mVhvp/IMG-6349.jpg" },
    { id: 4, nombre: "Llavero de baseball", oferta: true, txtoferta: "2x1", descripcion: "bola de baseball vieja y usada, sucia y manchada.", precio: 35.00, imagen: "https://i.ibb.co/PZjsL1zF/IMG-6183.jpg" },
    { id: 5, nombre: "taza de madera", oferta: true, txtoferta: "3x1", descripcion: "manzana roja, jugosa y dulce, 100% natural.", precio: 160.00, imagen: "https://i.ibb.co/yFbbgWy0/IMG-6355.jpg" },
    { id: 6, nombre: "Caballo de madera", oferta: false, txtoferta: "3x1", descripcion: "Hermoso juego de vasos y platos de ceramica.", precio: 160.00, imagen: "https://i.ibb.co/CpxmRyc0/IMG-6330.jpg" },
    { id: 7, nombre: "Cesta de frutas artificiales", oferta: false, txtoferta: "3x1", descripcion: "pequeño anafre caballo bayo para comida.", precio: 460.00, imagen: "https://i.ibb.co/ymCvvrMx/IMG-6383.jpg" },
    { id: 8, nombre: "Juego de bowls", oferta: false, txtoferta: "", descripcion: "juego de bowls y cucharones de madera", precio: 300.00, imagen: "https://i.ibb.co/FbJFCBQy/bowl.jpg" },
    { id: 9, nombre: "Mascara del güegüense", oferta: false, txtoferta: "", descripcion: "Mascara de madera de la obra El güegüense", precio: 260.00, imagen: "https://i.ibb.co/W4JXqqzJ/IMG-6270.jpg" },
    { id: 10, nombre: "Monedero estampado", oferta: true, txtoferta: "2x1", descripcion: "Hermoso monedero con bordados tradicionales.", precio: 60.00, imagen: "https://i.ibb.co/DDxCvsHK/IMG-6185.jpg" },
    { id: 11, nombre: "Bolso de mano", oferta: false, txtoferta: "", descripcion: "pequeño bolso de mano de cuero", precio: 60.00, imagen: "https://i.ibb.co/bj97PQdh/IMG-6372.jpg" }
];

const desplegarFavoritos = () => {
    const contenedorFavs = document.getElementById("favoritos-container");
    if (!contenedorFavs) return;

    const listaIDs = JSON.parse(localStorage.getItem("misFavoritos")) || [];

    contenedorFavs.innerHTML = "";

    if (listaIDs.length === 0) {
        contenedorFavs.innerHTML = `
            <div class="no-resultados" id="noResults">
                    <i class="fa-solid fa-heart-crack fa-6x" style="color: #8d8d8d;"></i>
                    <h1>Todavía no hay favoritos</h1>
                    <p>Explora nuestro Catálogo para agregar productos a tus favoritos</p>
                    <a href="../Pages/CatalogoPage.html" class="explorar-btn"><button>Explorar</button></a>
                </div>`;
        return;
    }

    const productosFavoritos = productos.filter(p => listaIDs.includes(p.id));

    productosFavoritos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("card-product");
        card.style.cursor = "pointer";

        card.innerHTML = `
            <div class="card-image">
                <div class="card-info">
                    <p>Solo en tienda</p>
                </div>
                ${producto.oferta ? `
                    <div class="card-offer">
                        <p><span class="oferta">${producto.txtoferta}</span></p>
                    </div>
                ` : ""}
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </div>
            <div class="card-description">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <p class="price">C$${producto.precio.toFixed(2)}</p>
            </div>
        `;

        card.addEventListener("click", () => {
            localStorage.setItem("idProductoSeleccionado", producto.id);
            window.location.href = "../Pages/InfoProductMarina.html";
        });

        contenedorFavs.appendChild(card);
    });

    const cantidad = document.getElementById("cant-fav")
        cantidad.innerHTML = `
                    <h3> ${listaIDs.length} favoritos
        `
};

desplegarFavoritos();