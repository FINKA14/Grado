document.getElementById("up").addEventListener("click", () => {
    document.getElementById("up").classList.add("activado");
});

document.getElementById("content").addEventListener("click", () => {
    document.getElementById("down").classList.add("openDown");
    document.getElementById("left").classList.add("openLeft");
    document.getElementById("right").classList.add("openRight");
    document.getElementById("content").innerHTML = "";

    setTimeout(() => {
        document.getElementById("letter").classList.add("open");
        setTimeout(() => {
            document.getElementById("modal").classList.add("open-modal");
            
            document.getElementById("modal").innerHTML = `
                        <h1>Felicidades Cachetona</h1>
                        <p>Hoy quiero felicitarte de todo corazón por este gran logro en tu vida</p>
                        <p>Tu dedicación y esfuerzo han dado frutos, y este es solo el comienzo de todos los éxitos que te esperan.</p>
                        <p>De verdad lamento nuevamente no poder ser yo personalemente quien te entregue este pequeño detalle.</p>
                        <p>Por medio de él quiero felicitarte y recordarte que tu niño aun te ama un monton.</p>
                        <p>No romperé mi promesa, y no es solo una promesa, es una elección.</p>
                        <p>Elijo quedarme y no rendirme. Elijo creer que nuestros caminos se cruzaran de nuevo algun día.</p>
                        <p>Estaré aqui para tí siempre.</p>
                        <p>Te deseo siempre lo mejor y que hoy pases un excelente y alegre día.</p>
                        <p>Con mucho amor 💜🦥</p>
                        `
        }, 550);
    }, 200);


});
