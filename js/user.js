const toggleUserPassword =
    document.getElementById("toggleUserPassword");

const userPassword =
    document.getElementById("userPassword");

toggleUserPassword.addEventListener("click", () => {

    if (userPassword.type === "password") {

        userPassword.type = "text";

    } else {

        userPassword.type = "password";

    }

});