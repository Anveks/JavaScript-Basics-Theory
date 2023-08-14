prices = [7,1,5,3,6,4]

const maxProfit = function (prices) {
  let profit = 0;

	let stockToBuy = prices[0];

	for (let i = 1; i < prices.length; i++) {
		if (stockToBuy > prices[i]) {
			stockToBuy = prices[i];
		}

		const currentProfit = prices[i] - stockToBuy;

		if (currentProfit > profit) {
			profit = currentProfit;
		}
	}

	return profit;
};

console.log(maxProfit(prices));


// WRONG APPROACH ☠️:
// const maxProfit = function (prices) {

//   if (prices.length === 1) return 0;

//   const sortedArr = [...prices].sort((a, b) => a - b); // clone and sort the array

//   let minIndex = 0;
//   let maxIndex = prices.length - 1;

//   let bestBuyIndex = prices.indexOf(sortedArr[minIndex]);
//   let bestSellIndex = prices.indexOf(sortedArr[maxIndex]);

//   if (bestBuyIndex === bestSellIndex){
//     return 0;
//   }

//   while (bestSellIndex === 0) {
//     bestSellIndex = prices.indexOf(sortedArr[--maxIndex]);
//   }

//   while (bestBuyIndex > bestSellIndex) {
//     bestBuyIndex = prices.indexOf(sortedArr[++minIndex]);
//   }

//   const maxProfit = prices[bestSellIndex] - prices[bestBuyIndex];

//   if (maxProfit === 0) {
//     return 0;
//   } else {
//     return maxProfit;
//   }

// };

// console.log(maxProfit(prices));