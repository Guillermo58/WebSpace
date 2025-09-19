const audio = document.getElementById("audioFondo");
    function toggleAudio() {
      if(audio.paused){ audio.play(); } else { audio.pause(); }
    }

    // Crear estrellas
    for(let i=0; i<100; i++){
      const star = document.createElement("div");
      star.classList.add("estrella");
      star.style.left = Math.random() * window.innerWidth + "px";
      star.style.animationDuration = (5 + Math.random()*10) + "s";
      document.body.appendChild(star);
    }