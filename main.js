// ### Créez une class [Lieu] avec une propriété nom(string) et personnes(array vide).
// ### Puis créez des instances de [Lieu]: MolenGeek, Snack et Maison
// ### Puis créez une class [Personne] avec une propriété nom(string), prenom(string), argent(number) et une methode seDeplacer(), cette methode permet de vous déplacer dans les differents lieux en faisant appel à la méthode embarquer() du bus.
// ### Puis créez une instance de votre personnage.
// ### Créez une class [Bus] avec une propriéte personnes(array vide), une propriéte caisse(number) et une methode embarquer() (qui sera appelée dans la méthode seDeplacer() de la personne) qui va vérifier si vous possedez l'argent, si oui, il le déduit de votre argent, et le rajoute à sa caisse, et le personnage rentre dans le bus. Le bus cout 2.80.


// ### Faites un console.log() de votre argent, ainsi que l'argent du Bus
class Lieu {
    constructor (nom, personnes) {
        this.nom = nom,
        this.personnes = personnes
    }
}

let lieux1 = new Lieu ("Molengeek", []);
let lieux2 = new Lieu ("Snack", []);
let lieux3 = new Lieu ("Maison", []);

class Personne {
    constructor (nom, prenom, argent) {
        this.nom = nom,
        this.prenom = prenom,
        this.argent = argent,
        this.seDeplacer = (bus) => {
            bus.embarquer()
        }
    }
}

let charles = new Personne ("de Lalaing", "charles", 42);

class Bus {
    constructor (personnes, caisse) {
        this.personnes = personnes,
        this.caisse = caisse,
        this.embarquer = () => {
            if (charles.argent >= 2.80) {
                charles.argent = charles.argent - 2.80;
                this.caisse = this.caisse + 2.80;
            } else {
                return console.log("nope tu rentres ap")
            }
        }
    }
}

let bus1 = new Bus ([],0);

charles.seDeplacer(bus1);
charles.seDeplacer(bus1);
charles.seDeplacer(bus1);


console.log(Math.round(charles.argent))
console.log(Math.round(bus1.caisse))


// ### Créez une instance de Bus. 
// ### 8h00 Vous êtes à la maison.
// ### 8h30 Vous prennez le bus vers MolenGeek.
// ### 8h45 Vous êtes à MolenGeek.
// ### 12h45 Vous sortez de MolenGeek, vous prenez le bus pour aller au snack.
// ### 13h30 Vous sortez du snack, et vous rentrer pied à MolenGeek pour digérer.
// ### 17h10 Vous sortez de MolenGeek, vous prenez le bus pour rentrer chez vous.