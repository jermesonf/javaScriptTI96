//Atribuindo a uma variavel um elemento que está no html
var t_fieldNome = document.querySelector("#nome");

//imprimindo o elemento no console do navegador
console.log(t_fieldNome);


var t_fieldNascimento = document.querySelector("#nascimento");
var t_fieldAltura = document.querySelector("#altura");
var t_fieldPeso = document.querySelector("#peso");
console.log(t_fieldNascimento, t_fieldAltura, t_fieldPeso);

var btnCalcular = document.querySelector("#calcular")




btnCalcular.addEventListener("click", function somar(e){
    
    // templete de string
    console.log(`Nome: ${t_fieldNome.value} peso: ${t_fieldPeso.value} Altura:, ${t_fieldAltura.value} DataNascimento: ${t_fieldNascimento.value}`);

})