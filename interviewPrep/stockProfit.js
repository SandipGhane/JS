let profits = [100, 180, 260, 310, 40, 535, 695];

function maxProfit(profits) {
    let minBuyValue = Infinity;
    let maxProfit = 0;
    for (const profit of profits) {
        if (profit < minBuyValue) {
            minBuyValue = profit;
        } else if (profit - minBuyValue > maxProfit) {
            maxProfit = profit - minBuyValue;
        }
    }
    console.log(maxProfit);
}

maxProfit(profits);