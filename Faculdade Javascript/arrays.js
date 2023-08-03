var valores = [8,1,7,2,9];

console.log(valores[3])


for (var pos = 0 ; pos < valores.length; pos++) {
    console.log("posicao:  "  + pos + " valor: " +  valores[pos]);
}

var soma = 0; 
for (var pos = 0 ; pos < valores.length; pos++){
    soma += valores[pos];
}

var media = soma/valores.length;

console.log(media);


var arr2 = [1,2,3,4,5,6,7];

arr2.splice(2,3); 

console.log(arr2);

var nomes = ["Maria"," João","Lucas","Pedro"];
var novos = nomes.splice(1,2, "Luiz", "Ronaldo");
console.log(nomes);


var nomes = [ "João", "Bruna", "Vera", " Nalva"];
var novos = nomes.splice(1,2, "Joseildo", "Wallace"); 
console.log(nomes);


var pais = ["Brasil", "Argentina", "Colombia"];

pais.unshift("Uruguai");
console.log(pais);

