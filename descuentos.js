// const precioOriginal =100;
// const descuento = 15;


function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento ) / 100;
    return precioConDescuento;

}

function BotonPrecioConDescuento() {

    const entradaPrecio = document.getElementById("EntradaPrecio");
    const precio1 = entradaPrecio.value;

    const entradaDescuento = document.getElementById("EntradaDescuento");
    const descuento1 = entradaDescuento.value;

    const precioConDescuento = calcularPrecioConDescuento(precio1,descuento1);
    
    const resultadoPrecio = document.getElementById("resultadoPrecio");

    resultadoPrecio.innerText = "El precio con descuento son: $" + precioConDescuento;
}
 

// console.log({
    
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });