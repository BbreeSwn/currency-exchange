import money from "./image/money.png";
import "./App.css";
import CurrencyComponent from "./components/CurrencyComponent";
import { useEffect, useState } from "react";

function App() {
  const url = `https://api.exchangerate-api.com/v4/latest/USD`;

  const [currencyChoice , setCurrencyChoice] = useState([])

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
        <CurrencyComponent currencyChoice={currencyChoice} />
        <div className="equal"> = </div>
        <CurrencyComponent currencyChoice={currencyChoice} />
      </div>
    </div>
  );
}

export default App;
