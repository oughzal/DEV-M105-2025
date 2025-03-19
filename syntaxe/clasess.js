class Livre {
    constructor(titre, genre, auteur, lu = false, dateDeLecture = new Date()) {
        this.titre = titre;
        this.genre = genre;
        this.auteur = auteur;
        this.lu = lu;
        this.dateDeLecture = dateDeLecture instanceof Date || dateDeLecture === null ? dateDeLecture : null;
    }

    marquerCommeLu() {
        this.lu = true;
        this.dateDeLecture = new Date();
    }
}


let livre = new Livre('Harry Potter', 'Fantasy', 'J.K. Rowling');
console.log(livre);