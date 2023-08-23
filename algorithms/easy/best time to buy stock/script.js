prices = [7,1,5,3,6,4]

const maxProfit = function (prices) {
	let profit = 0;
	let buyPrice = prices[0]; 

	for (i = 0; i < prices.length; i++){
		if (buyPrice > prices[i]) {
			buyPrice = prices[i]
		};
		
		const currentProfit = prices[i] - buyPrice;

		if (currentProfit > profit){
			profit = currentProfit;
		}
	}

	return profit;
};

console.log(maxProfit(prices));

