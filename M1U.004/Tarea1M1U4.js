//1er paso - creo las variables que voy a utilizar

var distancia;

//2do paso - creo el prompt

distancia = prompt('Ingrese la distancia en metros:', '');


//3er paso - creo una estructura de control anidada
if (distancia <= 1000) {
    document.write('Ir a pie');
    document.write('<br>');
} else if (distancia > 1000 && distancia < 10000) {
    document.write('Ir en bicicleta');
    document.write('<br>');
} else if (distancia > 10000 && distancia < 30000) {
    document.write('Ir en colectivo');
    document.write('<br>');
} else if (distancia > 30000 && distancia < 100000) {
    document.write('Ir en auto');
    document.write('<br>');
    } else {
    document.write('ir en avion ');
}