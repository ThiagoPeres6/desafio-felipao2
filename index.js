let jogador = "Thiago Peres";
let saldo = saldoRankeada(125, 10);

if (saldo<=10){
    console.log("O Jogador " + jogador + " tem saldo de " + saldo + " e está no elo Ferro");
}else if (saldo<=20){
    console.log("O Jogador " + jogador + " tem saldo de " + saldo + " e está no elo Bronze");
}else if (saldo<=50){
    console.log("O Jogador " + jogador + " tem saldo de " + saldo + " e está no elo Prata");
}else if (saldo<=80){
    console.log("O Jogador " + jogador + " tem saldo de " + saldo + " e está no elo Ouro");
}else if (saldo<=90){
    console.log("O Jogador " + jogador + " tem saldo de " + saldo + " e está no elo Diamante");
}else if (saldo<=100){
    console.log("O Jogador " + jogador + " tem saldo de " + saldo + " e está no elo Lendário");
}else if (saldo>100){
    console.log("O Jogador " + jogador + " tem saldo de " + saldo + " e está no elo Imortal");
}

function saldoRankeada(vitorias, derrotas){
    let resultado = vitorias - derrotas;
    return resultado;
}