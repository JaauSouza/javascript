var numeros = [1,2,3,4,5,6,7,8,9,10];

var nums = numeros.map(function(valor){
return valor *2;
});
console.log(nums);

var funcionarios = [
    {nome: "Luiz", idade: 62},
    {nome: "Davi", idade: 62},
    {nome: "Arthur", idade: 62},
    {nome: "Lucas", idade: 62},
]

nomes = funcionarios.map(pessoa => pessoa.nome);
console.log(nomes);

var total = 0;
for(var i = 0; i < numeros.length;i++){
    total += numeros [i];
}

console.log(total);