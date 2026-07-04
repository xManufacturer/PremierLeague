const seccionEquipos = document.getElementById("equipos");

equipos.forEach(equipo => {

    const tarjeta = document.createElement("div");
    const imagen = document.createElement("img");

    imagen.src = equipo.escudo;
    imagen.alt = equipo.nombre;

    tarjeta.appendChild(imagen);
    seccionEquipos.appendChild(tarjeta);
    tarjeta.classList.add("equipo");

    tarjeta.addEventListener("click", () => {
        window.location.href = "equipo.html?id=" + equipo.id;
    });
});