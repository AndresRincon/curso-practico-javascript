//Codigo del cuadrado
console.group("cuadrados")
/* const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cm"); */

function perimetroCuadrado(lado) {
    return lado * 4;
}
/* console.log("El perimetro del cuadrado es: "+ perimetroCuadrado +"cm"); */

function areaCuadrado(lado) {
    return lado * lado;
}
//console.log("El área del cuadrado es: "+ areaCuadrado+"cm2");
console.groupEnd();

// Código del Triangulo
console.group("Triangulos");
/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
 */

//const alturaTriangulo = 5.5;
/* console.log("La altura del triangulo es: " + alturaTriangulo + "cm" ); */

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
};
//console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm" );

function areaTriangulo(base, altura) {
    return (base * altura) / 2
};
//console.log("El area del Triangulo es: " + areaTriangulo + "cm");
console.groupEnd();

// Código del Circulo
console.group("Circulos"); 

// Radio
//const  radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + "cm");
// Diametro
function diametroCirculo(radio){
    return  radio *2
}

// Pi
const PI = Math.PI;
//console.log("Pi es: " + PI );

// Circunferencia 
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Area
function areaCirculo(radio) {
    return (radio * radio) * 2; 
}
//const areaCirculo = (radioCirculo * radioCirculo) * PI;
//console.log("El area del circulo es: " + areaCirculo + "cm");


console.groupEnd();


function calcularPerimetroCuadrado(){
    const input = document.getElementById('InputCuadrado');
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById('InputCuadrado');
    const value = input.value1;
    const perimetro = areaCuadrado(value);
    alert(perimetro);
}

function alturaTrianguloIsoscele(){
    const lado1 = parseInt(document.getElementById('inputLado1').value);
    const lado2 = parseInt(document.getElementById('inputLado2').value);
    const base = parseInt(document.getElementById('inputBase').value);
    if(lado1 === lado2 && lado1 != base){
        const h = Math.sqrt(lado1**2 -  (base** 2/ 4) );
        alert(h);
    }else{
        alert("Los lados del triangulo con Coinciden");
    }
}