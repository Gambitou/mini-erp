const inputProducto = document.getElementById("inputProducto");

const btnGuardar = document.getElementById("btnGuardar");
let productos = [];

btnGuardar.addEventListener("click", () => {

    productos.push(inputProducto.value);

    console.log(productos);

});