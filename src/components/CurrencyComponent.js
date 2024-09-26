import './CurrencyComponent.css'

const CurrencyComponent = () => {
  return (
    <div className="currency">
      <select>
        <option value="THB">THB</option>
        <option value="USD">USD</option>
        <option value="AUD">AUD</option>
      </select>
      <input type="number" placeholder='Insert Money' />
    </div>
  );
};

export default CurrencyComponent;
