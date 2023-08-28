
var coinChange = function(coins, amount) {
    let coinsNeeded = 0;
    const reversedCoins = coins.sort((a,b) => b - a);
    let amountLeft = amount; // at the beginning will be 11

    for (let i = 0; i < reversedCoins.length; i++) {
      let currentCoins = Math.trunc(amountLeft / reversedCoins[i]);

      if (amountLeft % reversedCoins[i] === 0) {
        coinsNeeded += currentCoins;
        return coinsNeeded;
      } else {
        coinsNeeded += currentCoins;
        amountLeft -= reversedCoins[i] * currentCoins;
      }
 
    }

    return -1; // in case the loop has ended - return -1
};

console.log(coinChange([186,419,83,408], 6249)); // in this case returns иди нахуй instead of -1

