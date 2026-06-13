document.addEventListener("DOMContentLoaded", () => {

    const mainImage = document.querySelector(".main-image img");
  const thumbnails = document.querySelectorAll(".thumb");

  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {

        document.querySelector(".thumb.active-thumb")?.classList.remove("active-thumb");
        thumb.classList.add("active-thumb");

        const newSrc = thumb.querySelector("img").src;
      mainImage.src = newSrc;
    });
  });

  const colors = document.querySelectorAll(".colors .color");

  colors.forEach((colorBtn) => {
    colorBtn.addEventListener("click", () => {
      document.querySelector(".color.active-color")?.classList.remove("active-color");
      colorBtn.classList.add("active-color");
    });
  });

  const sizeButtons = document.querySelectorAll(".sizes button");
  let selectedSize = "";

  sizeButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        sizeButtons.forEach((b) => b.style.backgroundColor = ""); 
      sizeButtons.forEach((b) => b.style.color = "");

      btn.style.backgroundColor = "#333"; 
      btn.style.color = "#fff";
      selectedSize = btn.textContent;
    });
  });

  const orderBtn = document.querySelector(".order-btn");
  orderBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const colorSelected = document.querySelector(".color.active-color");
    const description = document.querySelector(".form-group textarea").value.trim();
    const fabricType = document.querySelector(".form-group input[placeholder*='Algodón']").value.trim();
    const phone = document.querySelector(".form-group input[placeholder*='5722']").value.trim();
    const name = document.querySelector(".form-group input[placeholder*='completo']").value.trim();

    let colorName = "No seleccionado";
    if (colorSelected) {

        colorName = Array.from(colorSelected.classList).find(c => c !== 'color' && c !== 'active-color') || "Por defecto";
    }

    if (!name || !phone) {
      alert("Por favor, completa los campos obligatorios: Nombre y Número celular.");
      return;
    }

    const pedido = {
      productoImagen: mainImage.src,
      color: colorName,
      talla: selectedSize || "No seleccionada",
      descripcion: description || "Sin descripción adicional",
      tipoTela: fabricType || "No especificado",
      cliente: name,
      telefono: phone
    };

    console.log("¡Pedido capturado con éxito!", pedido);
    alert(`¡Gracias ${pedido.cliente}! Tu pedido de personalización ha sido recibido en consola.`);
  });
});