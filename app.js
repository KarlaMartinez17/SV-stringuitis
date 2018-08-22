//Escribe una función que tome un `string` y un `substring`y devuelvaverdadero si el `string` contiene el `substring`.String = //Leonora  ​|​ substring = Leo

function stringuitis (str, substring){
    var substring = substring.toLowerCase();
   return str.indexOf(substring) > -1;
  }
  
  console.log(stringuitis("leonora","LEO"));