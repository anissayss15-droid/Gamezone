
document.getElementById("formulaire").onsubmit = function(event) {

    event.preventDefault();

    let mdp = document.getElementById("mdp").value;
    let confirmation = document.getElementById("confirmation").value;

    if (mdp !== confirmation) {
        document.getElementById("message").textContent =
            "Les mots de passe sont différents !";
    } else {
        document.getElementById("message").textContent =
            "Formulaire vérifié !";
    }
};
