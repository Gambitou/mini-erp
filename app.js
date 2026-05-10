const inputProducto = document.getElementById("inputProducto");

const btnGuardar = document.getElementById("btnGuardar");

const listaProductos = document.getElementById("listaProductos");

let productos = [];

btnGuardar.addEventListener("click", () => {

    productos.push(inputProducto.value);

    listaProductos.innerHTML = "";

    productos.forEach((producto) => {

        listaProductos.innerHTML += `<li>${producto}</li>`;

    });

});