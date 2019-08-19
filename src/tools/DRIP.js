import React, { useState, useEffect } from "react";
import Display from "./DripDisp";
import "./style.css";
function Drip() {
  const [ticker, setTicker] = useState("");
  const [dailyPrice, setDailyPrice] = useState(0);
  const [weekHigh, setWeekHigh] = useState(0);
  const [weekLow, setWeekLow] = useState(0);
  const [highDiv, setHighDiv] = useState(0);
  const [lowDiv, setLowDiv] = useState(0);
  const [divYear, setDivYear] = useState(0);
  const [button, setButton] = useState(false);
  const [stock, setStock] = useState({});
  useEffect(() => {
    setStock({
      averagePrice: (Number(weekHigh) + Number(weekLow)) / 2,
      divReturn: Number(highDiv) + Number(lowDiv) / 2,
      today: Number(weekHigh) / Number(lowDiv) + 1,
      cost: (Number(weekHigh) / Number(lowDiv) + 1) * dailyPrice,
      income:
        (Number(highDiv) + Number(lowDiv) / 2) *
        (Number(weekHigh) / Number(lowDiv) + 1)
    });
  }, [button]);
  function HandleClick() {
    setButton(true);
    console.log(stock);
  }
  return (
    <div className="back">
      <div className="input" />
      <p className="ticker">Ticker</p>
      <p className="todaysPrice">Todays Price</p>
      <p className="weekHigh">52 Week High</p>
      <p className="weekLow">52 Week Low</p>
      <p className="highDiv">Highest Dividend Paid</p>
      <p className="lowDiv">Lowest Paid Dividend</p>
      <p className="divPerYear">Number of Dividends in the year</p>
      <input
        type="text"
        className="tickerBox"
        onChange={e => setTicker(e.target.value)}
      />
      <input
        type="number"
        className="priceBox"
        onChange={e => setDailyPrice(e.target.value)}
      />
      <input
        type="number"
        className="highBox"
        onChange={e => setWeekHigh(e.target.value)}
      />
      <input
        type="number"
        className="lowBox"
        onChange={e => setWeekLow(e.target.value)}
      />
      <input
        type="number"
        className="paidBox"
        onChange={e => setHighDiv(e.target.value)}
      />
      <input
        type="number"
        className="lowDivBox"
        onChange={e => setLowDiv(e.target.value)}
      />
      <input
        type="number"
        className="perYearBox"
        onChange={e => setDivYear(e.target.value)}
      />
      <input type="button" onClick={HandleClick} />

      <Display info={stock} />
    </div>
  );
}
export default Drip;
