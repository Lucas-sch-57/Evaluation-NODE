import { Jeux } from './jeux.class.js'
export class JeuxService {

    /**
     * Récupère l'ensemble des jeux pour les affichés dans le DOM
     * @param {DOM} domElement - Element ciblé pour intégrer les éléments récupérés
     * @returns {Array<Jeux>} 
     */
    getAll(domElement) {
        let myHeaders = new Headers();
        let url = '/jeux';
        let options = {
            method: 'GET',
            headers: myHeaders,
        }

        return fetch(url, options).then((res) => {
            if (res.ok) {
                return res.json()
            }
        }).then((response) => {
            response.map((jeu) => {
                let titre = jeu.nom;
                let plateform = jeu.plateforme
                let genre = jeu.genre;
                let prix = jeu.prix;

                let gameRow = document.createElement('tr');
                let titreCol = document.createElement('td');
                let plateformCol = document.createElement('td');
                let genreCol = document.createElement('td');
                let prixCol = document.createElement('td');
                let details = document.createElement('td');
                let del = document.createElement('td');
                let detailsButton = document.createElement('a');
                let deleteButton = document.createElement('a');
                let deleteIcon = document.createElement('i')

                del.appendChild(deleteButton);
                deleteIcon.classList.add('fas', 'fa-trash');
                deleteButton.classList.add('btn', 'btn-danger');
                deleteButton.appendChild(deleteIcon)

                deleteButton.addEventListener('click', () => {
                    this.remove(jeu._id);
                })

                let detailsIcon = document.createElement('i');
                detailsIcon.classList.add('fas', 'fa-info');
                detailsButton.setAttribute('href', './pages/details.html#' + jeu._id)
                detailsButton.classList.add('btn', 'btn-outline-warning')

                detailsButton.appendChild(detailsIcon)
                details.appendChild(detailsButton);

                gameRow.appendChild(titreCol);
                gameRow.appendChild(plateformCol);
                gameRow.appendChild(genreCol);
                gameRow.appendChild(prixCol);
                gameRow.appendChild(details);
                gameRow.appendChild(del);

                titreCol.innerHTML = titre;
                plateformCol.innerHTML = plateform;
                genreCol.innerHTML = genre;
                prixCol.innerHTML = prix;

                domElement.appendChild(gameRow);

            })
            return response;
        })
            .catch((error) => {
                console.log(`Erreur : ${error}`)
            })

    }
    /**
     * Récupère un jeu selon l'id passé en paramètre
     * @param {String} id - Id du jeu à affiché
     */
    get(id) {
        let myHeaders = new Headers()
        let url = '/jeux/' + id;
        let options = {
            method: 'GET',
            headers: myHeaders
        }

        return fetch(url, options).then((res) => {
            if (res.ok) {
                return res.json()
            }
        }).then((response) => {
            let jeu = new Jeux(response._id, response.nom, response.genre, response.plateforme, response.prix)
            return jeu;
        })
            .catch((error) => {
                console.log(`Erreur : ${error}`)
            })

    }
    /**
     * Modifie un jeu
     * @param {String} jeu 
     */
    modif(jeu) {
        let url = '/jeux/' + jeu._id;
        let options = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(jeu)
        }

        return fetch(url, options).then((res) => {
            if (res.ok) {
                return res.status
            }
        })
            .catch((error) => {
                console.log(`Erreur : ${error}`);
            })
    }
    /**
     * Ajoute un jeu aux données
     * @param {String} jeu 
     * @returns 
     */
    add(jeu) {
        let url = '/jeux';
        let options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(jeu)
        };

        return fetch(url, options)
            .then((res) => {
                if (res.ok) {
                    return res.status;
                }
            })
            .catch((error) => {
                console.log(`Error : ${error}`);
            });
    }
    remove(id) {
        let url = '/jeux/' + id;
        let myHeaders = new Headers();
        let options = {
            method: 'DELETE',
            headers: myHeaders
        };

        return fetch(url, options)
            .then((res) => {
                if (res.ok) {
                    console.log('Réussi');
                    location.reload();
                }
            })
            .catch((error) => {
                console.log(`Error : ${error}`);
            });
    }

}