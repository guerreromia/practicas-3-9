//Nav

//Carrusel

//Tarjetas
//miranda
//contenedor

class Tarjeta {
    constructor(titulo, imagen, descripcion, precio) {
        this.titulo = titulo;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}
let contenedor = document.getElementById("contenedor")
contenedor.classList.add("conteiner")
contenedor.style.margin = "25px"
contenedor.style.display = "flex"

let row = document.createElement("div")
row.classList.add("row")
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
    new Tarjeta("Cabildo y Juramento","https://www.cmtv.com.ar/tapas-cd/0985337001602096602.webp","Conociendo Rusia \nFormato: Vinilo",35000),
    new Tarjeta("Infame","https://i.scdn.co/image/ab67616d0000b273d4fa1c14516db6f30007a663","Babasónicos \nFormato: CD MUSICAL",25000),
    new Tarjeta("Clics modernos","https://i.scdn.co/image/ab67616d0000b273b14842a87b833bc0a9339f60","Charly Garcia \nFormato: Vinilo",50000),
    new Tarjeta("Submarine","https://i.scdn.co/image/ab67616d0000b2734d070fdf58fad8c54c5beb85","The Marias \nFormato: CD MUSICAL",30000),
    new Tarjeta("Artud","https://i.discogs.com/69aBZjb_PYzDgsmiENK5FxZCygn-ilnK4uVfnzBmvaM/rs:fit/g:sm/q:90/h:600/w:595/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI5NDU5/NDAtMTQ2NTE4ODc5/OS05MDYzLmpwZWc.jpeg","Pescado Rabioso \nFormato: Vinilo",60000),
    new Tarjeta("166 (DELUXE) retirada","https://i.scdn.co/image/ab67616d0000b27399a66dbad79409a0ce37ae7b","Milo J \nFormato: CD MUSICAL",20000),
    new Tarjeta(" Folklore","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ155bOxyDTMyP2sgHVQuYBQhmJ7hYeTnGotw&s","Taylor Swift \nFormato: Vinilo",40000),
    new Tarjeta("Romance","https://i.scdn.co/image/ab67616d0000b273bda5c1e56bf06c3c7fc173f7","Luis Miguel \nFormato: CD MUSICAL",25000),
    new Tarjeta("Miranda es imposible!","https://i.scdn.co/image/ab67616d0000b2737ffa007124cc61a27c9ade2f","Miranda! \nFormato: CD MUSICAL",20000),
    new Tarjeta("Dynamo","https://i.scdn.co/image/ab67616d0000b273b755f1b1b4410d404fe21167","Soda Stereo \nFormato: CD MUSICAL",50000),
    new Tarjeta("GRASA DE LAS CAPITALES","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVHpe91k-WYNWKGgQEeu1Hl94YaRgNb6VWQg&s","Seru Giran \nFormato: Vinilo",65000),
    new Tarjeta("Harry Styles","https://i.scdn.co/image/ab67616d0000b2736c619c39c853f8b1d67b7859","Harry Styles \nFormato: Vinilo",35000),
    new Tarjeta("American Idiot","https://http2.mlstatic.com/D_NQ_NP_695594-MLU79143085406_092024-O.webp","Green Day \nFormato: CD MUSICAL",25000),
    new Tarjeta("Relax","https://acdn-us.mitiendanube.com/stores/004/088/117/products/156844-d0af5817e2101e623317269584198450-1024-1024.webp","Virus \nFormato: CD MUSCIAL",25000),
    new Tarjeta("NEVERMIND","https://acdn-us.mitiendanube.com/stores/004/088/117/products/155461-88d3005f68c0ee9cce17269578689588-1024-1024.webp","Nirvana \nFormato: CD MUSICAL",22000),
    new Tarjeta("AY AY AY","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnCVubzTZD02Ikq4auz0qrlk-c_ari6wL7_Q&s","Los Piojos \nFormato: Vinilo",40000),
    new Tarjeta("Vida","https://acdn-us.mitiendanube.com/stores/004/088/117/products/153674-e54c479473c209d88417284949840794-1024-1024.webp","Sui Generis \nFormato: Vinilo",60000),
    new Tarjeta("Queen II","https://acdn-us.mitiendanube.com/stores/004/088/117/products/649227-548c7268b76572d44017274906407940-1024-1024.webp","Queen \nFormato: Vinilo",65000)
];
function MostrarAlbumes() {
    albums.forEach(x => {
        const col = document.createElement("div")
        col.classList.add("col-md-6");
        col.classList.add("col-lg-4")

        //tarjeta
        let card = document.createElement("div")
        card.classList.add("card")
        card.style.width = "250px"
        card.style.margin = "1rem"

        //imageb
        const imagen = document.createElement("img")
        imagen.classList.add("card-img-top")
        imagen.src = x.imagen
        card.appendChild(imagen)

        //cuerpo
        const cardBody = document.createElement("div")
        cardBody.classList.add("card-body")

        //titulo
        const titulo = document.createElement("h5")
        titulo.classList.add("card-tittle")
        titulo.textContent = `${x.titulo}`
        cardBody.appendChild(titulo)

        //descripcion
        const parrafo = document.createElement("p")
        parrafo.classList.add("card-text")
        parrafo.textContent = `${x.descripcion}\n precio: $${x.precio}`

        //boton de comprar
        let botonAdd = document.createElement("button")
        botonAdd.classList.add("btn")
        botonAdd.classList.add("btn-dark")
        botonAdd.classList.add("mx-1")
        botonAdd.textContent = "Comprar"

        botonAdd.addEventListener("click", function () {
            persona1.agregarProducto(x)
            Mostrar()
        })
        cardBody.append(parrafo, botonAdd)
        card.appendChild(cardBody)
        col.appendChild(card)
        row.appendChild(col)

    })

}
contenedor.appendChild(row)
MostrarAlbumes()

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
        return `Nombre:${this.nombre}, Apellido:${this.apellido}, DNI:${this.dni}, Telefono:${this.telefono}, Correo Electronico:${this.email}`
    }
    agregarProducto(producto) {
        this.productos.push(producto)
    }
    subTotal() {
        let total = 0;
        this.productos.forEach(x => total += x.precio)
        return total
    }
    eliminarProducto(producto) {
        let indice = this.productos.findIndex(x => x === producto)
        this.productos.splice(indice, 1)
    }
     reset() {
        this.productos = [];
    }
}
const persona1 = new Persona("Carlos", "Millahueque", 48866750, "299-5242501", "charly_maniac83@gmail.com")

