import { Jeux } from "./jeux.class.js";
import { JeuxService } from "./jeux.service.js";

let gameTitle = document.querySelector('#game-title');
let modifBtn = document.querySelector('#modif-button');
let id = window.location.hash.substring(1);
let service = new JeuxService();
let jeu = service.get(id)
let titre = document.querySelector('#titre');
let genre = document.querySelector('#genre');
let prix = document.querySelector('#prix')
let alertSuccess = document.querySelector('#alert-success')


jeu.then((response) => {
    gameTitle.innerHTML = response.nom;
    titre.value = response.nom;
    genre.value = response.genre;
    prix.value = response.prix;
    plateforme.value = response.plateforme;
    modifBtn.addEventListener('click', () => {
        let modifStatus = service.modif(new Jeux(response._id, titre.value, genre.value, plateforme.value, prix.value))
        modifStatus.then((status) => {
            if (status == 200) {
                alertSuccess.classList.toggle('d-none')
                setTimeout(() => {
                    alertSuccess.classList.toggle('d-none');
                }, 5000)
            }
        })
    })
})