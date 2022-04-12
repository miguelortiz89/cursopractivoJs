
// codigo del cuadrado

console.group("Cuadrado");

//const ladoCuadrado =5;
//console.log("Los lados del cuadrado miden " + ladoCuadrado+ " cm");

function perimetroCuadrado(lado) {
    return lado * 4;
} 
//console.log("El perimetro del cuadrado es " +perimetroCuadrado + " cm");

function areaCuadraro(lado) {  
    return lado * lado;

}
//console.log("El area del cuadrado es " +areaCuadraro+" cm*2");

console.groupEnd();

// codigo del triangulo

console.group("Triangulos");

/* const ladoTriangulo1= 6;
const ladoTriangulo2= 6;
const baseTriangulo= 4;


console.log("Los lados del triangulo miden " 
+ ladoTriangulo1
+ " cm, " 
+ ladoTriangulo2
+ " cm, "
+ baseTriangulo
+ " cm"
); */

/* const alturaTriangulo= 5.5;
console.log("La altura del triangulo es " + alturaTriangulo+ " cm"); */

function alturaTrianguloIsoceles(lado1,lado2,base){

     if (lado1 === lado2 && lado1 !=base ){
        
        const altura = Math.sqrt (((lado1**2)) - ((base**2)/4))
        return altura;
    } else 

    return "Los lados 1 y 2 son diferentes y/o la base es igual a alguno de los lados"; 

}


function perimetroTrinagulo (lado1,lado2,base) {
    return lado1 + lado2 + base;
}
//console.log("El perimetro del triangulo es " +perimetroTrinagulo + " cm");

function areaTriangulo (base,altura ){
    return (base*altura) /2;
}
//console.log("El area del triangulo es " +areaTriangulo+" cm*2");

console.groupEnd();

// codigo del triangulo

console.group("Circulos");

// Radio

//const radioCirculo = 4;
//console.log("El radio del circulo es " +radioCirculo+" cm");

// Diametro
function diametroCirculo (radio) {
    return radio * 2 ;
}
//console.log("El diametro del circulo es " +diametroCirculo+" cm");

// PI

const PI = Math.PI;
console.log("El PI del circulo es " +PI+" cm");

// Perimetro

function PerimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//console.log("El perimetro del circulo es " +PerimetroCirculo+" cm");

// Area 


function areaCirculo (radio) {
        return radio * radio;
}

//console.log("El area del circulo es " +areaCirculo+" cm*2");


console.groupEnd();

// interaccion con html

function CalcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado (value);
    alert(perimetro);
}

function CalcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = areaCuadraro (value);
    alert(perimetro);
}

// Calcular altura del triangulo

function CalcularAlturaTriangulo() {
    
    const input1 = document.getElementById("Lado1Triangulo");
    const lado1 = input1.value;

    const input2 = document.getElementById("Lado2Triangulo");
    const lado2 = input2.value;

    const input3 = document.getElementById("BaseTriangulo");
    const base = input3.value;

    const altura = alturaTrianguloIsoceles(lado1,lado2,base);

    //const perimetro = perimetroCuadrado (value);
    alert(altura);



}

