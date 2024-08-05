//Trabalhando com Strings

//Declarando variaveis, existem 3 formas

var nome = "Rogerio"; // Escopo Global

let profissao = "docente"; // Escopo: LOCAL

const endereco = "rua francisco aro"; // CONSTANTE


//------------------------------------------------------------------------------------

//for é um bloco de código
//for(let i = 0; i < 10; i++)
//{
	//Variavel tem escopo local
//	console.log(i);
//}

//console.log(i)

//------------------------------------------------------------------------------------

//metodo -> toLowerCase() deixa todas as letras minusculas da string
alert( nome.toLowerCase() ); // funciona no momento da linha, não torna a alteração permanente


//metodo -> toUpperCase() deixa todas as letras maiusculas da string
alert( nome.toUpperCase() ); // funciona no momento da linha, não torna a alteração permanente


//metodo -> length() conta a quantidade de caracteres
alert( nome.length() );

//metodo -> charAt() retorna a posição do caractere do index, se não especificar ele retorna a primeira letra
alert( profissao.charAt(2) ) 


//metodo -> startsWith() verifica as primeiras letras especificadas e retorna "true" se for verdadeiro
alert( endereco.startsWith("ru") )

//metodo -> endsWith() verifica se termina com as letras especificadas e retorna "true" se for verdadeiro
alert( endereco.endsWith("aro") )

//metodo -> includes() procura a palavra dentro do texto, pode passar segudno parametro para definir de onde começar a busca no texto
alert( endereco.includes("aro", 6))

//metodo -> index() identifica em que posição se encontra o texto, pode passar segudno parametro para definir de onde começar a busca no texto
alert( endereco.index("aro"));