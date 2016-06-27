






// teste expressoes regulares (REGEX)
var txt = "O preço é 10 e 20";
var padrao = / 10 /; // padrao q estou procurando
var eae = padrao.test(txt); // procuro se o padrao esta contido na var txt
console.log(eae);
//
var eae2 = txt.match(/10/);
console.log(eae2);
console.log(eae2[0]);
//
var eae3 = txt.match(/\d+/g); // procura por digitos e o mais todos os digitos de um num.
console.log(eae3);







// LENDO UM JSON
var jsonPronto = "{\"preco\" : 100, \"descricao\" : \"blusa\"}";
var objetoProduto = JSON.parse(jsonPronto);
console.log(objetoProduto);
console.log(objetoProduto.preco);
console.log(objetoProduto.descricao);

















//
