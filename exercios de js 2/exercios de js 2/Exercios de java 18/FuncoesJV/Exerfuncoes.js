// Funções nativas do javascrpt
//ajudam a manter um código limpo e organizado
//avita muita rapetição de código

//map -> percorre uma lista e cria uma nova lista com base em uma condicao 
// let numeros=[1,2,3,4];
// let numerosDobrados= numeros.map(function(num){
//     return num *2;
// }); 
//     console.log(numerosDobrados);

// // mesma função, mas agora com arrow function
// let numerosDobradosArrow=numeros.map(num=>num*2);
//     console.log(numerosDobradosArrow);

// numeros.map(num=>{
//     let resultado=num*2;
//     return resultado;
// })
// console.log(teste)

//IF ternário
//se for verdaderio -> a resposta vem depois da interrpgacao
// se for falso -> a resposta vem depois dos dois pontos
// let resposta = (idade > 18) ? "maior de idade" : "menos de idade";

// if(idade.18){
//     "maior de idade":
// }

// FILTER -> filtra os elementos de uma çista com base em uma condicao 
// let numeros=[5,10,15,20];
// let numerosquedez= numeros.filter(num=>num>10);
// console.log(numerosquedez);//[15,20]

//------------------------------//



// Funções nativas do Javascript
// ajudam a manter um código limpo e organizado
// evita muita repetição de código

// // MAP -> Percorre uma lista e cria uma nova lista com base em uma condição
// let numeros = [1, 2, 3, 4];

// let numerosDobrados = numeros.map(function(num){
//     return num * 2;
// });

// // console.log(numerosDobrados);

// // mesma função, mas agora com arrow function
// let numerosDobradosArrow = numeros.map(num => num * 2);
// // console.log(numerosDobradosArrow);

// let teste = numeros.map(num => {
//     let resultado = num * 2;
//     return resultado;
// })

// console.log(teste)

// // IF Ternário
// // se for verdadeiro -> a resposta vem depois da interrogação
// // se for falso -> a resposta vem depois dos dois pontos
// let resposta = (idade > 18) ? "maior de idade" : "menor de idade";

// // se for verdadeiro -> a resposta vem depois da interrogação
// // se for falso -> a resposta vem depois dos dois pontos
// // se depois dos dois pontos tiver outra condição, a gente volta pro começo
// let resposta2 = (idade > 18) ? "maior de idade" : (idade > 75) ? "idoso" : "menor de idade";

// FILTER -> Filtra os elementos de uma lista com base em uma condição
// let numeros = [5, 10, 15, 20];

// let maiorQueDez = numeros.filter(num => num > 10);

//REDUCE -> reduz os valores de um array para um único valores 
// let numeros = [1 , 2 , 3 , 4]
// //acumulor
// //variavel auxiliar
// //0 - > é o valor inicial do acumulador  
// let soma=numeros.reduce((acumulador, auxiliar)=>acumulador+auxiliar,0);
// // acumulador=3
// // auxiliar=3
// // soma=1
// console.log(soma);


//Find -> restorna o primeiro elemento que atende a uma condição
// let produtos =[
//     {id:1, nome:"teclado",preco:50},
//     {id:2, nome:"mouse",preco:30}
//     {id:2,nome:"fone de ouvido",preco:2100}
// ]
// let item=produtos.find(produtos=>produtos.id===2);
//     console.log(item);


//SPLIT -> divide uma string em parte, transformando em uma lista 
// let frase="JS é muito bom";
// // criando um array de palavras usando split
// let  palavras= frase.split(" ");
//     console.log(palavras)


//TRIM -> Remove espaco no incio e final de uma string
// let nome="     joão     "
// let nome2="  joão    "
// let nomelimpo=nome.trim();
//     console.log(nomelimpo)
//     console.log(nome2)

//includes -> verifica se existe um valor dentron de uma lista ou string
// let frutas=["maçã", "banana"];
// let fruntasexiste=frutas.includes("banana");//booleano
// console.log(fruntasexiste);// true ( verdadeira)



// tolowercase -> tranforma o texto em minúculo
// tolowercase -> tranforma o texto em maiúsculo
// let nome="KESSIA";
// let cargo = "intrutora";

// console.log(nome.toLocaleUpperCase()); // kessia
// console.log(cargo.toUpperCase()); // INTRUTORA 
// let nomes = ["pedro", "joão","beatriz"]
// nome.forEach(nome=> console.log("seu nome é:"+ aux));


//some -> veficar se pelo menos um item da lista atende a condicao
// let numero= [1, 3, 5, 8];
// let tempar=numero.some(num=>num%2===0);// true ou flase 
//     console.log(tempar)//true


// //EVERY -> veficar se todos  os elementos da lista atendem a uma condicao
// let todosospares=numero.every(num=>num%2===0);
//     console.log(todosospares);// false 


//SORTE -> ordenas os elementos de uma lista 
// let numeros = [3, 10, 5, 2, 4]
// let letras =["c", "a", "x", "h"]

// //ordenado letras 
// letras.sort();
// console.log(letras);

// // ordenando número
// numeros.sort((a, b)=> a - b);
//     console.log(numeros);

// //REVERSE -> inverte a ordem de uma arry
// numeros.reverse();
//     console.log(numeros)


//join -> junta os elementos de um arry em uma string
// let palavras =["js", "é", "muito", "bom!"];
// let frase= palavras.join(" ");
// console.log(frase);


//PUSH -> adicionar elementos no final do arry 
// POP -> remover elementos no final do array
// let lista = ["A", "B"];
// lista.push("C");// adcionar 
//     console.log(lista);

// lista.pop();// removendo
// console.log(lista);

// //SHIFT -> remover elementos do incio do array
// //UNISHIFT -> adicionar elementos no inicio do array
// let lista = ["B", "C"]

// lista.unshift("A");// adicionar 
//     console.log(lista);
// lista.shift();// remove
//     console.log(lsita);

//SLICE -> criar uma copia de uma parte de lista 
/*
    array.slice(inicial,final)

    inicial -> onde comeca (a copiar o array )
    final -> onde para 9 nao inclui a posicao  final indíce / index))


*/

// let numeros =[1, 2, 3, 4]
// let copia = numeros.slice(1,3); // 1 e 3 sao posicaoes do array 
//     console.log (copia);

//SPLICE Remove ou adiciona elementos em qualquer posicao 
/*

    array.splice(indice, count, item1, ..., itemx)
    count-> Número de itens a serem removidos ( pode ser 0)
    item -> que vao ser adicionar 


*/

// let numeros =[1, 2, 3, 4];
// numeros.splice(1, 2);
// console.log(numeros)

// let frutas =[ "banana", "laranja","maca", "manga"]
//     fruntas.splice(0,3,"limao", "kiwi");
//     console.log(frutas)

// let fruntas=[ "banana", "laranja","maca", "manga"]
//     fruntas.splice(2,0,"limnao","kiwi");
//     console.log(fruntas);

//REPLACE -> substitui uma parte da string
// let texto ="ola mundo!";
// let novotexto=texto.replace("mundo","cliente");
//     console.log(novotexto);


//SPOILER....
// let textop = document.getElementById("texto");
// let saudacao = prompt("Digite uma saudacao:");

// textop.textContent=saudacao=="bom dia" ? saudacao: "quintouuuuu";


