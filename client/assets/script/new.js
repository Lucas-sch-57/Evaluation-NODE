import { JeuxService } from './jeux.service.js';
import { Jeux } from './jeux.class.js';


const btnAdd = document.querySelector('#add-button');
let alertSuccess = document.querySelector('#alert-success');
let alertError = document.querySelector('#alert-error');

let service = new JeuxService();
btnAdd.addEventListener('click', () => {
    add()
})

function add() {
    let titre = document.querySelector('#titre');
    let genre = document.querySelector('#genre');
    let plateforme = document.querySelector('#plateforme');
    let prix = document.querySelector('#prix');
    const regex = /^[0-9]+([,.][0-9]+)?$/;
    if (!regex.test(prix.value)) {
        alertError.innerHTML = 'Le prix doit contenir uniquement des nombres'
        alertError.classList.toggle('d-none');
        return;
    }
    let newJeu = new Jeux('', titre.value, genre.value, plateforme.value, prix.value)

    let promise = service.add(newJeu);

    promise.then((status) => {
        titre.value = '';
        genre.value = '';
        plateforme.value = '';
        prix.value = '';
        if (status == 200) {
            alertSuccess.classList.toggle('d-none');
            setTimeout(() => {
                alertSuccess.classList.toggle('d-none')
            }, 5000)
        }
    })
}