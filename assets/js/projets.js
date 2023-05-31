const projects = [
    {
        title: "Analyse des algorithmes de trie",
        text: "En python implémenter des algorithmes de tri et à les visualiser en action, tout en évaluant leur efficacité en fonction du désordre des données en entrée.",
        imageSrc: "assets/img/pgVisual.png",
        linkGit: "https://github.com/nohan-lebreton/AnalysisSortAlgo",
        linkWeb: null
    },
    {
        title: "Jeu taquin",
        text: " Développé un jeu de taquin fonctionnel en utilisant Java, avec une version console et une version avec une interface graphique. Cela m'a permis de me familiariser avec le modèle MVC.",
        imageSrc: "assets/img/taquin.png",
        linkGit: "https://github.com/nohan-lebreton/Taquin",
        linkWeb: null
    },
    {
        title: "Mon portfolio",
        text: "Développé un site portfolio vitrine dans le but d'organiser mes projets et mettre en valeur mes compétences.",
        imageSrc: "assets/img/portfolio.png",
        linkGit: null,
        linkWeb: "https://nohan-lebreton.github.io/Portfolio/",
    },

 
    // Ajoutez d'autres objets de projet si nécessaire
];

const cardContainer = document.getElementById("card-container");

// Fonction pour générer les cartes de projet
function generateProjectCards(projects) {
    cardContainer.innerHTML = ""; // Efface le contenu du conteneur de cartes

    projects.forEach((project) => {
        const cardCol = document.createElement("div");
        cardCol.classList.add("col", "d-flex", "flex-nowrap");

        const card = document.createElement("div");
        card.classList.add("card");

        const image = document.createElement("img");
        image.classList.add("card-img-top");
        image.src = project.imageSrc;
        image.alt = "Card Image";

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = project.title;

        const text = document.createElement("p");
        text.classList.add("card-text");
        text.textContent = project.text;

        cardBody.appendChild(title);
        cardBody.appendChild(text);

        if (project.linkGit) {
            const linkGit = document.createElement("a");
            linkGit.classList.add("btn", "btn-dark");
            linkGit.href = project.linkGit;
            linkGit.innerHTML = '<i class="bi bi-github"></i> GitHub';

            cardBody.appendChild(linkGit);
        }

        if (project.linkWeb) {
            const linkWeb = document.createElement("a");
            linkWeb.classList.add("btn", "btn-primary");
            linkWeb.href = project.linkWeb;
            linkWeb.innerHTML = '<i class="bi bi-eye-fill"></i> En ligne';

            cardBody.appendChild(linkWeb);
        }
        
        card.appendChild(image);
        card.appendChild(cardBody);

        cardCol.appendChild(card);

        cardContainer.appendChild(cardCol);
    });
}


// Génère les cartes de projet initialement
generateProjectCards(projects);

let scrollInterval;
let scrollDirection = 1; // 1 pour défilement de droite à gauche, -1 pour défilement de gauche à droite

// Gère le défilement automatique des cartes
function startScrolling() {
    scrollInterval = setInterval(() => {
        cardContainer.scrollLeft += 2 * scrollDirection; // Ajustez la valeur de défilement selon vos besoins

        // Vérifie si le défilement atteint la fin ou le début du conteneur
        if (scrollDirection === 1 && cardContainer.scrollLeft >= (cardContainer.scrollWidth - cardContainer.offsetWidth)) {
            // Changement de direction de droite à gauche
            scrollDirection = -1;
        } else if (scrollDirection === -1 && cardContainer.scrollLeft <= 0) {
            // Changement de direction de gauche à droite
            scrollDirection = 1;
        }
    }, 10); // Ajustez l'intervalle de défilement selon vos besoins
}

// Arrête le défilement automatique des cartes
function stopScrolling() {
    clearInterval(scrollInterval);
}

// Démarre le défilement automatique lorsque la souris ne survole pas le conteneur
cardContainer.addEventListener("mouseenter", function () {
    stopScrolling();
});

// Arrête le défilement automatique lorsque la souris survole le conteneur
cardContainer.addEventListener("mouseleave", function () {
    startScrolling();
});

let touchStartX = 0; // Position de départ du toucher
let touchMoveX = 0; // Position actuelle du toucher

// Gère l'événement de toucher de l'écran
cardContainer.addEventListener("touchstart", function (event) {
    touchStartX = event.touches[0].clientX;
});

// Gère l'événement de déplacement du toucher
cardContainer.addEventListener("touchmove", function (event) {
    touchMoveX = event.touches[0].clientX;

    // Calcule la distance parcourue par le toucher
    const touchDistance = touchMoveX - touchStartX;

    // Vérifie si la distance parcourue dépasse une certaine valeur (par exemple, 20 pixels)
    if (Math.abs(touchDistance) > 20) {
        // Arrête le défilement automatique des cartes
        stopScrolling();
    }
});

// Gère l'événement de fin de toucher
cardContainer.addEventListener("touchend", function () {
    // Redémarre le défilement automatique des cartes
    startScrolling();
});

// Gère le changement de saisie dans l'input
document.getElementById("search-input").addEventListener("input", function () {
    const searchInput = this.value.toLowerCase();

    const filteredProjects = projects.filter(function (project) {
        return project.title.toLowerCase().includes(searchInput) + project.text.toLowerCase().includes(searchInput);
    });

    generateProjectCards(filteredProjects);
});