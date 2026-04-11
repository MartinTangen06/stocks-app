import { getStock } from "../common/getStock";

export const StockLayout = ({ symbol }: { symbol: string }) => {
  const stockData = getStock(symbol);

  return (
    <div>
      <h1>{stockData['01. symbol']}</h1>
      <p>Price: {stockData['05. price']}</p>
      <p>Change: {stockData['09. change']}</p>
      <p>Change Percent: {stockData['10. change percent']}</p>
    </div>
  );
};