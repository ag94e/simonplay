                                        //******************************//
                                        //*                            *//
                                        //*                            *//
                                        //*         PROTOTIPOS         *//
                                        //*                            *//
                                        //*                            *//
                                        //******************************//

class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }
    saludar(responderSaludo){
        var {nombre, apellido} = this;
        console.log(`Hola, me llamo ${nombre} ${apellido}`);
        if (responderSaludo){
            responderSaludo(nombre, apellido);
        }
    }
    soyAlto(){
        if (this.altura > 1.8){
            console.log(`Yo, ${this.nombre} me considero alto pues mido ${this.altura}mts`);
        }else{
            console.log(`Yo, ${this.nombre} mido ${this.altura}mts, por lo que me considero una persona baja`);3
        }
    }
}
class Desarrollador extends Persona{
    constructor(nombre, apellido,altura) {
        super(nombre, apellido, altura);
    }
    saludar(responderSaludo){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
        if (responderSaludo){
            responderSaludo(this.nombre, this.apellido, true);
        }
    }
}       


var antonio = new Persona('Antonio', 'Guerrero', 1.89);
var juan = new Persona('Juan', 'Esparza', 1.90);
var marta = new Desarrollador('Martha', 'Mendoza', 1.65);

antonio.saludar();
juan.saludar(responderSaludo);
marta.saludar(responderSaludo);

function responderSaludo (nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`);
    if (esDev){
        console.log(`Vaya un desarrollador, bienvenido!`);
    }
}

// saludo();
// function saludo () {console.log('hola'); }

// La función normal como la de arriba, se carga primero en memoria y luego se ejecuta cuando es llamada.
//en cambio una arrow function, se debe declarar antes de cuando es llamada, porque si no, no se podrá ejecutar.

