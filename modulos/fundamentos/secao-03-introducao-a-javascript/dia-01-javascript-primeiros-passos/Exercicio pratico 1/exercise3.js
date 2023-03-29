let anguloA = 30;
let anguloB = 80;
let anguloC = 70;

let somaAngulos = anguloA + anguloB + anguloC;
let validacaoAngulos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if (validacaoAngulos) {
    if (somaAngulos === 180) {
        console.log('positive');
    } else {
        console.log('negative')
    }
} else {
    console.log('Error!')
}

