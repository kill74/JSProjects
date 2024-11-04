// 1. Depositar algum dinheiro na carteira (Feito);
// 2. Determinar numero de linhas para apostar (Feito);
// 3. Coletar o dinheiro (Por fazer);
// 4. Girar a slot machine (Por fazer);
// 5. Verificar se o user ganhou (Por fazer);
// 6. Dar o dinheiro ao utilizador (Por fazer);
// 7. JOGAR DE NOVO (GAMBLINGGGGGGGGG) (Por fazer);

//Função para depositar dinheiro na carteira
//function deposit (){

//}

const prompt = require("prompt-sync")();

//ter sempre os imports em cima do codigo
const ROWS = 3;
const COLS = 3;

//ter sempre os simbolos em cima do codigo
//nao e preciso usar "" para as keys
const SYMBOLS_COUNT = {
  A: 2,
  B: 3,
  C: 5,
  D: 8,
};

//Valores dos símbolos
const SYMBOL_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Deposita o montante: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Montante inválido. Tente novamente.");
    } else {
      return numberDepositAmount;
    }
  }
};

//Função para determinar o número de linhas para apostar
const getNumberLinesToBet = () => {
  while (true) {
    const Lines = prompt(
      "Determine o numero de linhas que quer apostar (1-3): "
    );
    const numberOfLines = parseFloat(Lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Numero de linhas Inválido. Tente novamente.");
    } else {
      return numberOfLines;
    }
  }
};

const getBet = (balance, Lines) => {
  while (true) {
    const bet = prompt("Deposite o numero total da aposta por linha: ");
    const numberBet = parseFloat(bet); // Corrigido para 'numberBet'

    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / Lines) {
      console.log("Aposta inválida. Tente de novo.");
    } else {
      return numberBet;
    }
  }
};

//todos os símbolos disponíveis e metelos em um array e meter random
const spin = () => {
  const symbols = []; // para fazer um array basta fazer []
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }
  const reels = [[], [], []]; // para fazer um array
  for (let i = 0; i < COLS; i++) {
    const reelsSymbols = [...symbols]; //copia os simbolos para outro array
    for (let j = 0; j < ROWS; j++) {
      //The Math.floor() method rounds a number DOWN to the nearest integer.
      //Math.random ira gerar um numero random entre 0 e 1
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      //ira buscar a variavel criada la em cima para meter random
      const selectedSymbol = reelSymbols[randomIndex];
    }
  }
};
let balance = deposit();
const numberOfLines = getNumberLinesToBet();
const bet = getBet(balance, numberOfLines);
