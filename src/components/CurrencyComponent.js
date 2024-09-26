import "./CurrencyComponent.css";

const CurrencyComponent = (props) => {
  const { currencyChoice , selectCurrency ,changeCurrency } = props;

  return (
    <div className="currency">
      <select value={selectCurrency} onChange={changeCurrency}>
        {currencyChoice.map((choice) => 
          <option key={choice} value={choice}>{choice}</option>
        )}
      </select>
      <input type="number" placeholder="Insert Money" />
    </div>
  );
};

export default CurrencyComponent;
