// 1. Depositar algum dinheiro na carteira
// 2. Determinar numero de linhas para apostar
// 3. Coletar o dinheiro
// 4. Girar a slot machine
// 5. Verificar se o user ganhou
// 6. Dar o dinheiro ao utilizador
// 7. JOGAR DE NOVO (GAMBLINGGGGGGGGG)

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

const depositAmount = deposit();
const numberOfLines = getNumberLinesToBet();