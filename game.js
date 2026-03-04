const toggleBtn = document.getElementById("toggleBtn");
const menu = document.getElementById("menu");
const searchInput = document.getElementById("search");
const select = document.getElementById("liste");
const nameHTML = document.getElementById("name");
const genreHTML = document.getElementById("genre");
const ageHTML = document.getElementById("age");
const classeHTML = document.getElementById("classe");
const anneeHTML = document.getElementById("annee");
const statutHTML = document.getElementById("statut");
const importanceHTML = document.getElementById("importance_classe");
const intelligenceHTML = document.getElementById("intelligence");
const capa_physiqueHTML = document.getElementById("capa_physique");
const arcHTML = document.getElementById("arc_apparition");
const personnages = [

    // ===== Élèves diplômés =====
    { id: 1, nom: "Horikita Manabu", genre: "M", age: 20, classe: "A_diplome", annee: 5, statut: "Élève_diplome", importance_classe: 10, intelligence: 9, capa_physique: 10, arc_apparition: "Festival sportif" },
    { id: 2, nom: "Tachibana Akane", genre: "F", age: 20, classe: "A_diplome", annee: 5, statut: "Élève_diplome", importance_classe: 8, intelligence: 7, capa_physique: null, arc_apparition: "Festival sportif" },
    { id: 3, nom: "Nagumo Miyabi", genre: "M", age: 19, classe: "A_diplome", annee: 4, statut: "Élève_diplome", importance_classe: 10, intelligence: 9, capa_physique: null, arc_apparition: "Camp d’entraînement mixte" },
    { id: 4, nom: "Asahina Nazuna", genre: "F", age: 19, classe: "A_diplome", annee: 4, statut: "Élève_diplome", importance_classe: 7, intelligence: 6, capa_physique: null, arc_apparition: "Camp d’entraînement mixte" },
    { id: 5, nom: "Kiryuin Fuka", genre: "F", age: 19, classe: "B_diplome", annee: 4, statut: "Élève_diplome", importance_classe: 6, intelligence: 8, capa_physique: null, arc_apparition: "Camp d’entraînement mixte" },
    { id: 6, nom: "Kiriyama Ikuto", genre: "M", age: 19, classe: "B_diplome", annee: 4, statut: "Élève_diplome", importance_classe: 9, intelligence: 7, capa_physique: null, arc_apparition: "Camp d’entraînement mixte" },

    // ===== Classe A – 3e année =====
    { id: 7, nom: "Hasebe Haruka", genre: "F", age: 18, classe: "A", annee: 3, statut: "Élève", importance_classe: 3, intelligence: 6, capa_physique: null, arc_apparition: "Paper Shuffle" },
    { id: 8, nom: "Hirata Yosuke", genre: "M", age: 18, classe: "A", annee: 3, statut: "Élève", importance_classe: 5, intelligence: 8, capa_physique: null, arc_apparition: "Affaire de l’agression" },
    { id: 9, nom: "Hondo Ryotaro", genre: "M", age: 18, classe: "A", annee: 3, statut: "Élève", importance_classe: 1, intelligence: 3, capa_physique: null, arc_apparition: "Rentrée scolaire et système S" },
    { id: 10, nom: "Horikita Suzune", genre: "F", age: 18, classe: "A", annee: 3, statut: "Élève", importance_classe: 5, intelligence: 8, capa_physique: null, arc_apparition: "Rentrée scolaire et système S" },
    { id: 11, nom: "Karuizawa Kei", genre: "F", age: 18, classe: "A", annee: 3, statut: "Élève", importance_classe: 5, intelligence: 6, capa_physique: null, arc_apparition: "Examen spécial du bateau de croisière" },
    { id: 12, nom: "Ijuin Wataru", genre: "M", age: 18, classe: "A", annee: 3, statut: "Élève", importance_classe: 1, intelligence: 5, capa_physique: null, arc_apparition: "Paper Shuffle" },
    { id: 13, nom: "Ike Kanji", genre: "M", age: 18, classe: "A", annee: 3, statut: "Élève", importance_classe: 1, intelligence: 3, capa_physique: null, arc_apparition: "Rentrée scolaire et système S" },
    { id: 14, nom: "Koenji Rokusuke", genre: "M", age: 18, classe: "A", annee: 3, statut: "Élève", importance_classe: 2, intelligence: 10, capa_physique: null, arc_apparition: "Examen spécial de l’île déserte" },
    { id: 15, nom: "Kushida Kikyo", genre: "F", age: 18, classe: "A", annee: 3, statut: "Élève", importance_classe: 4, intelligence: 7, capa_physique: null, arc_apparition: "Paper Shuffle" },
    { id: 16, nom: "Matsushita Chiaki", genre: "F", age: 18, classe: "A", annee: 3, statut: "Élève", importance_classe: 3, intelligence: 6, capa_physique: null, arc_apparition: "Paper Shuffle" },
    { id: 17, nom: "Mei-Yu Wang", genre: "F", age: 18, classe: "A", annee: 3, statut: "Élève", importance_classe: 3, intelligence: 6, capa_physique: null, arc_apparition: "Festival sportif" },
    { id: 18, nom: "Miyake Akito", genre: "M", age: 18, classe: "A", annee: 3, statut: "Élève", importance_classe: 3, intelligence: 7, capa_physique: null, arc_apparition: "Paper Shuffle" },
    { id: 19, nom: "Miyamoto Soshi", genre: "M", age: 18, classe: "A", annee: 3, statut: "Élève", importance_classe: 1, intelligence: 5, capa_physique: null, arc_apparition: "Rentrée scolaire et système S" },
    { id: 20, nom: "Onodera Kayano", genre: "F", age: 18, classe: "A", annee: 3, statut: "Élève", importance_classe: 2, intelligence: 5, capa_physique: null, arc_apparition: "Festival sportif" },
    { id: 21, nom: "Sato Maya", genre: "F", age: 18, classe: "A", annee: 3, statut: "Élève", importance_classe: 3, intelligence: 6, capa_physique: null, arc_apparition: "Examen spécial du bateau de croisière" },
    { id: 22, nom: "Shinohara Satsuki", genre: "F", age: 18, classe: "A", annee: 3, statut: "Élève", importance_classe: 3, intelligence: 6, capa_physique: null, arc_apparition: "Rentrée scolaire et système S" },
    { id: 23, nom: "Sotomura Hideo", genre: "M", age: 18, classe: "A", annee: 3, statut: "Élève", importance_classe: 2, intelligence: 5, capa_physique: null, arc_apparition: "Rentrée scolaire et système S" },
    { id: 24, nom: "Sudo Ken", genre: "M", age: 18, classe: "A", annee: 3, statut: "Élève", importance_classe: 4, intelligence: 6, capa_physique: null, arc_apparition: "Affaire de l’agression" },
    { id: 25, nom: "Yukimura Teruhiko", genre: "M", age: 18, classe: "A", annee: 3, statut: "Élève", importance_classe: 4, intelligence: 8, capa_physique: null, arc_apparition: "Paper Shuffle" },

    // ===== Élèves licenciés =====
    { id: 26, nom: "Yamauchi Haruki", genre: "M", age: 18, classe: null, annee: 0, statut: "Élève_licencié", importance_classe: 1, intelligence: 2, capa_physique: null, arc_apparition: "Vote de classe" },
    { id: 27, nom: "Sakura Airi", genre: "F", age: 18, classe: null, annee: 0, statut: "Élève_licencié", importance_classe: 2, intelligence: 4, capa_physique: null, arc_apparition: "Vote de classe" },
    { id: 28, nom: "Maezono", genre: "F", age: 18, classe: null, annee: 0, statut: "Élève_licencié", importance_classe: 2, intelligence: 5, capa_physique: null, arc_apparition: "Examen du vote à l’unanimité" },

    // ===== Classe B – 3e année =====
    { id: 29, nom: "Albert Yamada", genre: "M", age: 18, classe: "B", annee: 3, statut: "Élève", importance_classe: 4, intelligence: 5, capa_physique: null, arc_apparition: "Festival sportif" },
    { id: 30, nom: "Ibuki Mio", genre: "F", age: 18, classe: "B", annee: 3, statut: "Élève", importance_classe: 4, intelligence: 6, capa_physique: null, arc_apparition: "Affaire de l’agression" },
    { id: 31, nom: "Ishizaki Daichi", genre: "M", age: 18, classe: "B", annee: 3, statut: "Élève", importance_classe: 3, intelligence: 3, capa_physique: null, arc_apparition: "Festival sportif" },
    { id: 32, nom: "Kaneda Satoru", genre: "M", age: 18, classe: "B", annee: 3, statut: "Élève", importance_classe: 2, intelligence: 5, capa_physique: null, arc_apparition: "Paper Shuffle" },
    { id: 33, nom: "Katsuragi Kohei", genre: "M", age: 18, classe: "B", annee: 3, statut: "Élève", importance_classe: 5, intelligence: 8, capa_physique: null, arc_apparition: "Paper Shuffle" },
    { id: 34, nom: "Komiya Kiogo", genre: "M", age: 18, classe: "B", annee: 3, statut: "Élève", importance_classe: 2, intelligence: 4, capa_physique: null, arc_apparition: "Festival sportif" },
    { id: 35, nom: "Kondo Reo", genre: "M", age: 18, classe: "B", annee: 3, statut: "Élève", importance_classe: 2, intelligence: 5, capa_physique: null, arc_apparition: "Festival sportif" },
    { id: 36, nom: "Morofuji Rika", genre: "F", age: 18, classe: "B", annee: 3, statut: "Élève", importance_classe: 1, intelligence: 5, capa_physique: null, arc_apparition: "Paper Shuffle" },
    { id: 37, nom: "Nishino Takeko", genre: "F", age: 18, classe: "B", annee: 3, statut: "Élève", importance_classe: 2, intelligence: 5, capa_physique: null, arc_apparition: "Festival sportif" },
    { id: 38, nom: "Ryuen Kakeru", genre: "M", age: 18, classe: "B", annee: 3, statut: "Élève", importance_classe: 5, intelligence: 8, capa_physique: null, arc_apparition: "Festival sportif" },
    { id: 39, nom: "Shiina Hiyori", genre: "F", age: 18, classe: "B", annee: 3, statut: "Élève", importance_classe: 3, intelligence: 7, capa_physique: null, arc_apparition: "Paper Shuffle" },
    { id: 40, nom: "Tokito Hiroya", genre: "M", age: 18, classe: "B", annee: 3, statut: "Élève", importance_classe: 3, intelligence: 6, capa_physique: null, arc_apparition: "Paper Shuffle" },

    { id: 41, nom: "Manabe Shiho", genre: "F", age: 18, classe: null, annee: 3, statut: "Élève_licencié", importance_classe: 2, intelligence: 4, capa_physique: null, arc_apparition: null },

        // ===== Classe C – 3e année (suite) =====
    { id: 42, nom: "Ayanokoji Kiyotaka", genre: "M", age: 18, classe: "C", annee: 3, statut: "Élève", importance_classe: 5, intelligence: 10, capa_physique: null, arc_apparition: "Rentrée scolaire et système S" },
    { id: 43, nom: "Hashimoto Masayoshi", genre: "M", age: 18, classe: "C", annee: 3, statut: "Élève", importance_classe: 4, intelligence: 8, capa_physique: null, arc_apparition: "Paper Shuffle" },
    { id: 45, nom: "Kito Hayato", genre: "M", age: 18, classe: "C", annee: 3, statut: "Élève", importance_classe: 3, intelligence: 6, capa_physique: null, arc_apparition: "Festival sportif" },
    { id: 46, nom: "Machida Koji", genre: "M", age: 18, classe: "C", annee: 3, statut: "Élève", importance_classe: 2, intelligence: 7, capa_physique: null, arc_apparition: "Paper Shuffle" },
    { id: 47, nom: "Morishita Ai", genre: "F", age: 18, classe: "C", annee: 3, statut: "Élève", importance_classe: 3, intelligence: 7, capa_physique: null, arc_apparition: "Paper Shuffle" },
    { id: 48, nom: "Sanada Kosei", genre: "M", age: 18, classe: "C", annee: 3, statut: "Élève", importance_classe: 2, intelligence: 6, capa_physique: null, arc_apparition: "Paper Shuffle" },
    { id: 49, nom: "Yamamura Miki", genre: "F", age: 18, classe: "C", annee: 3, statut: "Élève", importance_classe: 2, intelligence: 7, capa_physique: null, arc_apparition: "Festival sportif" },

    { id: 50, nom: "Sakayanagi Arisu", genre: "F", age: 18, classe: null, annee: 3, statut: "Élève_licencié", importance_classe: 5, intelligence: 9, capa_physique: null, arc_apparition: "Paper Shuffle" },
    { id: 44, nom: "Kamuro Masumi", genre: "F", age: 18, classe: "C", annee: 3, statut: "Élève_licencié", importance_classe: 3, intelligence: 7, capa_physique: null, arc_apparition: "Paper Shuffle" },
    { id: 51, nom: "Totsuka Yahiko", genre: "M", age: 18, classe: null, annee: 3, statut: "Élève_licencié", importance_classe: 4, intelligence: 7, capa_physique: null, arc_apparition: "Examen de survie et d élimination" },

    // ===== Classe D – 3e année =====
    //{ id: 52, nom: "Amikura Mako", genre: "F", age: 18, classe: "D", annee: 3, statut: "Élève", importance_classe: 2, intelligence:6, capa_physique: null, arc_apparition: "Festival sportif" },
    { id: 53, nom: "Ando Sayo", genre: "F", age: 18, classe: "D", annee: 3, statut: "Élève", importance_classe: 2, intelligence: 5, capa_physique: null, arc_apparition: "Festival sportif" },
    { id: 54, nom: "Hamaguchi Tetsuya", genre: "M", age: 18, classe: "D", annee: 3, statut: "Élève", importance_classe: 3, intelligence: 6, capa_physique: null, arc_apparition: "Festival sportif" },
    { id: 55, nom: "Himeno Yuki", genre: "F", age: 18, classe: "D", annee: 3, statut: "Élève", importance_classe: 2, intelligence: 5, capa_physique: null, arc_apparition: "Festival sportif" },
    { id: 56, nom: "Ichinose Honami", genre: "F", age: 18, classe: "D", annee: 3, statut: "Élève", importance_classe: 5, intelligence: 9, capa_physique: null, arc_apparition: "Examen spécial de l’île déserte" },
    { id: 57, nom: "Kanzaki Ryuji", genre: "M", age: 18, classe: "D", annee: 3, statut: "Élève", importance_classe: 4, intelligence: 7, capa_physique: null, arc_apparition: "Examen spécial de l’île déserte" },
    { id: 58, nom: "Kobashi Yume", genre: "F", age: 18, classe: "D", annee: 3, statut: "Élève", importance_classe: 3, intelligence: 6, capa_physique: null, arc_apparition: "Festival sportif" },
    { id: 59, nom: "Minamikata Kozue", genre: "F", age: 18, classe: "D", annee: 3, statut: "Élève", importance_classe: 2, intelligence: 5, capa_physique: null, arc_apparition: "Festival sportif" },
    { id: 60, nom: "Shibata So", genre: "M", age: 18, classe: "D", annee: 3, statut: "Élève", importance_classe: 3, intelligence: 6, capa_physique: null, arc_apparition: "Festival sportif" },
    { id: 61, nom: "Shiranami Chihiro", genre: "F", age: 18, classe: "D", annee: 3, statut: "Élève", importance_classe: 2, intelligence: 6, capa_physique: null, arc_apparition: "Festival sportif" },
    { id: 62, nom: "Watanabe Norihito", genre: "M", age: 18, classe: "D", annee: 3, statut: "Élève", importance_classe: 3, intelligence: 6, capa_physique: null, arc_apparition: "Festival sportif" },

    // ===== Nouveaux élèves – Year 2 =====
    { id: 63, nom: "Amasawa Ichika", genre: "F", age: 17, classe: "A", annee: 2, statut: "Élève", importance_classe: 4, intelligence: 10, capa_physique: null, arc_apparition: "Examen des partenaires" },
    { id: 64, nom: "Nanase Tsubasa", genre: "F", age: 17, classe: "D", annee: 2, statut: "Élève", importance_classe: 5, intelligence: 9, capa_physique: null, arc_apparition: "Examen des partenaires" },
    { id: 65, nom: "Hosen Kazuomi", genre: "M", age: 17, classe: "D", annee: 2, statut: "Élève", importance_classe: 4, intelligence: 7, capa_physique: null, arc_apparition: "Examen des partenaires" },
    { id: 66, nom: "Tsubaki Sakurako", genre: "F", age: 17, classe: "C", annee: 2, statut: "Élève", importance_classe: 4, intelligence: 6, capa_physique: null, arc_apparition: "Examen de l’île inhabitée (2e année)" },
    { id: 67, nom: "Utomiya Riku", genre: "M", age: 17, classe: "C", annee: 2, statut: "Élève", importance_classe: 4, intelligence: 6, capa_physique: null, arc_apparition: "Examen de l’île inhabitée (2e année)" },
    { id: 68, nom: "Ishigami Kyo", genre: "M", age: 17, classe: "A", annee: 2, statut: "Élève", importance_classe: 3, intelligence: 6, capa_physique: null, arc_apparition: "Examen du vote à l’unanimité" },

    { id: 69, nom: "Yagami Takuya", genre: "M", age: 17, classe: null, annee: 2, statut: "Élève_licencié", importance_classe: 2, intelligence: 8, capa_physique: null, arc_apparition: "Examen de survie et d élimination" },

    // ===== Professeurs / Direction =====
    { id: 70, nom: "Chabashira Sae", genre: "F", age: 29, classe: "A", annee: 3, statut: "Professeur", importance_classe: 5, intelligence: 8, capa_physique: null, arc_apparition: "Rentrée scolaire et système S" },
    { id: 71, nom: "Sakagami Kazuma", genre: "M", age: 40, classe: "B", annee: 3, statut: "Professeur", importance_classe: 5, intelligence: 7, capa_physique: null, arc_apparition: "Rentrée scolaire et système S" },
    { id: 72, nom: "Mashima Tomonari", genre: "M", age: 35, classe: "C", annee: 3, statut: "Professeur", importance_classe: 5, intelligence: 8, capa_physique: null, arc_apparition: "Rentrée scolaire et système S" },
    { id: 73, nom: "Hoshinomiya Chie", genre: "F", age: 29, classe: "D", annee: 3, statut: "Professeur", importance_classe: 5, intelligence: 8, capa_physique: null, arc_apparition: "Rentrée scolaire et système S" },
    { id: 74, nom: "Shiba Katsunori", genre: "M", age: 40, classe: "D", annee: 2, statut: "Professeur", importance_classe: 4, intelligence: 7, capa_physique: null, arc_apparition: "Examen des partenaires" },
    { id: 75, nom: "Sakayanagi Chairman", genre: "M", age: 40, classe: null, annee: null, statut: "Directeur", importance_classe: 0, intelligence: 9, capa_physique: null, arc_apparition: "Paper Shuffle" },

    // ===== White Room =====
    { id: 76, nom: "Ayanokoji Atsuomi", genre: "M", age: 50, classe: null, annee: null, statut: "White_Room", importance_classe: null, intelligence: 10, capa_physique: null, arc_apparition: "Recherche de X" },
    { id: 77, nom: "Tsukishiro", genre: "M", age: 40, classe: null, annee: null, statut: "White_Room", importance_classe: 0, intelligence: 9, capa_physique: null, arc_apparition: "Camp d entraînement mixte" },
    { id: 78, nom: "Yuki", genre: "F", age: 18, classe: null, annee: null, statut: "White_Room", importance_classe: null, intelligence: 9, capa_physique: null, arc_apparition: "Recherche de X" },
    { id: 79, nom: "Shiro", genre: "M", age: 18, classe: null, annee: null, statut: "White_Room", importance_classe: null, intelligence: 9, capa_physique: null, arc_apparition: "Recherche de X" },

    { id: 80, nom: "Mika", genre: "F", age: 40, classe: null, annee: null, statut: "serveuse", importance_classe: null, intelligence: 6, capa_physique: 3, arc_apparition: "Examen spécial du bateau de croisière" }
];

