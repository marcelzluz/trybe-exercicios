let salarioBruto = 3000;
let descontoInss;


if (salarioBruto < 1556.94 ) {
    descontoInss = 1 - 0.08;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    descontoInss = 1 - 0.09;
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    descontoInss = 1 - 0.11;
} else {
    descontoInss = 570.88;
}

let deduzidoInss = salarioBruto * descontoInss;

let descontoIr;

if (deduzidoInss <= 1903.98) {
    descontoIr = 0;
} else if (deduzidoInss >= 1903.99 && deduzidoInss <= 2826.65) {
    descontoIr = (deduzidoInss * 0.075) - 142.80;
} else if (deduzidoInss >= 2826.66 && deduzidoInss <= 3751.05) {
    descontoIr = (deduzidoInss * 0.15) - 354.80;
} else if (deduzidoInss >= 3751.06 && deduzidoInss <= 4664.68) {
    descontoIr = (deduzidoInss * 0.225) - 636.13;
} else {
    descontoIr = (deduzidoInss * 0.275) - 869.36;
}

let salarioLiquido = deduzidoInss - descontoIr;
console.log('Salário Bruto de ' + 'R$' + salarioBruto + '! Com os descontos de IR e INSS, apresenta um valor líquido de ' + 'R$' + salarioLiquido + '!')