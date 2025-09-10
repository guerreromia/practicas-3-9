//Nav

//Carrusel



//Tarjetas


//footer
const footer = document.getElementById('footer');
footer.classList.add('bg-dark');
footer.classList.add('text-white');
footer.classList.add('text-center');    


const listaLinks=document.querySelectorAll(".nav-link");
listaLinks.forEach(element => {
    element.classList.add("text-white");
    console.log(element);
});