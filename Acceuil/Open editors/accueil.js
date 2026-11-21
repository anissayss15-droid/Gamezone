
function connexion() {
    window.location.href = "../../connexion/connexion.html";
}

function inscription() {
    window.location.href = "../../Inscription/inscription.html";
}

function decouvrir() {
    window.location.href = "../../catalogue/catalogue.html";
}

function rechercher() {
    let champ = document.getElementById("recherche");

    if (champ === null) {
        alert("Le champ de recherche est introuvable.");
        return;
    }

    let jeu = champ.value.trim();

    if (jeu === "") {
        alert("Écris le nom d'un jeu !");
        return;
    }

    window.location.href =
        "../../catalogue/catalogue.html?recherche=" +
        encodeURIComponent(jeu);
}
