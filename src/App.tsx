import { useState } from "react";
import "./App.css";
import { SWIPE_ICON } from "./Utils/assets";

function App() {
  const [inputVal, setInputVal] = useState<number>();
  const [result, setResult] = useState<number>();
  const handleCoveter = () => {
    const val = Number(0.3937 * inputVal!).toFixed(2);
    setResult(+val);
  };
  return (
    <>
      <div className="App">
        <div className="App-header">
          <div className="head">
            <div className="title">Cm To Inches</div>
            <div className="swipe-log">
              <img src={SWIPE_ICON} alt="swipeImage" />
            </div>
          </div>
          <div className="App-body">
            <input
              type="number"
              placeholder="Length in cm"
              value={inputVal}
              onChange={(e: any) => setInputVal(e.target.value)}
            />
            <div className="btn" onClick={handleCoveter}>
              Convete To Inches
            </div>
            {result! === undefined ? (
              ""
            ) : (
              <div className="result">{result} Inches</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
