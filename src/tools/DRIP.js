import React, { useState } from "react";
import "./style.css";
function Drip() {
  const [ticker, setTicker] = useState("");
  const [dailyPrice, setDailyPrice] = useState(0);
  const [weekHigh, setWeekHigh] = useState(0);
  const [weekLow, setWeekLow] = useState(0);
  const [highDiv, setHighDiv] = useState(0);
  const [lowDiv, setLowDiv] = useState(0);
  const [divYear, setDivYear] = useState(0);

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
      <div className="output" />
      <p className="avgPrice">
        Average Price:{(Number(weekHigh) + Number(weekLow)) / 2}
      </p>
      <p className="avgDiv">
        Average Dividend return:{Number(highDiv) + Number(lowDiv) / 2}
      </p>
      <p className="divYeild">Expected Dividend Yeild:</p>
      <p className="today">
        Shares required Today: {Number(weekHigh) / Number(lowDiv) + 1}
      </p>
      <p className="cost">
        Cost to Buy:{(Number(weekHigh) / Number(lowDiv) + 1) * dailyPrice}
      </p>
      <p className="income">
        Monthly Income:
        {(Number(highDiv) + Number(lowDiv) / 2) *
          (Number(weekHigh) / Number(lowDiv) + 1)}
      </p>
    </div>
  );
}
export default Drip;
