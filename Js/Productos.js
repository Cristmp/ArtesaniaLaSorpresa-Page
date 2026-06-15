const productos = [
    {
        id: 1,
        nombre: "Tarro de barro",
        favorito: false,
        tags: ["cerámica", "artesanía", "hecho a mano"],
        oferta: true,
        txtoferta: "2x1",
        descripcion: "hermoso tarro de barro para almacenar cosas.",
        precio: 300.00,
        imagen: ["https://i.ibb.co/NdQXG9nJ/IMG-6273.jpg", "https://i.ibb.co/YBXh87h6/IMG-6291.jpg", "https://i.ibb.co/7J7KK3ds/IMG-6368.jpg"]
    },
    {
        id: 2,
        nombre: "Jarrones decorados",
        favorito: false,
        tags: ["cerámica", "artesanía", "decoración"],
        oferta: false,
        txtoferta: "",
        descripcion: "Jarrones decorados con diseños de naturaleza",
        precio: 250.00,
        imagen: ["https://i.ibb.co/7J7KK3ds/IMG-6368.jpg", "https://i.ibb.co/SwP3Vgbn/IMG-6370.jpg", "https://i.ibb.co/C50Q7cFt/IMG-6369.jpg"]
    },
    {
        id: 3,
        nombre: "Pequeño tarro de madera",
        favorito: false,
        tags: ["madera", "del hogar", "cocina"],
        oferta: false,
        txtoferta: "",
        descripcion: "artesanías hechas a manos con barro, cerámica, madera, vidrio.",
        precio: 120.00,
        imagen: ["https://i.ibb.co/ds4mVhvp/IMG-6349.jpg", "https://i.ibb.co/7xQWbGwp/IMG-6353.jpg", "https://i.ibb.co/7JKG8GGh/IMG-6352.jpg"]
    },
    {
        id: 4,
        nombre: "Llavero de baseball",
        favorito: false,
        tags: ["metál", "artesanía", "accesorios"],
        oferta: true,
        txtoferta: "2x1",
        descripcion: "bola de baseball vieja y usada, sucia y manchada.",
        precio: 35.00,
        imagen: ["https://i.ibb.co/PZjsL1zF/IMG-6183.jpg", "https://i.ibb.co/yBq7q0ys/IMG-6184.jpg"]
    },
    {
        id: 5,
        nombre: "taza de madera",
        favorito: false,
        tags: ["madera", "artesanía", "cocina"],
        oferta: true,
        txtoferta: "3x1",
        descripcion: "manzana roja, jugosa y dulce, 100% natural.",
        precio: 160.00,
        imagen: ["https://i.ibb.co/yFbbgWy0/IMG-6355.jpg", "https://i.ibb.co/tPTpySBb/IMG-6358.jpg", "https://i.ibb.co/Hfppk5Qv/IMG-6357.jpg"]
    },
    {
        id: 6,
        nombre: "Caballo de madera",
        favorito: false,
        tags: ["madera", "decoración", "del hogar"],
        oferta: false,
        txtoferta: "3x1",
        descripcion: "Hermoso juego de vasos y platos de ceramica.",
        precio: 160.00,
        imagen: ["https://i.ibb.co/CpxmRyc0/IMG-6330.jpg", "https://i.ibb.co/9HvrBWLF/IMG-6333.jpg", "https://i.ibb.co/vWqNCrd/IMG-6335.jpg"]
    },
    {
        id: 7,
        nombre: "Cesta de frutas artificiales",
        favorito: false,
        tags: ["madera", "del hogar", "decoración"],
        oferta: false,
        txtoferta: "3x1",
        descripcion: "pequeño anafre caballo bayo para comida.",
        precio: 460.00,
        imagen: ["https://i.ibb.co/ymCvvrMx/IMG-6383.jpg", "https://i.ibb.co/6Jg1h6bF/IMG-6385.jpg"]
    },
    {
        id: 8,
        nombre: "Juego de bowls",
        favorito: false,
        tags: ["madera", "artesanía", "cocina"],
        oferta: false,
        txtoferta: "",
        descripcion: "juego de bowls y cucharones de madera",
        precio: 300.00,
        imagen: ["https://i.ibb.co/FbJFCBQy/bowl.jpg", "https://i.ibb.co/WWP0m7Gw/IMG-6192.jpg"]
    },
    {
        id: 9,
        nombre: "Mascara del güegüense",
        favorito: false,
        tags: ["madera", "artesanía", "cultural"],
        oferta: false,
        txtoferta: "",
        descripcion: "Mascara de madera de la obra El güegüense",
        precio: 260.00,
        imagen: ["https://i.ibb.co/W4JXqqzJ/IMG-6270.jpg", "https://i.ibb.co/HLWhCs2y/IMG-6267.jpg"]
    },
    {
        id: 10,
        nombre: "Monedero estampado",
        favorito: false,
        tags: ["textil", "cuero", "accesorios"],
        oferta: true,
        txtoferta: "2x1",
        descripcion: "Hermoso monedero estampado con diseño de atardecer en la playa",
        precio: 60.00,
        imagen: ["https://i.ibb.co/DDxCvsHK/IMG-6185.jpg", "https://i.ibb.co/LzVJ70SM/IMG-6186.jpg"]
    },
    {
        id: 11,
        nombre: "Bolso de mano",
        favorito: false,
        tags: ["textil", "cuero", "accesorios"],
        oferta: false,
        txtoferta: "",
        descripcion: "pequeño bolso de mano de cuero",
        precio: 60.00,
        imagen: ["https://i.ibb.co/bj97PQdh/IMG-6372.jpg", "https://i.ibb.co/FqXtfzHg/IMG-6373.jpg"]
    },
];

const contenedor = document.getElementById("card-cont");
const buscador = document.getElementById("input-buscar");
const NoResultado = document.getElementById("noResults")

const desplegarProductos = (listaProduct) => {

    contenedor.innerHTML = "";

    if(listaProduct.length === 0){
        NoResultado.style.display = "flex";
    }else{
        listaProduct.forEach(producto => {
            const card = document.createElement("div");
            card.classList.add("card-product");
        
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
                localStorage.setItem("productoSeleccionado", producto.id);
                window.location.href = "../Pages/InfoProductMarina.html";
            });
        
            contenedor.appendChild(card);
        });
        NoResultado.style.display = "none";
    }
};

const manejoBusqueda = () => {
    const buscarTerm = buscador.value.toLowerCase()
    const filtroProduct = productos.filter((producto) => producto.nombre.toLowerCase().startsWith(buscarTerm));

    desplegarProductos(filtroProduct);
};


desplegarProductos(productos);

buscador.addEventListener("input", manejoBusqueda);