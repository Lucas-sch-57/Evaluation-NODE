export class Jeux {
    _id;
    nom;
    genre;
    plateforme;
    prix;

    constructor(id, nom, genre, plateforme, prix) {
        this._id = id;
        this.nom = nom;
        this.genre = genre;
        this.plateforme = plateforme;
        this.prix = prix;
    }

    get _id() {
        return this.__id;
    }
    set _id(val) {
        this.__id = val;
    }

    get nom() {
        return this.nom
    }

    set nom(val) {
        this.nom = val;
    }
    get genre() {
        return this.genre
    }

    set genre(val) {
        this.genre = val;
    }

    get plateforme() {
        return this.plateforme
    }

    set plateforme(val) {
        this.plateforme = val;
    }

    get prix() {
        return this.prix
    }

    set prix(val) {
        this.prix = val;
    }


}