// ### Créez une class [Lieu] avec une propriété nom(string) et personnes(array vide).
// ### Puis créez des instances de [Lieu]: MolenGeek, Snack et Maison
// ### Puis créez une class [Personne] avec une propriété nom(string), prenom(string), argent(number) et une methode seDeplacer(), cette methode permet de vous déplacer dans les differents lieux en faisant appel à la méthode embarquer() du bus.
// ### Puis créez une instance de votre personnage.
// ### Créez une class [Bus] avec une propriéte personnes(array vide), une propriéte caisse(number) et une methode embarquer() (qui sera appelée dans la méthode seDeplacer() de la personne) qui va vérifier si vous possedez l'argent, si oui, il le déduit de votre argent, et le rajoute à sa caisse, et le personnage rentre dans le bus. Le bus cout 2.80.



// ### Créez une instance de Bus. 
// ### 8h00 Vous êtes à la maison.
// ### 8h30 Vous prennez le bus vers MolenGeek.
// ### 8h45 Vous êtes à MolenGeek.
// ### 12h45 Vous sortez de MolenGeek, vous prenez le bus pour aller au snack.
// ### 13h30 Vous sortez du snack, et vous rentrer pied à MolenGeek pour digérer.
// ### 17h10 Vous sortez de MolenGeek, vous prenez le bus pour rentrer chez vous.

class Lieu {
    constructor(nom, personnes) {
        this.nom = nom,
        this.personnes = personnes
    }
}

let molengeek = new Lieu ("Molengeek", []);
let snack = new Lieu ("Snack", []);
let maison = new Lieu ("Maison", []);

class Personne {
    constructor(nom, prenom, argent) {
        this.nom = nom,
        this.prenom = prenom,
        this.argent = argent
    }
    se_Deplacer(depart, arrivée, locomotion, gars){
        stib.embarquer(depart,arrivée, gars)
    }
}

let junior = new Personne ("Silva","Junior",42);

class Bus {
    constructor(personnes, caisse){
        this.personnes = personnes,
        this.caisse = caisse
    }
    embarquer(depart, arrivée, gars){
        if (gars.argent >= 2.80) {
            gars.argent = gars.argent - 2.80;
            this.caisse = this.caisse + 2.80;
            depart.personnes.splice(depart.personnes.indexOf(gars),1);
            arrivée.personnes.push(gars);
        } else {
            console.log("vous n'avez pas assez d'argent pour le bus");
        }
    }
}

let stib = new Bus([],50);

maison.personnes.push(junior);
console.log(maison.personnes);
junior.se_Deplacer(maison, molengeek, stib, junior);
console.log(molengeek.personnes);
junior.se_Deplacer(molengeek, snack, stib, junior);
console.log(snack.personnes);
snack.personnes.splice(snack.personnes.indexOf(junior),1);
molengeek.personnes.push(junior);
console.log(molengeek.personnes)
junior.se_Deplacer(molengeek,maison,stib,junior);
console.log(maison.personnes);
console.log(junior.argent.toFixed(2));
console.log(stib.caisse.toFixed(2));