function palindromo(){

    var oracion = "A Mercedes ese de crema";
    var oracionArray = oracion.split(" ");
    //Oracion sin espacios "space"
    var space = oracionArray.join("")
    var arraySpace = space.split("");
    var arrayPalindromo = arraySpace.reverse();
    //Oracion en reversa sin espacios "palindromo"
    var palindromo = arrayPalindromo.join("");

    if(space.toLowerCase() == palindromo.toLowerCase())
    {
    	console.log("es un palindromo");

    } else {
        
    	console.log("No es un palindromo");
    }

}

