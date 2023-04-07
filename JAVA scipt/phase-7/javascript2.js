var nb_1 = window.prompt("entrez nu 1° nombre entier : ");
nb_1 = parseInt(nb_1);

var nb_2 = window.prompt("entrez nu 2° nombre entier : ");
nb_2 = parseInt(nb_2);

var op = window.prompt("entrez nu  opérateur :" + "\n" + "1 = addition" + "\n" + "2 = soustraction" + "\n" + "3 = multiplication" + "\n" + "4 = division");
op = parseInt(op);

var res;


if (op < 1 || op > 4) {
    alert("Erreur : VEUILLEZ CHOIISIR UN CHIFFRE DE 1 A 4 !");
    Location.reload()
}
else {
    if (op == 1) {
        op = nb_1 + nb_2
        alert("vous avez fait cette opération: " + nb_1 + "+" + nb_2 + "\n " + "le résultat:" + op);
        Location.reload()
    }
    else if (op == 2) {
        op = nb_1 - nb_2
        alert("vous avez fait cette opération: " + nb_1 + "-" + nb_2 + "\n " + "le résultat:" + op);
        Location.reload()
    }
    else if (op == 3) {
        op = nb_1 * nb_2
        alert("vous avez fait cette opération: " + nb_1 + "*" + nb_2 + "\n " + "le résultat:" + op);
        Location.reload()
    }
    else if (op == 4) {
        if (nb_1 == 0 || nb_2 == 0) {

            alert("on ne peut pas divisé par 0  !!!!")
            Location.reload()
        }



        else {
            op = nb_1 / nb_2
            alert("vous avez fait cette opération: " + nb_1 + "/" + nb_2 + "\n " + "le résultat:" + op);
            Location.reload()
        }
    }
}
