const text = document.getElementById("text").value;
var element = document.getElementById("button").value;
 
function validation() 
{
    if(text.length < 1){
        alert("veuillez entrer des caracteres  !!");
        return false;
    }else 
    {
        alert("vous avez saisie :" + text);
    }
};







