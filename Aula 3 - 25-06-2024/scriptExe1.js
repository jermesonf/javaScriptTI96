
//VARIAVEIS GLOBAIS

var texto1 = "Houve um homem que conquistou tudo aquilo que o mundo tinha a oferecer, o lendário Rei dos Piratas, Gold Roger.";

var nome = " Tereza maria SILVA ";

var email = "carlos@gmail.com";


// 1) usando o texto1, faça a seguinte busca:

//•Substitua a palavra Roger por Carlos;
// alert( texto1.replace("Roger", "Carlos"));

// //•Transforme todo o texto em lower;
// alert( texto1.toLowerCase() );

// //•Conte quantas letras tem no texto, após você fatiar o texto a partir da posição 10 e salvar o restante do texto em uma variável, ai tente contar quantas letras tem esse texto fatiado;
// alert( texto1.slice(10,texto1.length));

// //•Verifique se o texto inclui a seguinte palavra “tin” 
// alert( texto1.includes("tin") );

// //•Fatie todas as palavras do texto usando split(), salve em uma nova variável e depois imprima essa nova variável no console.log()
const x = texto1.split();
console.log(x);

// //•Ache a posição do index da palavra "lendário”  e “homem”
alert( texto1.indexOf("lendário"));
alert( texto1.indexOf("homem"));



//•2) Pegue a variável nome faça as seguintes configuração:

//•Repita a palavra 3 vezes;
alert(nome.repeat(3));


// //• faça as letras ficarem em Upper;
alert(nome.toUpperCase());

// //•Verifique se a palavra termina com a letra  “o”;
alert(nome.endsWith("o"));

// //•Qual é a letra da posição 6 de index;
alert(nome.charAt(6));


//•3) Pegue a variável email, e verifique :

//•Se ela possui o @ dentro do texto;
alert(email.includes("@"));

//•Se possui um (.) dentro do texto; 
alert(email.includes("."));


//•E se esse( . ) e se ele está depois do @
alert(email.includes(".",7));

//•E verifique se existe pelo menos 1 letra antes do @
alert(email.includes("s",1))

