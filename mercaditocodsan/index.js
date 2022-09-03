const btnComprar = document.getElementById("boton-comprar");
const containerProductos = document.getElementById("container-productos");
const btnAgregar = document.getElementById("boton-agregar");
let valorTotal= 0;
let stock = [25,20,15,6,9];
let productos = [
    "Salamín Paladini Picado Fino",
    "Panceta Salada Familiar Paladini",
    "Queso Mozzarella Bocconcino Arrivata",
    "Cerveza Honey Temple Pack",
    "Cerveza Patagonia Hoppy Lager"
];
let precioUnitario = [3555, 3235, 364, 1100 ,509];

function cargarProductos(){
    for (let i = 0; i < stock.length; i++){
        let divProducto = document.createElement("div");
        divProducto.classList.add("item-producto");
        divProducto.id = `productos-${i}`;
        let nombreProducto = document.createElement("p");
        nombreProducto.innerHTML = productos[i];
        let precioProducto = document.createElement("p");
        precioProducto.innerHTML = `$${precioUnitario[i]}`;
        let selectorCantidad = document.createElement("imput");
        selectorCantidad.id = `selector-cantidad-${i}`;
        selectorCantidad.type = "number";
        selectorCantidad.max = String(stock[i]);
        selectorCantidad.min = "0";
        divProducto.appendChild(nombreProducto);
        divProducto.appendChild(precioProducto);
        divProducto.appendChild(selectorCantidad);
        containerProductos?.appendChild(divProducto)
    }
};

function comprar(){
    for (let i = 0; i < stock.length; i++){
        let selectorCantidad = document.getElementById(`selector-cantidad-${i}`);
        let cantidadSeleccionda = Number(selectorCantidad.value);
        if (cantidadSeleccionda > 0){
            console.log(
                `compraste ${cantidadSeleccionda} unidades de ${productos[i]}`
            );
            valorTotal += precioUnitario[i] * cantidadSeleccionda;
        }
    }
    if (valorTotal > 0){
        console.log( `El total de su compra es $${valorTotal}`);
    } else {
        console.log(`Seleccione un producto`);
    }
};

function agregar(){
    let nuevoProd = document.getElementById("nuevoProd");
    let nuevoPrecio = document.getElementById("nuevoPrecio");
    let nuevaCantidad = document.getElementById("nuevaCantida");

    let nombreNuevoProducto = document.createElement("p");
    nombreNuevoProducto.innerHTML = nuevoProd.value;
    let precioNuevoProducto = document.createElement("p");
    precioNuevoProducto.innerHTML = `$${nuevoPrecio.value}`;
    let cantidadNuevoProducto = document.createElement("p");
    cantidadNuevoProducto.innerHTML = `${nuevaCantidad.value}`;

    let divProducto = document.createElement ("div");
    divProducto.classList.add("item-producto");
    divProducto.appendChild {nombreNuevoProducto};
    divProducto.appendChild {precioNuevoProducto};
    divProducto.appendChild {cantidadNuevoProducto};
    containerProductos?.appendChild(divProducto);

    console.log(precioNuevoProducto);
    console.log(cantidadNuevoProducto);
    valorTotal += Number(nuevoPrecio.value) * Number(nuevaCantidad.value);
};
Window.onload = cargarProductos();
btnComprar.addEventListener("click", comprar);
btnAgregar?.addEventListener("click", agregar);