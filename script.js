// var antonio = {
//     nombre: 'Antonio',
//     apellido: 'Guerrero',
//     edad: 25,
//     peso: 128
// };

// var imprimirNombreEnMayusculas = ({nombre, apellido}) => {
//     console.log(nombre.toUpperCase(), apellido.toUpperCase());
// }

// imprimirNombreEnMayusculas(antonio);

// console.log(antonio.edad);
////////////////////////CICLO FOR------+++++
// console.log(`Al inicio del año ${antonio.nombre} pesaba ${antonio.peso}kg`);

// const PESO = 0.200
// const AumentarDePeso = persona => persona.peso += PESO;
// const BajarDePeso = persona => persona.peso -= PESO;

// for(var i = 1; i < 366; i++){
//     var random = Math.random()
//     if (random < 0.25){
//         AumentarDePeso(antonio);
//     } else if (random < 0.5){
//         BajarDePeso(antonio);
//     }
// };

// console.log(`Al fin del año ${antonio.nombre} pesa ahora ${antonio.peso.toFixed(1)}kg`);

////////////////////////AQUI EMPIEZA EL WHILE++++++------

// console.log(`Al inicio del año ${antonio.nombre} pesaba ${antonio.peso}kg`);

// const PESO = 0.300;
// const DIAS_DEL_ANO = 365;
// const AumentarDePeso = persona => persona.peso += PESO;
// const BajarDePeso = persona => persona.peso -= PESO;
// const comeMucho = () => Math.random() < 0.3;
// const realizaDeporte = () => Math.random() < 0.4;
// const META = antonio.peso - 40;

// var dias = 0;

// while (antonio.peso > META){
//     if (comeMucho()){
//         AumentarDePeso(antonio);
//     }
//     if (realizaDeporte()){
//         BajarDePeso(antonio);
//     }
//     dias += 1
// };


// console.log(`Pasaron ${dias} días hasta que ${antonio.nombre} adelgazó 40 kg`);
// console.log(`El peso final de ${antonio.nombre} es de ${antonio.peso.toFixed(1)}kg`);

//////////////////////DO WHILE ---------------------------
// var contador = 0;
// const Llueve = () => Math.random() < 0.25;

// do {
//     contador++;
// } while (!Llueve());
// if (contador === 1){
//     var veces = "vez";
// }else{
//     veces = "veces";
// }
// console.log(`Fui a ver si llovía ${contador} ${veces}`);
//////////////////////SWITCH---------------------
// var signo = prompt('¿Cuál es tu signo?');

// switch (signo){
//     case 'acuario':
//     case 'Acuario':
//     console.log(`tu signo es ${signo}`);
//     break;
//     case 'cancer': 
//     console.log(`tu signo es ${signo}`);
//     break;
//     case 'piscis': 
//     console.log(`tu signo es ${signo}`);
//     break;
//     case 'leo': 
//     console.log(`tu signo es ${signo}`);
//     break;
//     case 'tauro': 
//     console.log(`tu signo es ${signo}`);
//     break;
//     default:
//     console.log('No es un signo zodiacal válido');
//     break;
// }
                                        //******************************//
                                        //*                            *//
                                        //*                            *//
                                        //*          ARRAYS            *//
                                        //*                            *//
                                        //*                            *//
                                        //******************************//

var antonio = {
    nombre: 'Antonio',
    apellido :'Guerrero',
    edad: 25,
    altura: 1.65,
    cantidadDeLibros: 20
};
var juan = {
    nombre: 'Juan Guillermo',
    apellido :'Pérez',
    edad: 24,
    altura: 1.75,
    cantidadDeLibros: 92

};
var carla = {
    nombre: 'Carla',
    apellido :'Fernández',
    edad: 23,
    altura: 1.56,
    cantidadDeLibros: 60
};
var carlos = {
    nombre: 'Carlos',
    apellido :'Fernández',
    edad: 23,
    altura: 1.87,
    cantidadDeLibros: 39
};

const EsAlta = ({altura}) => altura > 1.7;

var personas = [antonio, juan, carla, carlos];

// for (var i = 0; i < personas.length; i++){
//     var persona = personas[i];
//     console.log(`${persona.nombre} tiene ${persona.edad} años`);
// }

var personasAltas = personas.filter(EsAlta);
// var personasAltas = personas.filter(function (p) {
//     return p.altura > 1.7;
// })
console.log(personasAltas);

const PasarAlturaACentimetros = persona => {
    // persona.altura = persona.altura * 100 es lo mismo que la de abajo
    return {
        ...persona,
        altura: persona.altura * 100
    }
}
// var personasCentimetros = personas.map(PasarAlturaACentimetros);

// console.log(personasCentimetros);

// var acumulado = 0;
// for (var i = 0; i < personas.length; i++){
//     var persona = personas[i];
//     acumulado += persona.cantidadDeLibros;
// }                                        
//     console.log(acumulado);

const Reducir = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros;

var totalDeLibros = personas.reduce(Reducir, 0)

console.log(`El total de libros es de ${totalDeLibros} libros`);


                                        //******************************//
                                        //*                            *//
                                        //*                            *//
                                        //*         ARRAYS MAP         *//
                                        //*                            *//
                                        //*                            *//
                                        //******************************//

