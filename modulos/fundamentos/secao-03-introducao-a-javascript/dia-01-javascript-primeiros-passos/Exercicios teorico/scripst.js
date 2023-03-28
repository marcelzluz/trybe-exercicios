let status = 'oxi';

switch(status) {
    case 'aprovada':
        console.log(“Parabéns, você está no grupo de pessoas aprovadas!”);
        break;
    case 'lista':
        console.log(“Você está na nossa lista de espera.”);
        break;
    case 'reprovada':
        console.log(“Infelizmente, você reprovou.”);
        break;
    default:
        console.log(“Na sei se voce está inscrito”);
}