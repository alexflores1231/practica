const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");

document.addEventListener("click", (e) => {
    if (e.target.matches(".sobre") || 
        e.target.matches(".solapa-derecha") ||
        e.target.matches(".solapa-izquierda") ||
        e.target.matches(".corazon")) {
        envoltura.classList.toggle("abierto");
      
    } else if (e.target.matches(".sobre *")) {
        if (!carta.classList.contains("abierta")) {
            carta.classList.add("mostrar-carta");

            setTimeout(() => {
                carta.classList.remove("mostrar-carta");
                carta.classList.add("abierta");
            }, 500);
            envoltura.classList.add("desactivar-sobre")
        } else {
            carta.classList.add("cerrando-carta");
            envoltura.classList.remove("desactivar-sobre");

            setTimeout(() => {
                carta.classList.remove("cerrando-carta")
                carta.classList.remove("abierta")
            }, 500);
        }

    } 
})
document.getElementById("corazon1").addEventListener("click", () => {
  const carta = document.getElementById("cartaId");
  
  const fotos = document.getElementById("fotos");
  const audio = document.getElementById("musicaFondo");

  // Oculta la carta
  carta.style.display = "none";
  

  // Muestra las fotos con clase animada
  fotos.classList.add("mostrar");
   // Muestra la pregunta
    pregunta.classList.remove("oculto");
  // Reproducir música
  audio.play().catch(err => {
    console.warn("Reproducción bloqueada por el navegador:", err);
  });
});

