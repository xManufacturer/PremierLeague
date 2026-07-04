const parametros = new URLSearchParams(window.location.search);
const idEquipo = parametros.get("id");

const equipo = equipos.find(e => e.id === idEquipo);

const claveStorage = "alineacion_" + equipo.id;

const posiciones = formaciones[equipo.formacion];

const campo = document.getElementById("campo");

campo.classList.add("formacion-" + equipo.formacion);

const selectores = [];

const actualizarPosiciones = [];

posiciones.forEach(posicion => {
    const caja = document.createElement("div");
    const foto = document.createElement("img");
    const nombre = document.createElement("h3");
    const selector = document.createElement("select");
    selector.style.display = "none";
    selectores.push(selector);
    const suplentes = document.createElement("ul");
    const posicionBase = posicion.replace(/[0-9]/, "");
    const jugadoresPosicion = equipo.plantilla.filter(jugador => jugador.posiciones.includes(posicionBase));
    jugadoresPosicion.forEach(jugador => {
        const opcion = document.createElement("option");
        opcion.value = jugador.nombre;
        opcion.textContent = jugador.nombre;
        selector.appendChild(opcion);
    });

    function actualizarPosicion() {
        const jugador = equipo.plantilla.find(j => j.nombre === selector.value);
        foto.src = jugador.foto;
        foto.alt = jugador.nombre;
        nombre.textContent = jugador.nombre;
        selector.value = jugador.nombre;
        suplentes.innerHTML = "";
        jugadoresPosicion.forEach(jugador => {
            const esTitular = selectores.some(selector =>
                selector.value === jugador.nombre
            );
            if (jugador.nombre !== selector.value && !esTitular) {
                const li = document.createElement("li");
                li.textContent = jugador.nombre;
                suplentes.appendChild(li);
            }
        });
    }

    actualizarPosiciones.push(actualizarPosicion);
    actualizarPosicion();

    nombre.addEventListener("click", () => {
        nombre.style.display = "none";
        selector.style.display = "block";
        selector.focus();
    });

    selector.addEventListener("change", () => {
        actualizarPosiciones.forEach(actualizar => actualizar());
        actualizarSelectores();
        guardarAlineacion();
        selector.style.display = "none";
        nombre.style.display = "block";
    });

    selector.addEventListener("blur", () => {
        selector.style.display = "none";
        nombre.style.display = "block";
    });

    campo.appendChild(caja);
    caja.classList.add("posicion");
    caja.appendChild(foto);
    caja.appendChild(nombre);
    caja.appendChild(selector);
    caja.appendChild(suplentes);
    caja.dataset.posicion = posicion;
});

const alineacionGuardada = JSON.parse(localStorage.getItem(claveStorage));

if (alineacionGuardada) {
    selectores.forEach(selector => {
        const posicion = selector.parentElement.dataset.posicion;
        if (alineacionGuardada[posicion]) {
            selector.value = alineacionGuardada[posicion];
        }
    });

    actualizarPosiciones.forEach(actualizar => actualizar());

    actualizarSelectores();

}

actualizarSelectores();

function actualizarSelectores () {
    selectores.forEach(selectorActual => {
        Array.from(selectorActual.options).forEach(opcion => {
            opcion.hidden = false;
            selectores.forEach(otroSelector => {
                if (otroSelector !== selectorActual && otroSelector.value === opcion.value) {
                    opcion.hidden = true;
                }
            });
        });
    });
}

function guardarAlineacion() {
    const alineacion = {};
    selectores.forEach(selector => {
        const posicion = selector.parentElement.dataset.posicion;
        alineacion[posicion] = selector.value;
    });
    localStorage.setItem(claveStorage, JSON.stringify(alineacion));
}

document.getElementById("escudoEquipo").src = equipo.escudo;

document.getElementById("nombreEquipo").textContent = equipo.nombre;

document.getElementById("entrenador").textContent = equipo.entrenador;

document.getElementById("formacion").textContent = equipo.formacion;

document.getElementById("plantilla").textContent = equipo.plantilla.length;

document.title = equipo.nombre;