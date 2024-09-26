import "./CurrencyComponent.css";

const CurrencyComponent = (props) => {
  const { currencyChoice } = props;

  return (
    <div className="currency">
      <select>
        {currencyChoice.map((choice) => 
          <option key={choice} value={choice}>{choice}</option>
        )}
      </select>
      <input type="number" placeholder="Insert Money" />
    </div>
  );
};

export default CurrencyComponent;
