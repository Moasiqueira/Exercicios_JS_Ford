// Escreva     um     programa que leia     as     medidas     dos     lados     de     um     triângulo
//     e    escreva    se    ele    é    Equilátero,    Isósceles    ou  Escaleno. 
// Sendo    que:    
// − Triângulo    Equilátero:    possui    os    3    lados    iguais.
// − Triângulo    Isóscele:    possui    2    lados    iguais.
// − Triângulo    Escaleno:    possui    3    lados    diferentes.




//entrada de dados
// = informar as 3 medidas de um triangulo

//processamento
// = verificar se o triangulo tem os 3 lados igual ou 2 lados iguais ou os 3 lados diferentes
// = para isso temos que utilizar os operadores lógicos && || ! 

//saida de dados
// = informar se o triangulo é equilátero, escaleno ou isócele
// = motrar a saída do programa na console


 const ladoA = 10
 const ladoB = 10
 const ladoC = 10
 

 if ( ladoA == ladoB && ladoB == ladoC){
    console.log(`Triangulo equilatéro`);
 }

 else if ( ladoA == ladoB || ladoA == ladoC || ladoC == ladoB){
    console.log(`Triangulo isóceles`);
 }

 else if ( ladoA != ladoB || ladoA != ladoC || ladoC != ladoB) {
    console.log (`Triangulo escaleno`);
 }


 


 