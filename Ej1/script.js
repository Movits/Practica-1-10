const pPrecioTotal = document.querySelector("#precioTotal");
const PRECIO_PROD_1 = 500;
const PRECIO_PROD_2 = 300;
const selectCant = document.querySelector("select");
const olListaCarrito = document.querySelector("#listaCarrito");
const PROD_1 = "Pan";
const PROD_2 = "Medialuna";

let precioTotal = 0;
let tipoProducto = document.querySelector("#tipo-producto");
let precioProducto = document.querySelector("#precio-producto");
let imgProducto = document.querySelector("#img-producto");

let nombreProductoActual = PROD_1;
let precioProductoActual = PRECIO_PROD_1;

function agregarProducto() {
    precioTotal = (precioProductoActual * selectCant.value) + precioTotal;
    pPrecioTotal.innerHTML = "Total: $" + precioTotal;
    olListaCarrito.innerHTML += `
    <li>${nombreProductoActual} (${selectCant.value}) </li>
    `;
}

function siguienteProducto() {
    

    tipoProducto.innerHTML = PROD_2;
    precioProducto.innerHTML = "Precio: " + PRECIO_PROD_2;
    imgProducto.src = "https://www.abc.com.py/resizer/XRvOD1fw0nVKkmGJY6JbE21yZkE=/fit-in/770x495/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/abccolor/PVBO4DFYMZH2NHZTQPE7H3P7HE.jpg";

    nombreProductoActual = PROD_2;
    precioProductoActual = PRECIO_PROD_2;
}