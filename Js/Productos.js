const productos = [
    {
        id: 1,
        nombre: "Reloj",
        oferta: true,
        txtoferta: "2x1",
        descripcion: "cereza, fruto pequeño y redondo, de color rojo brillante,",
        precio: 19.99,
        imagen: "https://i.ibb.co/mrNnMJb9/ales-krivec-ZMZHcv-IVgbg-unsplash.jpg"
    },
    {
        id: 2,
        nombre: "Casette",
        oferta: false,
        txtoferta: "",
        descripcion: "artesanías hechas a manos con barro, cerámica, madera, vidrio.",
        precio: 29.99,
        imagen: "https://i.ibb.co/JwydxwFc/namroud-gorguis-FZWivbri0-Xk-unsplash.jpg"
    },
    {
        id: 3,
        nombre: "juego de ceramica",
        oferta: false,
        txtoferta: "",
        descripcion: "artesanías hechas a manos con barro, cerámica, madera, vidrio.",
        precio: 39.99,
        imagen: "https://i.ibb.co/gZ3tRcdz/chloe-bolton-R0qth-Xq3jec-unsplash.jpg"
    },
    {
        id: 4,
        nombre: "bola de baseball",
        oferta: false,
        txtoferta: "",
        descripcion: "bola de baseball vieja y usada, sucia y manchada.",
        precio: 20.00,
        imagen: "https://i.ibb.co/9XBP2Sf/chris-briggs-x9-TCnx-NBof-E-unsplash.jpg"
    },
    {
        id: 5,
        nombre: "Manzana roja",
        oferta: true,
        txtoferta: "3x1",
        descripcion: "manzana roja, jugosa y dulce, 100% natural.",
        precio: 35.00,
        imagen: "https://i.ibb.co/PZJDZb9Y/jk-sloan-co1wm-Dh-Pj-Kg-unsplash.jpg"
    },
    {
        id: 6,
        nombre: "Manzana roja",
        oferta: true,
        txtoferta: "3x1",
        descripcion: "manzana roja, jugosa y dulce, 100% natural.",
        precio: 35.00,
        imagen: "https://i.ibb.co/PZJDZb9Y/jk-sloan-co1wm-Dh-Pj-Kg-unsplash.jpg"
    },
    {
        id: 7,
        nombre: "Manzana roja",
        oferta: true,
        txtoferta: "3x1",
        descripcion: "manzana roja, jugosa y dulce, 100% natural.",
        precio: 35.00,
        imagen: "https://i.ibb.co/PZJDZb9Y/jk-sloan-co1wm-Dh-Pj-Kg-unsplash.jpg"
    },
    {
        id: 8,
        nombre: "Manzana roja",
        oferta: true,
        txtoferta: "3x1",
        descripcion: "manzana roja, jugosa y dulce, 100% natural.",
        precio: 35.00,
        imagen: "https://i.ibb.co/PZJDZb9Y/jk-sloan-co1wm-Dh-Pj-Kg-unsplash.jpg"
    },
];

const contenedor = document.getElementById("card-cont");

productos.forEach(producto => {
    const card = document.createElement("div");
    card.classList.add("card-product");
    card.innerHTML = `
        <div class="card-image">

            <div class="card-info">
                <p>Solo en tienda</p>
            </div>

            <div class="card-offer">
                <p>${producto.oferta ? `<span class="oferta">${producto.txtoferta}</span>` : ""}</p>
            </div>
            <img src="${producto.imagen}" alt="${producto.nombre}">
        </div>

        <div class="card-description">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p class="price">C$${producto.precio.toFixed(2)}</p>
        </div>
    `;
    contenedor.appendChild(card);
});