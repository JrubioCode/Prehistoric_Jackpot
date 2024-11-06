function comprobaciones(event) {
    // Prevenir el comportamiento por defecto del formulario
    event.preventDefault();
    if (comprobarUsuario() && comprobarPasswd()) {
        window.location.href = "./../index.html";
    }
}

// Comprobar usuario
function comprobarUsuario() {
    const usuario = document.getElementById("usuario").value;
    const comprobacion = document.getElementById("comprobacionUsuario");
  
    if (usuario.length > 0) {
        comprobacion.textContent = "Usuario disponible";
        comprobacion.style.color = "green";
        return true;
    } else {
        comprobacion.textContent = "Por favor, introduce un nombre de usuario";
        comprobacion.style.color = "red";
        return false;
    }
}

// Comprobar contraseña
function comprobarPasswd() {
    const passwd1 = document.getElementById("contraseña").value;
    const comprobacion = document.getElementById("comprobacionPasswd");
  
    if (passwd1.length >= 8) {
        comprobacion.textContent = "Longitud correcta";
        comprobacion.style.color = "green";
        return true;
    } else {
        comprobacion.textContent = "La contraseña debe tener al menos 8 caracteres";
        comprobacion.style.color = "red";
        return false;
    }
}