
function details(jeu) {

    let titre = "";
    let description = "";
    let conseil = "";

    if (jeu === "minecraft") {
        titre = "Minecraft";
        description = "Un jeu de construction, d'exploration et de créativité.";
        conseil = "Conseil : idéal pour développer l'imagination.";
    }

    if (jeu === "rocket") {
        titre = "Rocket League";
        description = "Un jeu qui mélange football et voitures.";
        conseil = "Conseil : parfait pour jouer en équipe.";
    }

    if (jeu === "fortnite") {
        titre = "Fortnite";
        description = "Un jeu multijoueur d'action et de survie.";
        conseil = "Conseil : attention aux combats et aux achats intégrés.";
    }

    if (jeu === "gta") {
        titre = "GTA VI";
        description = "Un jeu d'action dans un monde ouvert.";
        conseil = "Conseil : réservé à un public adulte.";
    }

    if (jeu === "roblox") {
        titre = "Roblox";
        description = "Une plateforme avec des jeux créés par les utilisateurs.";
        conseil = "Conseil : vérifier le contenu des jeux et les paramètres de sécurité.";
    }

    document.getElementById("titreFiche").textContent = titre;
    document.getElementById("texteFiche").textContent = description;
    document.getElementById("conseilFiche").textContent = conseil;

    document.getElementById("fiche").style.display = "block";

    document.getElementById("fiche").scrollIntoView();
}

function fermer() {
    document.getElementById("fiche").style.display = "none";
}



function accueil() {
    window.location.href = "accueil.html";
}

function connexion() {
    window.location.href = "../../connexion/connexion.html";
}

function inscription() {
    window.location.href = "../../inscription/inscription.html";
}

function decouvrir() {
    window.location.href = "../../catalogue/catalogue.html";
}


function decouvrir() {
    window.location.href = "../../catalogue/catalogue.html";
}

function rechercherJeu() {
    let jeu = document.getElementById("rechercheJeu").value;

    if (jeu.trim() === "") {
        alert("Écris le nom d'un jeu !");
    } else {
        window.location.href =
            "../../catalogue/catalogue.html?recherche="
            + encodeURIComponent(jeu.trim());
    }
}
