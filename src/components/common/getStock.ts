

export const getStock = async (symbol: string) => {
  const apiKey = import.meta.env.VITE_ALPHA_VANTAGE_KEY;
  const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data['Global Quote'];
  } catch (error) {
    console.error('Error fetching stock data:', error);
    return null;
  }
};