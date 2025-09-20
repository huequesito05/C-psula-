function guardarCarta() {
  const mensaje = document.getElementById('mensaje-futuro').value;
  if (mensaje) {
    localStorage.setItem('cartaFuturo', mensaje);
    alert('¡Tu carta se ha guardado para el futuro!');
  } else {
    alert('Por favor, escribe un mensaje antes de guardar.');
  }
}


function cargarCarta() {
  const mensajeGuardado = localStorage.getItem('cartaFuturo');
  if (mensajeGuardado) {
    document.getElementById('mensaje-futuro').value = mensajeGuardado;
  }
}

window.onload = function() { 
cargarCarta(); 
// Iniciar contador de tiempo 
iniciarContador(); 
}; 




(function () {
  
  var fechaCreacion = new Date(2025, 8, 1, 0, 0, 0);

  function actualizarContador() {
    var ahora = new Date();
    var diferencia = ahora.getTime() - fechaCreacion.getTime(); // ms

    if (isNaN(diferencia) || diferencia < 0) {
      diferencia = 0;
    }

    var segundos = Math.floor(diferencia / 1000);
    var minutos = Math.floor(segundos / 60);
    var horas = Math.floor(minutos / 60);
    var dias = Math.floor(horas / 24);

    var segundosRestantes = segundos % 60;
    var minutosRestantes = minutos % 60;
    var horasRestantes = horas % 24;

    var texto = dias + " días, " +
                horasRestantes + " horas, " +
                minutosRestantes + " min, " +
                segundosRestantes + " seg";

    var el = document.getElementById("contador");
    if (el) {
      
      el.textContent = texto;
    }
  }

  
  actualizarContador();
  setInterval(actualizarContador, 1000);
})();