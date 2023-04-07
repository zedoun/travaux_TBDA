var âge;

âge = prompt("entrez votre date de naissance : ");
âge = parseInt(âge);

if (âge >= 18)
     {
        alert("vous avez:" + âge + "ans" + "\n" + "vous etes majeur");
    }
    else {
        alert("vous avez:" + âge + "ans" + "\n" + "vous etes mineur");
    }

