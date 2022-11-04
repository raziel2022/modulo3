

export function validIP(value,$submit){
    var patronIp = new RegExp("^([0-9]{1,3}).([0-9]{1,3}).([0-9]{1,3}).([0-9]{1,3})$");//expresion regular para determinar numeros entre 0 y 0 en octectos con hasta 3 datos
    var valores;
    if(value.search(patronIp) !== 0) {//El método search() ejecuta una búsqueda que encaje entre una expresión regular y el objeto String desde el que se llama
    //   alert("Ip invalida")// de no cumplir con la expresion regular manda una alerta de Ip no vaidad
      return false
    }else{
      valores = value.split(".").map(function(item) {//de cumplir con el criterio anterior vamos a dividir (split) i guadarlo en un arra ero vamos a copiarlos tal cual ahora como valores enteros
        return parseInt(item, 10);//Funcion de alto nivel que convierte una cadena "string" en un entero
    }); if(valores.length!=4){
        // alert("Ip invalida")
        return false;
    }else{
    //   console.log(typeof(valores));//Vemos el tipo de variable que ya es un objeto
    //   console.log(valores)
      if(((0 <= valores[0] <= 255) && (0 <=valores[1] <= 255) && (0 <=valores[2] <= 255) && (0 <= valores[3] <= 255))===true){//Validamos que cada valor de valores[i] tenga un valor entre 0 y 255 (aun tiene fallas)
        // console.log("Es verdadero");
        return true
        // return geoIP(value,$submit);//De cumplorse mandamos a llamar la funcion geoIP pero le pasamos el valor de value que es un string
    }
   }
  }
  
  }