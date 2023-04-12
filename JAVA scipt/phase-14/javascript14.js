console.log("Connecté !");
var magicNumber =Math.floor(Math.random() * 100) + 1;

function verif() {
    var userNumber = parseInt(document.getElementById("textBox1").value);

    if (userNumber === magicNumber) {
        document.getElementById("label1").innerHTML = "bravo, une nombre magique!";
    }
    else if (userNumber > magicNumber) {
        document.getElementById("label1").innerHTML = "trop grand!! reessayer.";
    }
    else {
        document.getElementById("label1").innerHTML = "trop petit!! reessayer.";
    }

}

document.getElementById("button1").addEventListener("click", verif);



