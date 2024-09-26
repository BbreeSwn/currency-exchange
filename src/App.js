import money from "./image/money.png";
import "./App.css";
import CurrencyComponent from "./components/CurrencyComponent";

function App() {
  return (
    <div>
      <img src={money} alt="logo" className='money-img' />
      <h1>Currency Exchange (API)</h1>
      <div className="container">
        <CurrencyComponent />
        <div className='equal'> = </div>
        <CurrencyComponent />
      </div>
    </div>
  );
}

export default App;
