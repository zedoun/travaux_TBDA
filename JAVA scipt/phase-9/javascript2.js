//Définir la fonction produit
function produit(x,y){
    return x*y;
}
//Définir la fonction afficheimg
function AfficheImg(imagepath){
    const img = new Image();
    img.src = imagepath;
    document.body.appendChild(img);
}

//demader pour saisir 2 nombre
const x = parseFloat(prompt("entrez le premier nombre:"));
const y = parseFloat(prompt("entrez le deuxième nombre:"));

// utiliser les fonctions
const resultatProduit = produit ( x,y);

const resultatDiv = document.createElement("div");
resultatDiv.innerHTML =`le produit de ${x} et ${y} est : ${resultatProduit}`
document.body.appendChild(resultatDiv);
const imagepath = "https://ncode.amorce.org/ressources/Pool/TB_DEV/WEB_Javascript_BASES/images/papillon.jpg";
AfficheImg(imagepath);