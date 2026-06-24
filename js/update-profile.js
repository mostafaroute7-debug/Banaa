const profileSelect = document.getElementById("profileSelect");

const generalSection = document.getElementById("generalSection");
const passwordSection = document.getElementById("passwordSection");

profileSelect.addEventListener("change", () => {

    if(profileSelect.value === "general"){

        generalSection.style.display = "block";
        passwordSection.style.display = "none";

    }else{

        generalSection.style.display = "none";
        passwordSection.style.display = "block";

    }

});