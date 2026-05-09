function abrirSobre(){

    const sobre = document.querySelector(".sobre");
    const corazon = document.querySelector(".corazon");
    const texto = document.querySelector(".texto");
    const corazones = document.querySelector(".corazones");

    sobre.classList.toggle("abierto");

    if(sobre.classList.contains("abierto")){
        corazon.style.opacity = "0";
        texto.style.opacity = "0";
    }else{
        corazon.style.opacity = "1";
        texto.style.opacity = "1";
        resetPaginas();
    }
    if(sobre.classList.contains("abierto")){
    document.querySelector(".izquierda").style.display = "none";
}
}

/* CAMBIAR PAGINAS */
let paginaActual = 0;

function siguientePagina(){

    const paginas = document.querySelectorAll(".pagina");
    const btnSig = document.querySelector(".derecha");
    const btnAnt = document.querySelector(".izquierda");
    const sobre = document.querySelector(".sobre");

    if(paginaActual < paginas.length - 1){

        paginas[paginaActual].classList.remove("activa");
        paginaActual++;
        paginas[paginaActual].classList.add("activa");
    }

    // mostrar botón atrás
    if(paginaActual > 0){
        btnAnt.style.display = "block";
    }

    // si es última página
    if(paginaActual === paginas.length - 1){

        btnSig.textContent = "Final 💖";

        // cerrar sobre después de 1.5s
        setTimeout(()=>{
            cerrarSobre();
        },1500);
    }
}

function paginaAnterior(){

    const paginas = document.querySelectorAll(".pagina");
    const btnSig = document.querySelector(".derecha");
    const btnAnt = document.querySelector(".izquierda");

    if(paginaActual > 0){

        paginas[paginaActual].classList.remove("activa");
        paginaActual--;
        paginas[paginaActual].classList.add("activa");
    }

    btnSig.textContent = "Siguiente →";

    // ocultar botón atrás si es la primera
    if(paginaActual === 0){
        btnAnt.style.display = "none";
    }
}

/* cerrar sobre automáticamente */

function cerrarSobre(){

    const sobre = document.querySelector(".sobre");
    const corazon = document.querySelector(".corazon");
    const texto = document.querySelector(".texto");

    sobre.classList.remove("abierto");

    corazon.style.opacity = "1";
    texto.style.opacity = "0";

    resetPaginas();
}

/* reset */

function resetPaginas(){

    const paginas = document.querySelectorAll(".pagina");
    const btnSig = document.querySelector(".derecha");
    const btnAnt = document.querySelector(".izquierda");

    paginaActual = 0;

    paginas.forEach(p => p.classList.remove("activa"));
    paginas[0].classList.add("activa");

    btnSig.textContent = "Siguiente →";

    // 👇 ocultar botón atrás SIEMPRE al inicio
    btnAnt.style.display = "none";
}
setInterval(() => {

    const sobre = document.querySelector(".sobre");

    if(!sobre.classList.contains("abierto")) return;

    const corazones = document.querySelector(".corazones");

    const corazon = document.createElement("div");
    corazon.classList.add("corazon-fondo");
    corazon.innerHTML = "💖";

    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = (20 + Math.random() * 40) + "px";
    corazon.style.animationDuration = (4 + Math.random() * 4) + "s";

    corazones.appendChild(corazon);

    setTimeout(() => corazon.remove(), 8000);

}, 300);