let tbody = document.querySelector("#tbody")
let subtotal = document.querySelector("#subtotal")
//carrito de comprasss
function eliminarProductoLista(x) { //eliminar un producto dentro del arreglo persona
    let indice = listaProducto.indexOf(x)
    listaProducto.splice(indice, 1)

}
function Mostrar() {
    if (subtotal.innerHTML !== 0) { //resetear 0 el total
        subtotal.textContent = 0
    }
    if (tbody.innerHTML !== "") {
        tbody.innerHTML = ""
    }
    persona1.productos.forEach(x => {
        //carrito
        const tr = document.createElement("tr")
        const td1 = document.createElement("td")
        td1.textContent = x.titulo
        const td2 = document.createElement("td")
        td2.textContent = x.descripcion
        const td3 = document.createElement("td")
        td3.textContent = x.precio
        const td4 = document.createElement("td")

        let botonEliminar = document.createElement("button")

      /*   botonEliminar.classList.add("bi")
        botonEliminar.classList.add("bi-x-square") */
        botonEliminar.classList.add("btn")
        botonEliminar.classList.add("btn-danger")
        botonEliminar.textContent="eliminar"

        botonEliminar.addEventListener("click", function () {
            persona1.eliminarProducto(x)
            Mostrar()
        })

        //total
        subtotal.textContent = persona1.subTotal()
        console.log(persona1.subTotal())

        td4.appendChild(botonEliminar)
        tr.append(td1, td2, td3,td4)
        tbody.appendChild(tr)


    })
}
const botonReset = document.querySelector("#reset")
botonReset.textContent="eliminar todo"
botonReset.addEventListener("click", function () {
    persona1.reset()
    Mostrar()
})


