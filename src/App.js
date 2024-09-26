import money from "./image/money.png";
import "./App.css";
import CurrencyComponent from "./components/CurrencyComponent";
import { useEffect, useState } from "react";

function App() {
  const url = `https://api.exchangerate-api.com/v4/latest/AUD`;

  const [currencyChoice, setCurrencyChoice] = useState([]);

  const [fromCurrency, setFromCurrency] = useState("AUD");
  const [toCurrency, setToCurrency] = useState("THB");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCurrencyChoice([...Object.keys(data.rates)]));
  }, []);

  return (
    <div>
      <img src={money} alt="logo" className="money-img" />
      <h1>Currency Exchange (API)</h1>
      <div className="container">
        <CurrencyComponent
          currencyChoice={currencyChoice}
          selectCurrency={fromCurrency}
          changeCurrency={(e) => setFromCurrency(e.target.value)}
        />
        <div className="equal"> = </div>
        <CurrencyComponent
          currencyChoice={currencyChoice}
          selectCurrency={toCurrency}
          changeCurrency={(e) => setToCurrency(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