function setColor(element, isCorrect) {
    element.style.color = isCorrect ? "green" : "red";
}
function setColor2(element,perso_val,val_donnée) {
    if (perso_val == val_donnée) {
        element.style.color = "green";
    }
    else if (perso_val < val_donnée) {
        element.style.color = "blue";
    }
    else {
        element.style.color = "orange";
    }
}
function new_liste() {
    const n_selec = personnages.filter(p => !p_selec.includes(p.id)); //retire les perso déjà selec de la liste

    afficherListe(n_selec);
}
function afficherListe(liste) {
    select.innerHTML = "";

    liste.forEach(perso => {
        const option = document.createElement("option");
        option.value = perso.id;
        option.textContent = perso.nom;
        select.appendChild(option);
    });
}
afficherListe(personnages);


searchInput.addEventListener("input", () => { //quand l'utilisateur va marquer un nom dans la barre de recherche
    const valeur = searchInput.value.toLowerCase() ;

    const perso_possible = personnages.filter(p => //filtre en fonction des lettres émises par l'utilisateur
        p.nom.toLowerCase().includes(valeur) && !p_selec.includes(p.id)
    );

    afficherListe(perso_possible); //renvoie
});
searchInput.addEventListener("keydown", (e) => { //quand l'utilisateur appuie sur entrer
  if (e.key === "Enter") {
    e.preventDefault();

    const firstOption = select.options[0]; //selectionne le premier nom de la liste actuelle
    if (firstOption) {
      select.value = firstOption.value;


      const event = new Event("change");
      select.dispatchEvent(event); //renvoie
    }
  }
});

