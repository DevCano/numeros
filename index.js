let a = 5;
let b = 0.1;
let c = 0.2;
// Crea un archivo JS que contenga las siguientes líneas
// - Una variable que contenga tu altura en centímetros (entero)
// - Una variable que contenga tu altura en metros (número de coma flotante)
// - Una variable que contenga tu peso en kilogramos (número de coma flotante)
// - Una variable que contenga tu altura en metros redondeada hacia arriba
// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo
// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
const altura =  153;
const alturaM = 1.53;
const peso = 75.6;
const alturaRArriba = Math.ceil(alturaM);
console.log(alturaRArriba);
const pesoRAbajo = Math.floor(peso);
console.log(pesoRAbajo);
const valorMax = Number.MAX_SAFE_INTEGER;
const esMaximoValor = valorMax + 1 === Number.MAX_SAFE_INTEGER;
console.log(esMaximoValor);
