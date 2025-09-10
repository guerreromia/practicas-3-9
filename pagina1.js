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
    agregarAlbum(album) {

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
    new Tarjeta("Don't Tap the Glass", "https://upload.wikimedia.org/wikipedia/en/b/bb/Tyler%2C_the_Creator_-_Don%27t_Tap_the_Glass.png", "Tyler The Creator \nFormato: CD MUSICAL", 35000),
    new Tarjeta("Por Cesárea", "https://images.genius.com/5bdb578d1dad91f670071fa9c30603ed.1000x1000x1.png", "Dillom \nFormato: Vinilo", 40000),
    new Tarjeta("DAMN.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb5WDlRTHe1EdYmifyyyTqTmMaSsVdd9EVvQ&s", "Kendrick Lamar \nFormato: CD MUSICAL", 20000),
    new Tarjeta("The Dark Side of the Moon", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKqByhEFZaHf3OoW7oYwdsUQxjSbxn6SOquQ&s", " Pink Floyd \nFormato: Vinilo", 100000),
    new Tarjeta("Ballads 1", "https://i.scdn.co/image/ab67616d0000b27360ba1d6104d0475c7555a6b2", "Joji \nFormato: CD MUSICAL", 25000),
    new Tarjeta("Karma", "https://akamai.sscdn.co/letras/360x360/albuns/3/6/8/0/3792071755868469.jpg", "Stray Kids\n Formato: ALBUM", 60000),
    new Tarjeta("The Tortured Poets Department", "https://upload.wikimedia.org/wikipedia/en/6/6e/Taylor_Swift_%E2%80%93_The_Tortured_Poets_Department_%28album_cover%29.png", "Taylor Swift \nFormato:Vinilo", 40000),
    new Tarjeta("NO VAYAS A ATENDER CUANDO EL DEMONIO LLAMA", "https://i.scdn.co/image/ab67616d0000b27306ad26d22030b8c988a10f20", "LALI \nFormato: CD MUSICAL", 25000),
    new Tarjeta("Scarlet", "https://upload.wikimedia.org/wikipedia/en/0/0b/Doja_Cat_-_Scarlet.png", "Doja Cat \nFormato: CD MUSICAL", 25000),
    new Tarjeta("Oktubre", "https://akamai.sscdn.co/uploadfile/letras/albuns/6/3/e/4/2183691712605514.jpg", " Patricio Rey y sus Redonditos de Ricota \nFormato:CD MUSICAL", 30000),
    new Tarjeta("Baño María", "https://i.scdn.co/image/ab67616d0000b27340349e09eb8cc8cac72f7959", " CA7RIEL & Paco Amoroso \nFormato: CD MUSICAL", 30000)
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
        botonAdd.classList.add("btn-primary")
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
}
const persona1 = new Persona("Carlos", "Millahueque", 48866750, "299-5242501", "charly_maniac83@gmail.com")

let tbody = document.querySelector("#tbody")
let subtotal=document.querySelector("#subtotal")
//carrito de comprasss
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

        //total
        subtotal.textContent = persona1.subTotal()
        console.log(persona1.subTotal())

        tr.append(td1, td2, td3)
        tbody.appendChild(tr)


    })
}


