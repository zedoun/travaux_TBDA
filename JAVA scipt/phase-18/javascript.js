var age;
var j=0;  // (moin de 20ans)""
var a=0;   //entre 20 et 40"
var v=0;     //plus de 40ans
var personnes;
do {
 age = window.prompt("Entrez  l'age");
  if ( age <20) {
    j++;
    alert(personnes);
  }
  else if ((age >=20 ) && (personnes <=40)) {
    a++;
    alert (v); 
  }
}
while (personnes < 100);

 
window.alert("Il y a " + "" + j + "" + " jeunes\n " + "Il y a " + "" + a + "" + " adulte\n " + " Il y a " + " Il y a " + "" + v + "" +" vieux\n " + " dont "+ " 1 " + "" + " centenaire ");
