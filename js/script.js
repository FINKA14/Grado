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
                        <p>Quiero felicitarte de todo corazón por este gran logro en tu vida.</p>
                        <p>Tu dedicación y esfuerzo han dado frutos, y este es solo el comienzo de todos los éxitos que te esperan.</p>
                        <p>De verdad lamento no poder estado ahi contigo.</p>
                        <p>Pero por medio de este pequeño mensaje quiero felicitarte y recordarte que este chico aun te quiere un monton y aun le importas.</p>
                        <p>Sueño contigo aun cada noche y te pienso a diario deseando que te encuentres bien y te este llendo bien.</p>
                        <p>Se que tal vez no confies en mi y no creas en lo que te digo, me lo merezco.</p>
                        <p>Y aunque sea asi, queria decirte esto, por que aun sigues siendo una persona importante para mí.</p>
                        <p>Siempre voy a estar orgulloso de ti y de todos tus logros, te deseo que tu camino este lleno de muchos exitos y oportunidades.</p>
                        <p>Espero sigas siendo esa maravillosa persona que siempre has sido.</p>
                        <p>Deseo un dia poder volver a reencontrarme contigo.</p>
                        <p>Te deseo siempre lo mejor y que hoy sea un dia maravilloso para ti y la pases excelente.</p>
                        <p>Con mucho amor Andres Felipe 💜🦥</p>
                        `
        }, 550);
    }, 200);


});
