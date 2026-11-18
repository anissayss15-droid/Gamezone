
document.getElementById("formConnexion").onsubmit = function(event) {

    event.preventDefault();

    document.getElementById("message").textContent =
        "Formulaire de connexion envoyé !";
};
