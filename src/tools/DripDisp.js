import React from "react";
function Display(props) {
  return (
    <div>
      <div className="output" />
      <p>Symbol {props.info.symbol}</p>
      <p className="avgPrice">Average Price:{props.info.averagePrice}</p>
      <p className="avgDiv">Average Dividend return:{props.info.divReturn}</p>
      <p className="divYeild">Expected Dividend Yeild:</p>
      <p className="today">Shares required Today: {props.info.today}</p>
      <p className="cost">Cost to Buy:{props.info.cost}</p>
      <p className="income">Monthly Income:{props.info.income}</p>
    </div>
  );
}
export default Display;