toggleBtn.addEventListener("click", () => { //fait appparaitre le menu
    menu.style.display = menu.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (e) => { //supprime le menu dès qu'un clique est effectué en dehors du menu
    if (!e.target.closest(".dropdown")) {
        menu.style.display = "none";
    }
});


let essaies = 0;
let personnage_daily = personnages[Math.floor(Math.random() * personnages.length)];
const p_selec = [];
select.addEventListener("change", () => {

    essaies++;

    const selectedId = parseInt(select.value); //recupère l'id
    if (!p_selec.includes(selectedId)) {
        p_selec.push(selectedId);

        new_liste()
    }
    const personnageChoisi = personnages.find(p => p.id === selectedId); //récupère toutes les infos du perso qui a l'id

    if (!personnageChoisi) return;

    toggleBtn.textContent = personnageChoisi.nom;
    menu.style.display = "none";

    if (personnage_daily.id === personnageChoisi.id) {
        window.alert(`Vous avez gagné en ${essaies} essais !`);
    }
    nameHTML.textContent = `Nom : ${personnageChoisi.nom}`;

    genreHTML.textContent = `Genre : ${personnageChoisi.genre}`;
    setColor(genreHTML, personnage_daily.genre === personnageChoisi.genre);

    ageHTML.textContent = `Age : ${personnageChoisi.age}`;
    setColor2(ageHTML, personnage_daily.age, personnageChoisi.age);

    classeHTML.textContent = `Classe : ${personnageChoisi.classe}`;
    setColor(classeHTML, personnage_daily.classe === personnageChoisi.classe);

    anneeHTML.textContent = `Année : ${personnageChoisi.annee}`;
    setColor2(anneeHTML, personnage_daily.annee,personnageChoisi.annee);

    statutHTML.textContent = `Statut : ${personnageChoisi.statut}`;
    setColor(statutHTML, personnage_daily.statut === personnageChoisi.statut);

    if (personnage_daily.statut !== personnageChoisi.statut) {
        const eleveTypes = ["Élève_diplome", "Élève_licencié", "Élève"];
        if (eleveTypes.includes(personnage_daily.statut) &&
            eleveTypes.includes(personnageChoisi.statut)) {
            statutHTML.style.color = "orange";
        }
    }

    importanceHTML.textContent = `Importance : ${personnageChoisi.importance_classe}`;
    setColor2(importanceHTML, personnage_daily.importance_classe, personnageChoisi.importance_classe);

    intelligenceHTML.textContent = `Intelligence : ${personnageChoisi.intelligence}`;
    setColor2(intelligenceHTML, personnage_daily.intelligence, personnageChoisi.intelligence);

    const clone = document.getElementById("currentCharacters").cloneNode(true);


document.getElementById("formerCharacters").prepend(clone);

    if (essaies > 15) {
        window.alert(`Vous n'avez pas réussi. Le personnage était ${personnage_daily.nom}`);
    }
});


