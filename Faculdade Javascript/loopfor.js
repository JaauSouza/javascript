var a = [10,20,30,40,50,60];

for (let valor of a){
    console.log(valor);
}


a.forEach(valor => console.log(valor));

var tot = 0;
a.forEach(valor => {
    tot += valor;
})

console.log(tot);



var carro = [{modelo: 'audio A3', marca : 'Audi' , ano: 2020},
{modelo: 'Compass', marca : 'Jeep' , ano: 2021}]

for (let característica in carro) {
console.log(carro[característica]);
}


var c = 1;
while (c <= 10){
    console.log(c);
    c++;
}

var t = 1;

do{
    console.log(t);
    t++
}while( t < 6);