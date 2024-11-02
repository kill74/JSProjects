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

let balance = deposit();
const numberOfLines = getNumberLinesToBet();
const bet = getBet(balance, numberOfLines);
