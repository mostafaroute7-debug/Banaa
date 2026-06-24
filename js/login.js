const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {
        password.type = "text";

        togglePassword.classList.remove("bi-eye");
        togglePassword.classList.add("bi-eye-slash");
    }
    else {
        password.type = "password";

        togglePassword.classList.remove("bi-eye-slash");
        togglePassword.classList.add("bi-eye");
    }

});