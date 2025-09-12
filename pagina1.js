const conteiner = document.querySelectorAll('.Conteiner');
conteiner.forEach(element => {
    element.classList.add('bg-dark');
    element.classList.add('text-white');
});

//Nav

//Carrusel



//Tarjetas


//footer
const footer = document.getElementById('footer');
footer.classList.add('bg-dark');
footer.classList.add('text-white');
footer.classList.add('text-center');


const listaLinks = document.querySelectorAll(".nav-link");
listaLinks.forEach(element => {
    element.classList.add("text-white");
    console.log(element);
});

//contador
const cont = document.querySelectorAll(".container.my-5");
cont.forEach(element => {
    element.classList.add('bg-dark');
});

function animateCounter(counter) {
    const target = +counter.getAttribute("data-target");
    const duration = +counter.getAttribute("data-duration") || 2000;
    const stepTime = Math.abs(Math.floor(duration / target));

    let current = 0;
    const increment = target / (duration / stepTime);

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            counter.textContent = target;
            clearInterval(timer);
        } else {
            counter.textContent = Math.floor(current);
        }
    }, stepTime);
}

// Detecta cuando la sección entra en pantalla
function initCounters() {
    const counters = document.querySelectorAll(".counter");
    counters.forEach(counter => {
        animateCounter(counter);
    });
}

// Ejecutar cuando se cargue la página
window.addEventListener("load", initCounters);