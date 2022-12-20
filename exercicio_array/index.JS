 ////Exercicio 1 

var numbers = []
for (var i = 0; i <= 19 ; i++) {
    var newN = parseInt(prompt("Por favor digite um número: "));
    numbers.push(newN);
    console.log(numbers);
}
 document.write("Escrevendo numeros do array " + numbers); 


 //// Exercicio 2
var n1 = [];
var n2 = [];

for (var i = 0; i <= 12; i++) {
    
    var newN  = parseInt(prompt(" Por favor usuário me informe o número de posição:" ));
    if (newN >= 50) {
        n1.push(newN);
    }
    else {
        n2.push(newN);
    }
 }

 alert("Mostrar todos os números: " + n1);
 alert("Mostrar todos os números: " + n2);


// Exercicio 3
var item1 = "anel de invisibilidade"
var item2 = " Par de botas Magicas"
var item3 = "Poção do sono "
var item4 = "Poção da inocencia"
var item5 = "capa da inivisibilidade"
var item6 = "pedra do despertar"
var item7 = "varinha das varinhas"
var item8 = "poção da mentira"
var item9 = "poção da anti-inteligencia"
var item10 ="escudo magico"
var item11 = "espada magica"
var item12 =  "coxinha"
var item13 = "ovo de dragão"

var drofo = [item1, item2, item2, item3, item4, item4];
var topper = [item5, item6, item7, item4, item8, item8, item9];

console.log(topper);



topper.splice(4, 1); //Torper consumiu uma das poções da mentira
topper.splice(2, 1, item2, item10, item11); // perdeu sua pedra e ganhou um par de botar mágicas do Drofo, achou um escudo mágico e uma espada mágica. 
drofo.splice(2, 1); // drofo dando uma botinha para seu amigo topper



drofo.splice(2, 0, item2 ) //Drofo, ganhou mais uma bota mágica
drofo.splice(3, 1)//usou sua poção do sono
topper.splice(7, 1, item12, item13)//consumiu a poção anti-inteligência do Torper,
//encontrou um ovo de dragão e uma coxinha.


document.write("A biuld do drofo ficou: "  + drofo + "<br> <br>");
document.write("A biuld do topper ficou: "  + topper);


