let prenom = 'John'                                 // Je présente tous les éléments dont on aura besoin 
let sante_mentale = 10
let listes_music = ['Anissa : Wejdene',
                     'SDM freestyle 8 ocho',
                     'Diddi Trix Fondu',
                      '4 juin 2022',
                       
                ]
let nb_feu_rouge = 30
let nb_changement = 0

function musique_en_cours() {                // Paramètre permettant de choisir la fonction aléatoirement
    nb_feu_rouge--;

    const radio = Math.floor(Math.random() * 4 );

    if (listes_music[radio] == listes_music[0]){
        sante_mentale -= 1,
        nb_changement += 1
    }

    return radio
}

while (nb_feu_rouge > 0 && sante_mentale > 0){   // Cette boucle definie toute la partie et elle se termine quand soit le nb de feu rouge est a ou alors sa sente mentale
    const musique = musique_en_cours();
    console.log(`Musique qui passe actuellement à la radio ) ${musique}. Feu rouge restant ${nb_feu_rouge} feux a parcourir.` ) // Affiche la musique en cours et le nb de feu rouge restant
}

if (nb_feu_rouge > 0) {            // Affiche dans la console si on a atteint la destination en vie 
    console.log(`Bien arrivée, il vous aura fallu ${nb_changement} changement(s) pour arriver chez vous. La sante mentale est de ${sante_mentale}.`)
}

if (sante_mentale == 0) {          // Affiche si on a pas survecu au trajet 
    console.log(`Explosion!`)
}