import React, { useState } from "react";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("CAD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState("");

  let exchangeRate = 61.61; //(CAD to INR)

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const handleConvert = () => {
    if (fromCurrency === "CAD" && toCurrency === "INR") {
      const convertedValue = amount * exchangeRate;
      setConvertedAmount(convertedValue.toFixed(2));
    }
    if (fromCurrency === "INR" && toCurrency === "CAD") {
      exchangeRate = 0.016;
      const convertedValue = amount * exchangeRate;
      setConvertedAmount(convertedValue.toFixed(2));
    }
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={handleAmountChange}
        />
      </div>
      <div>
        <label htmlFor="fromCurrency">From:</label>
        <select
          id="fromCurrency"
          value={fromCurrency}
          onChange={handleFromCurrencyChange}
        >
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
      </div>
      <div>
        <label htmlFor="toCurrency">To:</label>
        <select
          id="toCurrency"
          value={toCurrency}
          onChange={handleToCurrencyChange}
        >
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
      </div>
      <button onClick={handleConvert}>Convert</button>
      <div>
        {convertedAmount && (
          <p>
            Converted Amount: {convertedAmount} {toCurrency}
          </p>
        )}
      </div>
    </div>
  );
};

export default CurrencyConverter;
