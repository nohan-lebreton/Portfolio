const projects = [
    {
        title: "Analyse des algorithmes de trie",
        text: "Ce projet vise à implémenter des algorithmes de tri et à les visualiser en action, tout en évaluant leur efficacité en fonction du désordre des données en entrée.",
        imageSrc: "assets/img/pgVisual.png",
        linkGit: "https://github.com/nohan-lebreton/AnalysisSortAlgo",
        linkWeb: null
    },
    {
        title: "Card title 2",
        text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        imageSrc: "assets/img/pgVisual.png",
        linkGit: "https://github.com/example2",
        linkWeb: "https://example.com"
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

        const linkGit = document.createElement("a");
        linkGit.classList.add("btn", "btn-dark");
        linkGit.href = project.linkGit;
        linkGit.innerHTML = '<i class="bi bi-github"></i> GitHub';

        cardBody.appendChild(title);
        cardBody.appendChild(text);
        cardBody.appendChild(linkGit);

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

// Démarre le défilement automatique initialement
startScrolling();
