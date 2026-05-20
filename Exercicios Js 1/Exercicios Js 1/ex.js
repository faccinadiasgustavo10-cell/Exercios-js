
//variaveis
    /*
    LET    -> Quando o valor da variável pode mudar, usamos Let 
    VAR    -> Forma antiga - evitar de usar (está sendo descontinuado por muitos ploblemas) 
    CONST  -> Quando o valor da variável NÃO pode mudar 
    */

// let nome = "caio";
// const idade = 25;
// var cidade = "São Paulo";

// console.log(nome);
// console.log(idade);

// // trocando infomação da variável com let//  
// nome="kessia";
// console.log(nome);

// // trocando a infomação da variável com conts//
// idade=30;
// console.log(idade);

// //imprimindo valores juntos //
// console.log(nome+cidade);

// //imprimindo valores juntos com texto// 
// console.log("nome:"+nome+",cidade:"+ cidade);

// // interpolação//
// console.log(`nome:${nome},cidade:${cidade}`);

// // tipos primitivos 

// //string(texto)
// let mensagem = "ola, mundo!";
// console.log(typeof mensagem);

// //number (número)
// let idade=30;
// let temperatura= 36.5;
// console.log(typeof idade);
// console.log(typeof temperatura);

// //boolean (booleano -> verdadeiro / falos )
// let estaChovendo=true;
// console.log(typeof estaChovendo);

// //undefined -> quando não definimos um valor para uma variável 
// let nome;
// console.log(typeof nome);

// //Null / objetc - usado para ausência intencional de um valor 
// let endereco=null
// console.log(typeof endereco);

// //conversão dos tipos 
// //conversão emplícita (automática)
// let soma ="5"+ 3;
// let sub ="5"-3;

// console.log(typeof soma)
// console.log(soma) // 53 string
// console.log(typeof sub)
// console.log(sub)// 2 number

// //conversão explícita
// //converter para número 
// let numero ="42";
// let convertido = Number(numero);

// //converter número para string
// let numero2 = 100;
// let texto = String(numero2);

// // operadores relacionais 
// /* 
// > maior que 
// < menor que 
// >= maior ou igual 
// <= menor ou igual
// == igualdade(ignona tipo)
// === igualdade estrita (verifica tipo)
// !=  diferente (ignora tipo)
// !== diferente  estrito tipo)
// */

////exemplo
// console.log(10>5);//true 
// console.log(10<5);// false 

// console.log (5=="5")//true 
// console.log(5==="5")//false -> compra valor tipo 

// //operadores matemáticos
// /*

// +   soma
// -   subatração
// *   divisão
// /   restoda divisão
// %   resto da divisao
// **   potência
// */

////exemplo
// let a=10;
// let b= 5;
// console.log(a+b); //soma
// console.log(a-b); // subtração
// console.log(a*b); //multiplicação 
// console.log(a/b); //divisão

////resto
// console.log(a%b); // resto da divisão
// console.log(a**b);// potência
// !(NOT)   -> OPERADOR NAO
    
////operadores lógicos
// /*
// && (AND) -> OPERADOR E
// || (OR)  -> OPERADOR OU
// */

// // OPERADOR &&
// //só retorna verdadeiro quando todas as condições forem verdadeiros 

// let num1=5
// let num2=5
// let num=10
// console.log(num1==num2&&num3>num2);// true 

// //operador||
// //retorna verdadeirose pelo menos uma das condições forem verdadeiras 
// let num4=9
// console.log(num1==num4|| num1==num2);//true

// //operador !(não)
// //inverte a condição, se é verdadeiro -> vira falso e vice versa
// let logado=true;
// console.log(!logado);//falso

// console.log(5!=3)//true 
// console.log(!(5!=3));//false

//recebendo dados do usuário
let nome=prompt("Digite seu Nome:");
alert(`olá), ${nome}`);

function mensagem(){

    
}
