var leTitre = document.querySelector("header"); // on récupère un identifiant pour le header
var leContenu = document.querySelectorAll("section"); // on récupère un identifiant sous forme de tableau pour les sections

console.log(leTitre.dataset.titre); // on affiche le contenu de l'attribut data-titre
console.log(leContenu[0].dataset.sujet); // on affiche le contenu de l'attribut data-sujet
console.log(leContenu[0].dataset.contenu); // on affiche le contenu de l'attribut data-contenu

leTitre.innerHTML = `<h1>${leTitre.dataset.titre}</h1>`;
leContenu[0].innerHTML = `<p>${leContenu[0].dataset.sujet}</p>`;
leContenu[0].innerHTML += `<p class="content">${leContenu[0].dataset.contenu}</p>`;
leContenu[1].innerHTML = `<p>${leContenu[0].dataset.sujet}</p>`;
leContenu[1].innerHTML += `<p class="content">${leContenu[1].dataset.content}</p>`;
leContenu[1].innerHTML += `<p class="directed">${leContenu[1].dataset.subject}</p>`;
