//Estrutura condicional 
//Temos condições e decidimos os caminhos que vamos seguir na estrutura condicional 
    /* 
        IF  -> SE ( se chover.....)
        ELSE -> SENÃO (senão......)
        ELSE IF -> SENÃO SE 
        SWITCH/CASE -> switch (como se fosse um menu de opções, cada case é uma op)
        */

// let nome = prompt("Digite seu nome:");
// console.log(nome);

//Exemplos 
//1. sistema de verificação de temperatura
//tudo que é digitado através do prompt, é recebido como tipo texto 
//

// let temperatura= Number(prompt("Digite uma temperatura:"))
// if (temperatura<20){
//     console.log("Está frio!");
// } else{
//     console.log("Está calor!")
// }


//2 Verificar o nível da bateria 
    // let bateria=Number(prompt("Digite o nível da bateria(%):"));
    // if(bateria<=30){
    //     alert("Bateria esta fraca");
    // } else{
    //     alert("bateria esta carregado!")
    // }

// 3. Sistema de acesso
//     let tipoUsuario=prompt("Digite o tipo de usuário(admin,cliente):").toLocaleLowerCase();
// // Tousurario -> deixa as letras em maiusculo
// // tousurario -> deixa as letras em minusculo

//     if (tipoUsuario=="admin"){
//         console.log("Acesso total ao sistema.");
//     }
//     else if (tipoUsuario=="cliente"){
//         console.log("Acesso limitado ao sistema.")
//     }

//     else{
//         console.log("Tipo inválido!")

//     }
    

//4.Classificar a qualidade da internet

//     let velocidade=Number(prompt("Digite a velocidade da internet:"));
// if(velocidade>= 100){
//     console.log("Internet Rapída.");
// }
// else if (velocidade>=50){
//     console.log("Internet é média.");
// }
// else{
//     console.log("Internet lenta.")
// }

//5. Analisar o volume de items 
//* usado operadores lógicos 
// let quantidade=10;

// if (quantidade===0){
//     console.log("Nenhum item selecionado")
// }
// else if (quantidade<5){
//     console.log("Pouco itens")
// }
// else if (quantidade>=5 && quantidade<10){
//     console.log("Quantidade média de itens")
// }
// else {
//     console.log("muitos itens");
// }

//Condicional Aninhada 
//6. Uma condicional dentro da outra 
// const nota = 5;
//     if(nota>=7){

//         if(nota===10){
//             console.log("Aprovado com premiação!");
//         }
//         console.log("Aprovado!")
//     }

// else {
//     console.log("Reprovado!");
// }

//7. Adaptção de tela de despositivo 
// let despositivo= prompt("Você está usando: celular, tablet ou computador?").toLocaleLowerCase();
//     if (despositivo=="celular"||despositivo=="tablet"){
//         console.log("Modo mobile ativado");
//     }
//     else if despositivo=="computador"){
//         console.log("Modo desktop ativado");
//     }
//     else{
//         console.log(" despositivo desconhecido")
//     }

//8. SWITCH/ CASE
// Mudar o tema do sistema 
// let tema = prompt(" Digite um tema: calor, escuro, azul, ou digite sair.").toLocaleLowerCase();
// switch(tema){
//     case"claro":
//         console.log("Tema claro ativado");
//         document.body.style.backgroundColor="#0d53af";
//         break;

//     case "escuro":
//         console.log("Tema escuro ativado");
//         document.body.style.backgroundColor="#2f0808";
//         break;

//     case"azul":
//         console.log("Tema azul ativado");
//         document.body.style.backgroundColor="#0400bd";
//         break;
//     default:
//         console.log("Tema inválido")
//         break;
// }

// //9. 

