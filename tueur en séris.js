let nom_survivants = [        // Je fais la liste des survivants
    'Matthieu', 
    'Guillaume' , 
    'Hugo',
    'Mohamed',
    'Melvyn',
 ];

let competence = [            // Je fais un tableau avec les compétences des survivants
    'Sapologie',
    'Permifié',
    'Grand',
    'BDG',
    'geek',
 ]

 

let tableaumorts = ""       // Je fais un tableau vide pour les défunts, que j'utiliserai plus tard

class Personnage {         // Je crée la classe de nos personnage ci-dessous
    constructor(nom, pointsdevie, hit, attaque_prob, death_hit_prob) {
        this.nom = nom
        this.hp = pointsdevie
        this.degats = hit
        this.attaque = attaque_prob
        this.contrecoup = death_hit_prob
    }

    attaquer(target){        //On retrouve ici la fonction qui permet d'attaquer et de rater son attaque, et ce que ca va afficher dans la console
        if (Math.random() < this.attaque) {
            console.log(`${this.nom} attaque ${target.nom} lui inflige ${this.degats} nb de dégâts.`)
            target.hp -= this.degats;
        }
        else {
            console.log(`${this.nom} loupe son attaque sur ${target.nom}.`);
        }
    }

    encaisserDegats(hit) {      // c'est la fonction qui permet d'encaisser les dégâts, de  pouvoir gagner et de contre attaquer, et voir l'affichage dans la console
        if (Math.random() < this.contrecoup) {
            console.log(`${this.nom} contre-attaque et encaisse ${hit} nb de degâts.`);
            this.hp -= hit;
        }
        else {
            console.log(`${this.nom} encaisse ${hit} nb de degâts.`);
        }

        if (this.hp <= 0) {
            console.log(`${this.nom} a été battu.`);
        }
    }
}

class Mechant {      // ici c'est la class qui va créer le tueur 
    constructor(nom_mechant, pointsdevie, hit, attaque_prob, death_hit_prob) {
        this.nom = nom_mechant
        this.hp = pointsdevie
        this.degats = hit
        this.attaque = attaque_prob
        this.contrecoup = death_hit_prob
    }

    attaquer(target){
        if (Math.random() < this.attaque) {
            console.log(`${this.nom} attaque ${target.nom} et lui inflige ${this.degats} nb de degâts.`)
            target.hp -= this.degats;
        }
        else {
            console.log(`${this.nom} a louper son attaque sur ${target.nom}.`);
        }
    }

    encaisserDegats(hit) {
        if (Math.random() < this.contrecoup) {
            console.log(`${this.nom} contre-attaque et encaisse ${hit} nb de degâts.`);
            this.hp -= hit;
        }
        else {
            console.log(`${this.nom} encaisse ${hit} nb de degâts.`);
        }

        if (this.hp <= 0) {
            console.log(`${this.nom} a été battu.`);
        }
    }
}

let survivants = new Personnage(nom_survivants[Math.floor(Math.random()*5)] + competence[Math.floor(Math.random() * 5)], 100, 20, 0.9, 0.5); // ici les 5 personnage principaux de notre histoire
let survivants2 = new Personnage(nom_survivants[Math.floor(Math.random()*5)] + competence[Math.floor(Math.random() * 5)], 100, 20, 0.7, 0.4);
let survivants3 = new Personnage(nom_survivants[Math.floor(Math.random()*5)] + competence[Math.floor(Math.random() * 5)], 100, 20, 0.7, 0.4);
let survivants4 = new Personnage(nom_survivants[Math.floor(Math.random()*5)] + competence[Math.floor(Math.random() * 5)], 100, 20, 0.8, 0.4);
let survivants5 = new Personnage(nom_survivants[Math.floor(Math.random()*5)] + competence[Math.floor(Math.random() * 5)], 100, 20, 0.6, 0.3);

let tableausurvivants = [survivants, survivants2, survivants3, survivants5, survivants5];

let i = 0;

let tueur = new Mechant("Jason meurtrier", 100, 70, 0.8, 0.4);     // ici c'est le meurtrier grace a la class tueur au dessus 

let tour = 1;                     // ici on lance le jeu 
while (tableausurvivants[i%tableausurvivants.length].hp > 0 && tueur.hp > 0) {       // Cette boucle permet créer le nombre de tour qu'il faudra pour que le jeu se termine
    console.log(`Tour ${tour}:`);

    tableausurvivants[i%tableausurvivants.length].attaquer(tueur);

    if (tueur.hp <= 0) {   
        console.log(`${tableausurvivants[i%tableausurvivants.length].nom} à battu Jason.`)
        break;
    }

    tueur.attaquer(tableausurvivants[i%tableausurvivants.length]);

    if (tableausurvivants[i%tableausurvivants.length].hp <= 0) {
        console.log(`${tueur.nom} à battu ${tableausurvivants[i%tableausurvivants.length].nom}`)
        tableaumorts += tableausurvivants[i%tableausurvivants.length].nom + ", ";
        break;
    }

    console.log(`${tableausurvivants[i%tableausurvivants.length].nom} : ${tableausurvivants[i%tableausurvivants.length].hp} hp`);
    console.log(`${tueur.nom} : ${tueur.hp} hp`);
    tour++;
    i++;
}

if (tableausurvivants[i%tableausurvivants.length].hp <= 0) {         //Ces IF et ELSE permettent d'afficher dans la console la fin de la partie et qui a gagne ou un potentiel match nul
    console.log("Les survivants ont étés battu par le meurtrier. Le tueur gagne !");
    console.log("Les prochains survivants sont mort suite à l'esclandre : " + tableaumorts)
  } else if (tueur.hp <= 0) {
    console.log("Le meurtrier à été battue par un des survivants! Les survivants gagnent !");
    console.log("Les prochain survivants sont morts pendants l'esclandre : " + tableaumorts)
  } else {
    console.log("L'esclandre finit par un match nul. Les survivants et le meurtrier sont à bout d'énergie!");
    console.log("Les procahin survivants sont morts pendant l'esclandre : " + tableaumorts)
  }