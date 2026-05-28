// MANIPULACAO DE DOM
// //Dom -> Object Model
// //é a forma como nevegador organiza o html para que o js consiga acessar os elementos 

// //Principasi métodos de selção de elementos no DOM

// /*

//     getElementoByid -. serve para selecionar um elemento pelo seu ID.

//     querSelector -> serve para selecionar o 1º elemento que correesponde 
//     a um seletor Css (tag(ex. p, h1,h2),ID nome da classe)

//     querySelectorAll -> serve para selecionar todos os elementos que corresponde a um seletor.

//     getElementsByClasseName -> serve para adicionar todos os elementos que corresponde a uma classe


// */

// // const titulo = document.getElementById("titulo");
// // const valor = document.getElementById("titulo").innerText

// // console.log(titulo);
// // console.log(valor)

// //queryselector
// // const titulo=document.querySelector("#titulo");//chamdo id -> #nomeid

// // const paragrafo = document.querySelector(".paragrafo");// chamado classe -> .nomeclasse

// // const tituloH2 = document.querySelector("h2");// chamado tags -> h2 

// // console.log(titulo);
// // console.log(paragrafo);
// // console.log(tituloH2);

// //querselectorA11
// // const elementos= document.querySelectorAll(".texto");
// // //imprime o elemneto(p)
// //     console.log(elementos);

// // // imprime o valor que esta dentro do elemento 
// // elementos.forEach(elemento=>console.log(elemento.innerText));

// // // trocando o texto que esta dentro do elemento 
// // elementos.forEach(elemento=>elemento.innerText="Alterado");

// // // trocando a tag
// // elementos.forEach(elemento=>elemento.innerHTML="<h2>Item</h2>");

// // //trocando a cor da fonte (letra)
// // elementos.forEach(elemento=>elemento.style.color="#0000FF");

// //evento de click
// const botao = document.getElementById("btn");

// //adicionar um "escuador de evento" no botao
// botao.addEventListener("click",()=>{
//     alert("Voce clicou");
// })


//Evento de digitação ( input/keyup)
//evento input -> dispara o evento sempre que digite, em tempo real
// const campo = document.getElementById("campo");
// const resultado  = document.getElementById("resutado")

// campo.addEventListener("input",() => {
//     //value -> o valor digitado dentro da caixinha de texto
//     resultado.innerText = campo.value;

// });


//evento keyup -> dispara quando solta a tecla 
// campo.addEventListener("keyup"),() => {
//     resultado.innerText = campo.Value;
//     console.log("teclado pressionada");
// })

//evento de mouse
const elemento = document.getElementById("troca-cor");
const botao = document.getElementById("btn");

//mouse -> quando passa o moue por cima do elemento
elemento.addEventListener("mouseover",() => {
    elemento.style.backgroundColor="#FF0000"
}) 