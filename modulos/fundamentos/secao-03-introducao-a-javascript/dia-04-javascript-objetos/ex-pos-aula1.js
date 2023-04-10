//Exercício 1:
/* function imprimeIdade() {
    for (let idade = 30; idade <= 40; idade += 1) {
      console.log('Idade dentro do for:', idade)
    }
  }
  imprimeIdade() */

  //Exercício 2:
    // Executando esse código, recebe-se um erro `TypeError: Assignment to constant variable.`
/*     const pessoa = {
        nome: 'Henri',
        idade: 20
      }
     
        pessoa.nome = 'Luna';
        pessoa.idade = 19;
    
      console.log('Nome:', pessoa.nome);
      console.log('Idade:', pessoa.idade);
 */
//Exercício 3: 
/* let favoriteFood = 'Lasanha';
favoriteFood = 'Hambúrguer';
console.log(favoriteFood); */

//Exercício 4:
/* const name = 'Adriana';
const lastName = 'Soares';
console.log(`Olá, ${name} ${lastName}`);
function soma(a,b) {
  let resultado = a + b;
  return resultado;
}
let a = 3;
let b = 5;
console.log(`O resultado da soma de ${a} + ${b} é: ${soma(a,b)}`); */

//Exercício 5:
/* const numeroAleatorio = () => Math.random()
  console.log(numeroAleatorio()); */

//Exercício 6:
/* const hello = nome => `Olá, ${nome}!`
  let nome = 'Ivan';
  console.log(hello(nome)); */

//Exercício 7:
/* const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`
  let nome = 'Ivan';
  let sobrenome = 'Pires';
  console.log(nomeCompleto(nome, sobrenome)); */

//Exercício 8:
let speed = 90;
const speedCar = (speed) => (speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`);
console.log(speedCar(speed));


