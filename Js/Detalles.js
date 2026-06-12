const productos = [
    { id: 1, nombre: "Tarro de barro", tags: ["Barro", "artesanía", "hecho a mano"], oferta: true, txtoferta: "2x1", descripcion: "hermoso tarro de barro para almacenar cosas.", precio: 300.00, imagen: ["https://i.ibb.co/NdQXG9nJ/IMG-6273.jpg", "https://i.ibb.co/YBXh87h6/IMG-6291.jpg", "https://i.ibb.co/VWWC677M/IMG-6294.jpg"],},
    { id: 2, nombre: "Jarrones decorados", tags: ["cerámica", "artesanía", "decoración"], oferta: false, txtoferta: "", descripcion: "Jarrones decorados con diseños de naturaleza", precio: 250.00, imagen: ["https://i.ibb.co/7J7KK3ds/IMG-6368.jpg", "https://i.ibb.co/SwP3Vgbn/IMG-6370.jpg", "https://i.ibb.co/C50Q7cFt/IMG-6369.jpg"] },
    { id: 3, nombre: "Pequeño tarro de madera", tags: ["madera", "del hogar", "cocina"], oferta: false, txtoferta: "", descripcion: "artesanías hechas a manos con barro, cerámica, madera, vidrio.", precio: 120.00, imagen: ["https://i.ibb.co/ds4mVhvp/IMG-6349.jpg", "https://i.ibb.co/7xQWbGwp/IMG-6353.jpg", "https://i.ibb.co/7JKG8GGh/IMG-6352.jpg"] },
    { id: 4, nombre: "Llavero de baseball", tags: ["metál", "artesanía", "accesorios"], oferta: true, txtoferta: "2x1", descripcion: "bola de baseball vieja y usada, sucia y manchada.", precio: 35.00, imagen: ["https://i.ibb.co/PZjsL1zF/IMG-6183.jpg", "https://i.ibb.co/yBq7q0ys/IMG-6184.jpg"] },
    { id: 5, nombre: "taza de madera", tags: ["madera", "artesanía", "cocina"], oferta: true, txtoferta: "3x1", descripcion: "manzana roja, jugosa y dulce, 100% natural.", precio: 160.00, imagen: ["https://i.ibb.co/yFbbgWy0/IMG-6355.jpg", "https://i.ibb.co/tPTpySBb/IMG-6358.jpg", "https://i.ibb.co/Hfppk5Qv/IMG-6357.jpg"] },
    { id: 6, nombre: "Caballo de madera", tags: ["madera", "decoración", "del hogar"], oferta: false, txtoferta: "3x1", descripcion: "Hermoso juego de vasos y platos de ceramica.", precio: 160.00, imagen: ["https://i.ibb.co/CpxmRyc0/IMG-6330.jpg", "https://i.ibb.co/9HvrBWLF/IMG-6333.jpg", "https://i.ibb.co/vWqNCrd/IMG-6335.jpg"] },
    { id: 7, nombre: "Cesta de frutas artificiales", tags: ["madera", "del hogar", "decoración"], oferta: false, txtoferta: "3x1", descripcion: "pequeño anafre caballo bayo para comida.", precio: 460.00, imagen: ["https://i.ibb.co/ymCvvrMx/IMG-6383.jpg", "https://i.ibb.co/6Jg1h6bF/IMG-6385.jpg"] },
    { id: 8, nombre: "Juego de bowls", tags: ["madera", "artesanía", "cocina"], oferta: false, txtoferta: "", descripcion: "juego de bowls y cucharones de madera", precio: 300.00, imagen: ["https://i.ibb.co/FbJFCBQy/bowl.jpg", "https://i.ibb.co/WWP0m7Gw/IMG-6192.jpg"] },
    { id: 9, nombre: "Mascara del güegüense", tags: ["madera", "artesanía", "cultural"], oferta: false, txtoferta: "", descripcion: "Mascara de madera de la obra El güegüense", precio: 260.00, imagen: ["https://i.ibb.co/W4JXqqzJ/IMG-6270.jpg", "https://i.ibb.co/HLWhCs2y/IMG-6267.jpg"]},
    { id: 10, nombre: "Monedero estampado", tags: ["textil", "cuero", "accesorios"], oferta: true, txtoferta: "2x1", descripcion: "Hermoso monedero estampado con diseño de atardecer en la playa", precio: 60.00, imagen: ["https://i.ibb.co/DDxCvsHK/IMG-6185.jpg", "https://i.ibb.co/LzVJ70SM/IMG-6186.jpg"] },
    { id: 11, nombre: "Bolso de mano", tags: ["cuero", "accesorios"], oferta: false, txtoferta: "", descripcion: "pequeño bolso de mano de cuero", precio: 60.00, imagen: ["https://i.ibb.co/bj97PQdh/IMG-6372.jpg", "https://i.ibb.co/FqXtfzHg/IMG-6373.jpg"] }
];

