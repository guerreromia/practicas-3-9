//Nav

//Carrusel

//Tarjetas
//miranda
//contenedor

let botonAdd= document.createElement("button")
botonAdd.classList.add("btn")
botonAdd.classList.add("btn-primary")
botonAdd.classList.add("mx-1")
botonAdd.textContent="Comprar"

let contenedor = document.getElementById("contenedor")
contenedor.style.margin = "25px"
contenedor.style.display="flex"

//cartas
let card1 = document.createElement("div")
card1.classList.add("card")
card1.style.width = "300px"
card1.style.margin="1rem"

// //imagen del album
let imagenMiranda = document.createElement("img")
imagenMiranda.src =("https://i.scdn.co/image/ab67616d0000b2735195219d777c551f280d95d5")
imagenMiranda.classList.add("card-img-top")
imagenMiranda.alt = "imagen del album de miranda!"
card1.appendChild(imagenMiranda)

// //cuerpo
let cardBody1 = document.createElement("div")
cardBody1.classList.add("card-body")
card1.appendChild(cardBody1)

//titulo del album
let tituloMiranda = document.createElement("h5")
tituloMiranda.textContent = "El Disco De Tu Corazón"
cardBody1.appendChild(tituloMiranda)

//texto del album
let descripcionMiranda = document.createElement("p")
descripcionMiranda.classList.add("parrafo")
descripcionMiranda.textContent = " Miranda!\nFormato: CD MUSICAL \nPrecio: 25.000$"
cardBody1.appendChild(descripcionMiranda)
cardBody1.appendChild(botonAdd)
card1.appendChild(cardBody1)


contenedor.appendChild(card1)

//tyler
//cartas
let card2 = document.createElement("div")
card2.classList.add("card")
card2.style.width = "300px"
card2.style.margin="1rem"

// //imagen del album
let imagenTyler = document.createElement("img")
imagenTyler.src =("https://upload.wikimedia.org/wikipedia/en/b/bb/Tyler%2C_the_Creator_-_Don%27t_Tap_the_Glass.png")
imagenTyler.classList.add("card-img-top")
imagenTyler.alt = "imagen del album de tyler"
card2.appendChild(imagenTyler)

// //cuerpo
let cardBody2 = document.createElement("div")
cardBody2.classList.add("card-body")
card2.appendChild(cardBody2)

//titulo del album
let tituloTyler = document.createElement("h5")
tituloTyler.textContent = "Don't Tap the Glass"
cardBody2.appendChild(tituloTyler)

//texto del album
let descripcionTyler = document.createElement("p")
descripcionTyler.classList.add("parrafo")
descripcionTyler.textContent = " Tyler The Creator \nFormato: CD MUSICAL \nPrecio: 35.000$"
cardBody2.appendChild(descripcionTyler)
cardBody2.appendChild(botonAdd)
card2.appendChild(cardBody2)


contenedor.appendChild(card2)

//dillom
//cartas
let card3 = document.createElement("div")
card3.classList.add("card")
card3.style.width = "300px"
card3.style.margin="1rem"

// //imagen del album
let imagenDillom = document.createElement("img")
imagenDillom.src =("https://images.genius.com/5bdb578d1dad91f670071fa9c30603ed.1000x1000x1.png")
imagenDillom.classList.add("card-img-top")
imagenDillom.alt = "dillom album"
card3.appendChild(imagenDillom)

// //cuerpo
let cardBody3 = document.createElement("div")
cardBody3.classList.add("card-body")
card3.appendChild(cardBody3)

//titulo del album
let tituloDillom = document.createElement("h5")
tituloDillom.textContent = "Por Cesárea"
cardBody3.appendChild(tituloDillom)

//texto del album
let descripcionDillom = document.createElement("p")
descripcionDillom.classList.add("parrafo")
descripcionDillom.textContent = " Dillom \nFormato: Vinilo \nPrecio: 40.000$"
cardBody3.appendChild(descripcionDillom)
cardBody3.appendChild(botonAdd)
card3.appendChild(cardBody3)


contenedor.appendChild(card3)

//kendrick
let card4 = document.createElement("div")
card4.classList.add("card")
card4.style.width = "300px"
card4.style.margin="1rem"

// //imagen del album
let imagenKendrick = document.createElement("img")
imagenKendrick.src =("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb5WDlRTHe1EdYmifyyyTqTmMaSsVdd9EVvQ&s")
imagenKendrick.classList.add("card-img-top")
imagenKendrick.alt = "kendrick album"
card4.appendChild(imagenKendrick)

// //cuerpo
let cardBody4 = document.createElement("div")
cardBody4.classList.add("card-body")
card4.appendChild(cardBody4)

//titulo del album
let tituloKendrick = document.createElement("h5")
tituloKendrick.textContent = "DAMN."
cardBody4.appendChild(tituloKendrick)

//texto del album
let descripcionKendrick= document.createElement("p")
descripcionKendrick.classList.add("parrafo")
descripcionKendrick.textContent = " Kendrick Lamar \nFormato: CD MUSICAL \nPrecio: 20.000$"
cardBody4.appendChild(descripcionKendrick)
cardBody4.appendChild(botonAdd)
card4.appendChild(cardBody4)


contenedor.appendChild(card4)

// pink floyd
let card5 = document.createElement("div")
card5.classList.add("card")
card5.style.width = "300px"
card5.style.margin="1rem"

// //imagen del album
let imagenPink = document.createElement("img")
imagenPink.src =("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKqByhEFZaHf3OoW7oYwdsUQxjSbxn6SOquQ&s")
imagenPink.classList.add("card-img-top")
imagenPink.alt = "kendrick album"
card5.appendChild(imagenPink)

// //cuerpo
let cardBody5 = document.createElement("div")
cardBody5.classList.add("card-body")
card5.appendChild(cardBody5)

//titulo del album
let tituloPink = document.createElement("h5")
tituloPink.textContent = "The Dark Side of the Moon"
cardBody5.appendChild(tituloPink)

//texto del album
let descripcionPink= document.createElement("p")
descripcionPink.classList.add("parrafo")
descripcionPink.textContent = " Pink Floyd \nFormato: Vinilo \nPrecio: 100.000$"
cardBody5.appendChild(descripcionPink)
cardBody5.appendChild(botonAdd)
card5.appendChild(cardBody5)


contenedor.appendChild(card5)

//joji
let card6 = document.createElement("div")
card6.classList.add("card")
card6.style.width = "300px"
card6.style.margin="1rem"

// //imagen del album
let imagenJoji = document.createElement("img")
imagenJoji.src =("https://i.scdn.co/image/ab67616d0000b27360ba1d6104d0475c7555a6b2")
imagenJoji.classList.add("card-img-top")
imagenJoji.alt = "kendrick album"
card6.appendChild(imagenJoji)

// //cuerpo
let cardBody6 = document.createElement("div")
cardBody6.classList.add("card-body")
card6.appendChild(cardBody6)

//titulo del album
let tituloJoji = document.createElement("h5")
tituloJoji.textContent = "Ballads 1"
cardBody6.appendChild(tituloJoji)

//texto del album
let descripcionJoji= document.createElement("p")
descripcionJoji.classList.add("parrafo")
descripcionJoji.textContent = " Joji \nFormato: CD MUSICAL\nPrecio: 25.000$"
cardBody6.appendChild(descripcionJoji)
cardBody6.appendChild(botonAdd)
card6.appendChild(cardBody6)

contenedor.appendChild(card6)

/* botonAdd.addEventListener("click",function(){
    persona1.agregarProducto(p)
}) */