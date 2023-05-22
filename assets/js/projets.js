const projects = [
    {
        title: "Card title 1",
        text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        imageSrc: "assets/img/pgVisual.png",
        link: "https://test"
    },
    {
        title: "Card title 2",
        text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        imageSrc: "assets/img/pgVisual.png",
        link: "https://test"
    },
    // Ajoutez d'autres objets de projet si nécessaire
];

const cardContainer = document.getElementById("card-container");

// Fonction pour générer les cartes de projet
function generateProjectCards(projects) {
    cardContainer.innerHTML = ""; // Efface le contenu du conteneur de cartes

    projects.forEach((project) => {
        const cardCol = document.createElement("div");
        cardCol.classList.add("col");

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

        const link = document.createElement("a");
        link.classList.add("btn", "btn-primary");
        link.href = project.link;
        link.textContent = "Read More";

        cardBody.appendChild(title);
        cardBody.appendChild(text);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        cardCol.appendChild(card);

        cardContainer.appendChild(cardCol);
    });
}

// Génère les cartes de projet initialement
generateProjectCards(projects);

// Gère le changement de saisie dans l'input
document.getElementById("search-input").addEventListener("input", function () {
    const searchInput = this.value.toLowerCase();

    const filteredProjects = projects.filter(function (project) {
        return project.title.toLowerCase().includes(searchInput);
    });

    generateProjectCards(filteredProjects);
});
