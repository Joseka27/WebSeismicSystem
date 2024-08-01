document.addEventListener('DOMContentLoaded', (event) => {
    const registerModal = document.getElementById("register-modal");
    const registerContent = document.getElementById("register-content");
    const loginModal = document.getElementById("login-modal");
    const loginContent = document.getElementById("login-content");

    const loginBtn = document.getElementById("loginBtn");
    const regBtn = document.getElementById("RegBtn");
    const span = document.getElementsByClassName("cerrar-register")[0];
    const span2 = document.getElementsByClassName("cerrar-login")[0];
    const step1 = document.getElementById("step1");
    const step2 = document.getElementById("step2");
    const step3 = document.getElementById("step3");

    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    const subBtn = document.getElementById("subBtn");

    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const day = document.getElementById("day");
    const month = document.getElementById("month");
    const year = document.getElementById("year");
    const address = document.getElementById("address");

    const phone = document.getElementById("phone");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const passwordStrengthText = document.getElementById("passwordStrengthText");
    const passwordStrengthBar = document.getElementById("passwordStrengthBar");
    const confirmPassword = document.getElementById("confirmPassword");

    // Muestra el primer paso al inicio
    registerModal.style.display = "none";
    loginModal.style.display = "none";
    step1.style.display = "block";
    step2.style.display = "none";
    step3.style.display = "block";

    // Cuando el usuario hace clic en el botón, abre el modal
    regBtn.onclick = function() {
        registerModal.style.display = "flex"; // Asegúrate de usar "flex" para mantener el centrado
    }

    loginBtn.onclick = function() {
        loginModal.style.display = "flex"; // Asegúrate de usar "flex" para mantener el centrado
    }

    // Cuando el usuario hace clic en <span> (x), cierra el modal
    span.onclick = function() {
        registerModal.style.display = "none";
    }

    span2.onclick = function() {
        loginModal.style.display = "none";
    }

    // Cuando el usuario hace clic fuera del modal, cierra el modal
    window.onclick = function(event) {
        if (event.target == registerModal || event.target == loginModal) {
            registerModal.style.display = "none";
            loginModal.style.display = "none";
        }
    }

    // Navegar al siguiente paso con validación
    nextBtn.onclick = function() {
        if (validateStep1()) {
            step1.style.display = "none";
            step2.style.display = "block";
        }
    }

    // Navegar al paso anterior
    prevBtn.onclick = function() {
        step1.style.display = "block";
        step2.style.display = "none";
    }

    // Función para validar los datos del primer paso
    function validateStep1() {
        let isValid = true;

        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const day = document.getElementById("day").value.trim();
        const month = document.getElementById("month").value;
        const year = document.getElementById("year").value.trim();
        const address = document.getElementById("address").value.trim();

        if (!firstName) {
            isValid = false;
        }
        if (!lastName) {
            isValid = false;
        }
        if (!day || !month || !year) {
            isValid = false;
        }
        if (!address) {
            isValid = false;
        }
        return isValid;
    }

    // Función para actualizar la barra de fortaleza de la contraseña
    function updatePasswordStrength() {
        const passwordInput = password.value;
        let strength = 0;

        // Condiciones para determinar la fortaleza de la contraseña
        if (passwordInput.length >= 8) strength += 1;
        if (/[A-Z]/.test(passwordInput)) strength += 1;
        if (/[a-z]/.test(passwordInput)) strength += 1;
        if (/[0-9]/.test(passwordInput)) strength += 1;
        if (/[^A-Za-z0-9]/.test(passwordInput)) strength += 1;

        // Actualizar el texto de fortaleza
        if (strength === 1) {
            passwordStrengthText.textContent = "Muy débil";
            passwordStrengthBar.style.backgroundColor = "red";
        } else if (strength <= 2) {
            passwordStrengthText.textContent = "Débil";
            passwordStrengthBar.style.backgroundColor = "orange";
        } else if (strength <= 3) {
            passwordStrengthText.textContent = "Moderada";
            passwordStrengthBar.style.backgroundColor = "yellow";
        } else if (strength <= 4) {
            passwordStrengthText.textContent = "Fuerte";
            passwordStrengthBar.style.backgroundColor = "lightgreen";
        } else {
            passwordStrengthText.textContent = "Muy Fuerte";
            passwordStrengthBar.style.backgroundColor = "green";
        }

        // Verificar si la contraseña es suficientemente fuerte antes de permitir el registro
        if (strength < 4) {
            subBtn.disabled = true;
        } else {
            subBtn.disabled = false;
        }
    }

    // Actualizar la fortaleza de la contraseña en tiempo real
    password.addEventListener('input', updatePasswordStrength);

});
