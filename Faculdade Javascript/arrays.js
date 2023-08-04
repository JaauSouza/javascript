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



var nomes = ["Guilherme","Manuel", "Samuel","Davi","João"];
var novos = nomes.splice(4,4,"mônica","Emanuel");

console.log(nomes);



var pessoa = ["Eduardo","joanna", "Wallace", "Rosana"];
var gerente = ["Davi", "Manuela"];

var pessoas1 = pessoa.slice(1,3);


console.log(pessoa);
console.log(pessoas1);


var empresa = pessoa.concat(gerente);
console.log(empresa);