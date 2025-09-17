// Fondo negro en toda la página
document.body.style.backgroundColor = "black";
document.body.style.color = "white";



const conteiner = document.querySelectorAll('.Conteiner');
conteiner.forEach(element => {
    element.classList.add('bg-dark', 'text-white');
});

// ==== TARJETAS ====
class Tarjeta {
    constructor(titulo, imagen, descripcion, precio) {
        this.titulo = titulo;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}

// Contenedor de tarjetas
let contenedor = document.getElementById("contenedor");
contenedor.classList.add("d-flex", "flex-wrap", "justify-content-center", "gap-3");
contenedor.style.margin = "25px";


// Array de productos
let albums = [
    new Tarjeta("El Disco De Tu Corazón", "https://i.scdn.co/image/ab67616d0000b2735195219d777c551f280d95d5", "Miranda!\nFormato: CD MUSICAL", 25000),
    new Tarjeta("Flower Boy", "https://indiehoy.com/wp-content/uploads/2017/07/Tyler-the-Creator-Flower-Boy-994x1000.jpg", "Tyler The Creator \nFormato: CD MUSICAL", 35000),
    new Tarjeta("Por Cesárea", "https://images.genius.com/5bdb578d1dad91f670071fa9c30603ed.1000x1000x1.png", "Dillom \nFormato: Vinilo", 40000),
    new Tarjeta("DAMN.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb5WDlRTHe1EdYmifyyyTqTmMaSsVdd9EVvQ&s", "Kendrick Lamar \nFormato: CD MUSICAL", 20000),
    new Tarjeta("The Dark Side of the Moon", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKqByhEFZaHf3OoW7oYwdsUQxjSbxn6SOquQ&s", " Pink Floyd \nFormato: Vinilo", 100000),
    new Tarjeta("Ballads 1", "https://i.scdn.co/image/ab67616d0000b27360ba1d6104d0475c7555a6b2", "Joji \nFormato: CD MUSICAL", 25000),
    new Tarjeta("Karma", "https://akamai.sscdn.co/letras/360x360/albuns/3/6/8/0/3792071755868469.jpg", "Stray Kids\n Formato: ALBUM", 60000),
    new Tarjeta("The Tortured Poets Department", "https://upload.wikimedia.org/wikipedia/en/6/6e/Taylor_Swift_%E2%80%93_The_Tortured_Poets_Department_%28album_cover%29.png", "Taylor Swift \nFormato:Vinilo", 40000),
    new Tarjeta("NO VAYAS A ATENDER CUANDO EL DEMONIO LLAMA", "https://i.scdn.co/image/ab67616d0000b27306ad26d22030b8c988a10f20", "LALI \nFormato: CD MUSICAL", 25000),
    new Tarjeta("Scarlet", "https://upload.wikimedia.org/wikipedia/en/0/0b/Doja_Cat_-_Scarlet.png", "Doja Cat\n \nFormato: CD MUSICAL", 25000),
    new Tarjeta("Oktubre", "https://akamai.sscdn.co/uploadfile/letras/albuns/6/3/e/4/2183691712605514.jpg", " Patricio Rey y sus Redonditos de Ricota \nFormato:CD MUSICAL", 30000),
    new Tarjeta("Baño María", "https://i.scdn.co/image/ab67616d0000b27340349e09eb8cc8cac72f7959", " CA7RIEL & Paco Amoroso \nFormato: CD MUSICAL", 30000),
    new Tarjeta("Cabildo y Juramento", "https://www.cmtv.com.ar/tapas-cd/0985337001602096602.webp", "Conociendo Rusia \nFormato: Vinilo", 35000),
    new Tarjeta("Infame", "https://i.scdn.co/image/ab67616d0000b273d4fa1c14516db6f30007a663", "Babasónicos \nFormato: CD MUSICAL", 25000),
    new Tarjeta("Clics modernos", "https://i.scdn.co/image/ab67616d0000b273b14842a87b833bc0a9339f60", "Charly Garcia \nFormato: Vinilo", 50000),
    new Tarjeta("Submarine", "https://i.scdn.co/image/ab67616d0000b2734d070fdf58fad8c54c5beb85", "The Marias \nFormato: CD MUSICAL", 30000),
    new Tarjeta("Artud", "https://i.discogs.com/69aBZjb_PYzDgsmiENK5FxZCygn-ilnK4uVfnzBmvaM/rs:fit/g:sm/q:90/h:600/w:595/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI5NDU5/NDAtMTQ2NTE4ODc5/OS05MDYzLmpwZWc.jpeg", "Pescado Rabioso \nFormato: Vinilo", 60000),
    new Tarjeta("166 (DELUXE) retirada", "https://i.scdn.co/image/ab67616d0000b27399a66dbad79409a0ce37ae7b", "Milo J \nFormato: CD MUSICAL", 20000),
    new Tarjeta(" Folklore", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ155bOxyDTMyP2sgHVQuYBQhmJ7hYeTnGotw&s", "Taylor Swift \nFormato: Vinilo", 40000),
    new Tarjeta("Romance", "https://i.scdn.co/image/ab67616d0000b273bda5c1e56bf06c3c7fc173f7", "Luis Miguel \nFormato: CD MUSICAL", 25000),
    new Tarjeta("Miranda es imposible!", "https://i.scdn.co/image/ab67616d0000b2737ffa007124cc61a27c9ade2f", "Miranda! \nFormato: CD MUSICAL", 20000),
    new Tarjeta("Dynamo", "https://i.scdn.co/image/ab67616d0000b273b755f1b1b4410d404fe21167", "Soda Stereo \nFormato: CD MUSICAL", 50000),
    new Tarjeta("GRASA DE LAS CAPITALES", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVHpe91k-WYNWKGgQEeu1Hl94YaRgNb6VWQg&s", "Seru Giran \nFormato: Vinilo", 65000),
    new Tarjeta("Harry Styles", "https://i.scdn.co/image/ab67616d0000b2736c619c39c853f8b1d67b7859", "Harry Styles \nFormato: Vinilo", 35000),
    new Tarjeta("American Idiot", "https://http2.mlstatic.com/D_NQ_NP_695594-MLU79143085406_092024-O.webp", "Green Day \nFormato: CD MUSICAL", 25000),
    new Tarjeta("Relax", "https://acdn-us.mitiendanube.com/stores/004/088/117/products/156844-d0af5817e2101e623317269584198450-1024-1024.webp", "Virus \nFormato: CD MUSCIAL", 25000),
    new Tarjeta("NEVERMIND", "https://acdn-us.mitiendanube.com/stores/004/088/117/products/155461-88d3005f68c0ee9cce17269578689588-1024-1024.webp", "Nirvana \nFormato: CD MUSICAL", 22000),
    new Tarjeta("AY AY AY", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnCVubzTZD02Ikq4auz0qrlk-c_ari6wL7_Q&s", "Los Piojos \nFormato: Vinilo", 40000),
    new Tarjeta("Vida", "https://acdn-us.mitiendanube.com/stores/004/088/117/products/153674-e54c479473c209d88417284949840794-1024-1024.webp", "Sui Generis \nFormato: Vinilo", 60000),
    new Tarjeta("Queen II", "https://acdn-us.mitiendanube.com/stores/004/088/117/products/649227-548c7268b76572d44017274906407940-1024-1024.webp", "Queen \nFormato: Vinilo", 65000)
];

// ==== CONTENEDOR SWIPER ====
const swiperWrapper = document.createElement("div");
swiperWrapper.id = "swiper-wrapper";
swiperWrapper.style.display = "flex";
swiperWrapper.style.overflowX = "hidden";
swiperWrapper.style.scrollBehavior = "smooth";
swiperWrapper.style.gap = "20px";
swiperWrapper.style.width = "100%";
swiperWrapper.style.position = "relative";

// Insertar wrapper dentro del contenedor principal
contenedor.appendChild(swiperWrapper);

// ==== BOTONES DEL SWIPER ====
const btnPrev = document.createElement("button");
btnPrev.textContent = "<";
btnPrev.classList.add("btn", "btn-dark");
btnPrev.style.position = "absolute";
btnPrev.style.left = "10px";
btnPrev.style.top = "50%";
btnPrev.style.transform = "translateY(-50%)";
btnPrev.style.zIndex = "10";

const btnNext = document.createElement("button");
btnNext.textContent = ">";
btnNext.classList.add("btn", "btn-dark");
btnNext.style.position = "absolute";
btnNext.style.right = "10px";
btnNext.style.top = "50%";
btnNext.style.transform = "translateY(-50%)";
btnNext.style.zIndex = "10";

// Agregamos los botones al contenedor principal
contenedor.style.position = "relative";
contenedor.appendChild(btnPrev);
contenedor.appendChild(btnNext);

// Render de tarjetas
function MostrarAlbumesSwiper() {
    albums.forEach(x => {
        const card = document.createElement("div");
        card.classList.add("card", "shadow", "text-center");
        card.style.width = "250px";
        card.style.flex = "0 0 auto"; // Importante: evita que se achiquen

        // Imagen
        const imagen = document.createElement("img");
        imagen.classList.add("card-img-top");
        imagen.src = x.imagen;
        card.appendChild(imagen);

        // Cuerpo
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const titulo = document.createElement("h5");
        titulo.classList.add("card-title");
        titulo.textContent = x.titulo;
        cardBody.appendChild(titulo);

        const parrafo = document.createElement("p");
        parrafo.classList.add("card-text");
        parrafo.textContent = `${x.descripcion}\nPrecio: $${x.precio}`;

        const botonAdd = document.createElement("button");
        botonAdd.classList.add("btn", "btn-dark");
        botonAdd.textContent = "Comprar";
        botonAdd.addEventListener("click", function () {
            persona1.agregarProducto(x);
            Mostrar();
        });

        cardBody.append(parrafo, botonAdd);
        card.appendChild(cardBody);

        swiperWrapper.appendChild(card);
    });
}
MostrarAlbumesSwiper();

// ==== LÓGICA DEL SWIPER ====
const cardWidth = 270; // ancho tarjeta + margen aprox.
let scrollAmount = 0;

btnNext.addEventListener("click", () => {
    swiperWrapper.scrollBy({ left: cardWidth, behavior: "smooth" });
});

btnPrev.addEventListener("click", () => {
    swiperWrapper.scrollBy({ left: -cardWidth, behavior: "smooth" });
});

// ==== CLASE PERSONA ====
class Persona {
    constructor(nombre, apellido, dni, telefono, email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.telefono = telefono;
        this.email = email;
        this.productos = [];
    }
    datosCompletos() {
        return `Nombre:${this.nombre}, Apellido:${this.apellido}, DNI:${this.dni}, Telefono:${this.telefono}, Correo Electronico:${this.email}`;
    }
    agregarProducto(producto) {
        this.productos.push(producto);
    }
    subTotal() {
        return this.productos.reduce((sum, p) => sum + p.precio, 0);
    }
    eliminarProducto(producto) {
        let indice = this.productos.findIndex(x => x === producto);
        this.productos.splice(indice, 1);
    }
    reset() {
        this.productos = [];
    }
}
const persona1 = new Persona("Carlos", "Millahueque", 48866750, "299-5242501", "charly_maniac83@gmail.com");

let tbody = document.querySelector("#tbody");
let subtotal = document.querySelector("#subtotal");

// ==== TABLA DE CARRITO ====
function Mostrar() {
    tbody.innerHTML = "";
    subtotal.textContent = 0;

    persona1.productos.forEach(x => {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        td1.textContent = x.titulo;
        const td2 = document.createElement("td");
        td2.textContent = x.descripcion;
        const td3 = document.createElement("td");
        td3.textContent = x.precio;
        const td4 = document.createElement("td");

        let botonEliminar = document.createElement("button");
        botonEliminar.classList.add("btn", "btn-danger");
        botonEliminar.textContent = "Eliminar";

        botonEliminar.addEventListener("click", function () {
            persona1.eliminarProducto(x);
            Mostrar();
        });

        subtotal.textContent = persona1.subTotal();

        td4.appendChild(botonEliminar);
        tr.append(td1, td2, td3, td4);
        tbody.appendChild(tr);
    });
}

// Botón reset
const botonReset = document.querySelector("#reset");
botonReset.textContent = "Eliminar todo";
botonReset.addEventListener("click", function () {
    persona1.reset();
    Mostrar();
});
// ==== BOTÓN IMPRIMIR TICKET ====
const botonTicket = document.createElement("button");
botonTicket.textContent = "Imprimir Ticket";
botonTicket.classList.add("btn", "btn-success");
botonTicket.style.marginLeft = "10px";

// Insertamos el botón después del botón reset
botonReset.insertAdjacentElement('afterend', botonTicket);

// Función para generar el ticket
function generarTicket() {
    if (persona1.productos.length === 0) {
        alert("No hay productos en el carrito.");
        return;
    }

    let ticket = "===== TICKET DE COMPRA =====\n\n";
    ticket += `Cliente: ${persona1.datosCompletos()}\n\n`;
    ticket += "Productos:\n";

    persona1.productos.forEach((p, index) => {
        ticket += `${index + 1}. ${p.titulo} - ${p.descripcion} - $${p.precio}\n`;
    });

    ticket += `\nSubtotal: $${persona1.subTotal()}\n`;
    ticket += "===========================\n";

    // Abrir ventana para imprimir
    const ventanaTicket = window.open("", "Ticket", "width=400,height=600");
    ventanaTicket.document.write(`<pre>${ticket}</pre>`);
    ventanaTicket.document.close();
    ventanaTicket.print();
}

// Evento click
botonTicket.addEventListener("click", generarTicket);

// ==== FOOTER ====
const footer = document.getElementById('footer');
footer.classList.add('bg-dark', 'text-white', 'text-center');

const listaLinks = document.querySelectorAll(".nav-link");
listaLinks.forEach(element => element.classList.add("text-white"));

// ==== CONTADOR ====
const cont = document.querySelectorAll(".container.my-5");

// ==== CONTADORES ====
function animateCounter(cont) {
    cont.classList.add("text-white");
    const target = +cont.getAttribute("data-target"); // <-- FIX
    const duration = +cont.getAttribute("data-duration") || 2000;
    const stepTime = Math.abs(Math.floor(duration / target));

    let current = 0;
    const increment = target / (duration / stepTime);

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            cont.textContent = target;
            clearInterval(timer);
        } else {
            cont.textContent = Math.floor(current);
        }
    }, stepTime);
}

function initCounters() {
    const counters = document.querySelectorAll(".counter");
    counters.forEach(c => animateCounter(c));
}
window.addEventListener("load", initCounters);