const prompt = require("prompt-sync")();

// ter sempre os imports em cima do codigo
const ROWS = 3;
const COLS = 3;

// ter sempre os simbolos em cima do codigo
const SYMBOLS_COUNT = {
  A: 2,
  B: 3,
  C: 5,
  D: 8,
};

// Valores dos símbolos
const SYMBOL_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

// Função para depositar dinheiro na carteira
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

// Função para determinar o número de linhas para apostar
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

// Função para definir o valor da aposta por linha
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

// Função para girar a slot machine, criar rolos e selecionar símbolos
const spin = () => {
  const symbols = []; // para fazer um array basta fazer []
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }

  const reels = [[], [], []]; // Criando array para cada coluna
  for (let i = 0; i < COLS; i++) {
    const reelsSymbols = [...symbols]; // copia os simbolos para outro array
    for (let j = 0; j < ROWS; j++) {
      // The Math.floor() method rounds a number DOWN to the nearest integer.
      // Math.random ira gerar um numero random entre 0 e 1
      const randomIndex = Math.floor(Math.random() * reelsSymbols.length);
      // irá buscar a variavel criada la em cima para meter random
      const selectedSymbol = reelsSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelsSymbols.splice(randomIndex, 1); // remove o simbolo que foi usado
    }
  }
  return reels;
};

// Função para transpor os rolos para exibir as linhas jogadas
const transpose = (reels) => {
  const rows = [];

  for (let i = 0; i < ROWS; i++) {
    rows.push([]);
    for (let j = 0; j < COLS; j++) {
      rows[i].push(reels[j][i]);
    }
  }
  return rows;
};
const printRows = (rows) => {
  for (const row of rows) {
    let rowString = "A";
    for (const [i, symbol] of row.entries()) {
      rowString += symbol;
      if (i != row.length - 1) {
        rowString += " |";
      }
    }
    console.log(rowString);
  }
};
// Execução do jogo
let balance = deposit();
const numberOfLines = getNumberLinesToBet();
const bet = getBet(balance, numberOfLines);
const reels = spin();
const rows = transpose(reels);
console.log(reels);
console.log(rows);
