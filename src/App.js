import React from "react";
import Stuff from "./tools/DRIP";
function App() {
  return (
    <div>
      <Stuff />
      {/*
      inputs:
      Ticker name
      Todays price
      52 week high and lo
      highest/lowest dividend paid
      number of dividens in the past year

      outputs:
      average price
      average dividend
      expected dividend yeild %
      number of shares required to buy now 
      in order to have enough for one later on
      cost to buy # of shares
      predicted monthly income

      Calculations:
      #of required shares now= 52week high /lowest divedend paid +1
      cost to buy=todays price *#of required shares
      monthly income=average dividend *# of shares
      */}
    </div>
  );
}

export default App;
