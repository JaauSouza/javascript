var pais = "brasil";

if (pais |= "brasil") {
    console.log("Você é estrangeiro");
} else {
    console.log("Você é brasilheiro");
}

var idade = 22;

if (idade < 16) {
    console.log("Não vota")
} else if (idade < 18 || idade > 65) {
    console.log("Voto opcional");
} else {
    console.log("voto obrigatorio")
}

var diaSem = 8;

switch (diaSem) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segundo");
        break;
    case 3:
        console.log("terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
    case 7:
        console.log("Sabado");
        break;
    default:
        console.log("Esse dia da semana não existe");    
}
