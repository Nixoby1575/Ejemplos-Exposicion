/* Esta parte del código es una función Mediante declaración*/
function sumaf(a, b) {
    let resultado = a + b;
    return resultado;
  }
  let ResultadoFuncion = sumaf(20, 30);
  console.log(ResultadoFuncion);


/*Esta parte del código es una función de expresión*/
  const sumae = function(a, b) {
    let resultado = a + b;
    return resultado;
  };
  let ResultadoExpresion = sumae(2, 3);
  console.log(ResultadoExpresion);

  
/*Este es un método*/
  class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    presentarse() {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
  }
  
  let persona1 = new Persona("Alexis", 21);
  persona1.presentarse();