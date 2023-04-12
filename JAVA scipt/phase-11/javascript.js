let valeurs = [];
let nombrevaleur = 0;
let totale = 0;
let moyenne = 0;

while (true) {
    let valeur = window.prompt("Entrez une valeur numérique(0 pour arréter):");
    if (valeurs === null) {
        break; //l'user a annulé la saisie
    }
    valeur = parseFloat(valeur);
    if (isNaN(valeur)) {
        window.alert("la valeur saisie est incorrect !");
        continue; //on passe à l'autre valeur
    }
    if (valeur === 0) {
        break; //la fin de la saisie
    }
    valeurs.push(valeur);
    totale += valeur;
    nombrevaleur++;

}
if (nombrevaleur > 0) {
    moyenne = totale / nombrevaleur;
}
window.alert("Nombre de valeurs saisie :" + nombrevaleur + "\ntotale des valeurs : " + totale + "\nmoyenne des valeurs :" + moyenne);