const idSeleccionado = localStorage.getItem("productoSeleccionado");

const productoEncontrado = productos.find(p => p.id === parseInt(idSeleccionado));

if (productoEncontrado) {
    document.getElementById("imagen-producto").src = productoEncontrado.imagen[0];
    document.getElementById("imagen-producto").alt = productoEncontrado.nombre;
    document.getElementById("product-name").innerText = productoEncontrado.nombre;
    document.getElementById("product-price").innerText = `C$ ${productoEncontrado.precio.toFixed(2)}`;
    document.getElementById("product-description").innerText = productoEncontrado.descripcion;

    const tagsContainer = document.getElementById("product-tags");
    
    if (tagsContainer) {
        tagsContainer.innerHTML = "";
        if (productoEncontrado.tags && productoEncontrado.tags.length > 0) {
            productoEncontrado.tags.forEach(tagTexto => {
                const spanTag = document.createElement("span");
                spanTag.innerText = tagTexto;
                tagsContainer.appendChild(spanTag);
            });
        }
    }
    
    const thumbnails = document.querySelectorAll(".thumbnails img");
    thumbnails.forEach((thumb, index) => {
        if (productoEncontrado.imagen[index]) {
            thumb.src = productoEncontrado.imagen[index];
            thumb.style.display = "block";
            } else {
            thumb.style.display = "none";
        }
    });
} else {
    console.error("Producto no encontrado");
};

const miniaturas = document.querySelectorAll(".thumbnails img");
const imagenPrincipal = document.getElementById("imagen-producto");

miniaturas.forEach(miniatura => {
    miniatura.addEventListener("click", function() {

        imagenPrincipal.src = this.src;
        miniaturas.forEach(m => m.classList.remove("active"));

        this.classList.add("active");
    });
});

const Recomendados = () => {
    const recomendadosContainer = document.getElementById("recommended-cont");

    if (!recomendadosContainer) return;

    const productosFiltrados = productos.filter(p => p.id !== parseInt(idSeleccionado)).slice(0, 10);
    const productosAleatorios = productosFiltrados.sort(() => 0.5 - Math.random()).slice(0, 10);

    const cantidadMostrar = 5;
    const listaFinal = productosAleatorios.slice(0, cantidadMostrar);

    recomendadosContainer.innerHTML = "";

    listaFinal.forEach(prod => {
        const cardLikn = document.createElement("a");
        cardLikn.href = "#";
        cardLikn.style.textDecoration = "none";
        cardLikn.style.color = "inherit";

        cardLikn.innerHTML = `
            <div class="card">
                <img src="${prod.imagen}" alt="${prod.nombre}">
                <div class="card-content">
                    <h4>${prod.nombre}</h4>
                    <span>C$ ${prod.precio.toFixed(2)}</span>
                </div>
            </div>
        `;

        cardLikn.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.setItem("productoSeleccionado", prod.id);
            window.location.reload();
            window.scrollTo(0, 0);
        });

        recomendadosContainer.appendChild(cardLikn);
    });   
}

Recomendados();