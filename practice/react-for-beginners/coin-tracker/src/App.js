import React, {useEffect, useState} from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [value, setValue] = useState(true);
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers?quotes=KRW')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const onChange = () => {
    setValue((current) => !current);
    console.log(value);
  };
  return (
    <div>
      <h1>The Coins!</h1>
      <h2>Total Coins Amount{loading ? null : `(${coins.length})`}</h2>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select onChange={onChange}>
            <option value='KRW'>KRW</option>
            <option value='USD'>USD</option>
          </select>
        </div>
      )}
      {value === true ? (
        <ul>
          {coins.map((coin, id) => (
            <li>
              {coin.name} ({coin.symbol}): {coin.quotes.KRW.price}
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          {coins.map((coin, id) => (
            <li>
              {coin.name} ({coin.symbol}): {coin.quotes.KRW.price * 1.2}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
