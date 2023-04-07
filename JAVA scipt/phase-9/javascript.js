function strtok(str1, str2, n) {
    var words = str1.split(str2);
    return words[n-1]
}
var str1 = "Ronert ;Dupont ; Amiens ; 80000";
var str2 = ";";
var n= 3;

//Rrnvoie "Amiens"
var result = strtok(str1, str2, n)
//affiche "amiens"
alert(result);