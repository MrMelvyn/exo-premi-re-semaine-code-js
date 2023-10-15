class Pokemon {
    constructor(name, attack, defense, healthpv, luckProbability) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.healthpv = healthpv;
        this.luckProbability = luckProbability;
    }

    isLucky() {
        return Math.random() < this.luckProbability;
    }

    attackOpponent(opponentPokemon) {
        if (this.isLucky()) {
            let damage = this.attack - opponentPokemon.defense;
            if (damage > 0) {
                opponentPokemon.healthpv -= damage;
            }
            console.log(
                this.name, "attaque", opponentPokemon.name, "et lui inflige",
                damage, "dégâts. ", opponentPokemon.name, "a maintenant",
                opponentPokemon.healthpv, "points de vie."
            );
        } else {
            console.log(this.name, "loupe l'attaque sur", opponentPokemon.name);
        }
    }
}

let pokemonA = new Pokemon("Pikachu", 40, 20, 100, 0.8);
let pokemonB = new Pokemon("Bulbasaur", 35, 25, 120, 0.7);

while (pokemonA.healthpv > 0 && pokemonB.healthpv > 0) {
    pokemonA.attackOpponent(pokemonB);
    if (pokemonB.healthpv <= 0) {
        console.log(pokemonB.name, "est K.O. ", pokemonA.name, "gagne le match.");
        break;
    }

    pokemonB.attackOpponent(pokemonA);
    if (pokemonA.healthpv <= 0) {
        console.log(pokemonA.name, "est K.O. ", pokemonB.name, "gagne le match.");
        break;
    }
}