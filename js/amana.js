document.addEventListener("DOMContentLoaded", () => {

    const expandButtons =
        document.querySelectorAll(".expand-btn");

    expandButtons.forEach(button => {

        button.addEventListener("click", () => {

            const currentContainer =
                button.closest(".action-container");

            document
                .querySelectorAll(".action-container")
                .forEach(container => {

                    if (container !== currentContainer) {

                        container.classList.remove("active");

                    }

                });

            currentContainer.classList.toggle("active");

        });

    });

});