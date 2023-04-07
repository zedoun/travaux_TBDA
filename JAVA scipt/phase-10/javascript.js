let taille = parseInt(prompt("Entrez la taille du tableau:"));
let tableau = [];

for (let i =0; i<taille; i++){
    let valeur = prompt("Entrezla valeur numéro" + (i+1) + " : ");
    tableau.push(valeur);
}
document.write("le contenu du tableau est:"+ "<br>");
document.write(tableau);