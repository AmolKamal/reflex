import { useState } from "react";

import "./App.css";
import Compon1 from "./components/Compon1";

function App() {
  const [drillCount, setDrillCount] = useState(20);
  const [difficulty, setDifficulty] = useState(1);
  const [buttonText, setButtonText] = useState("Start Drill");

  function operatorBoy() {
    let tm = 25 * difficulty * difficulty - 475 * difficulty + 2450;
    let x = 0;
    let counter = 1;

    const beginButton = document.getElementById("begin") as HTMLButtonElement;

    if (beginButton !== null) {
      beginButton.disabled = true;
      setButtonText("Drilling");
      beginButton.style.backgroundColor = "maroon";
    }

    const interval = setInterval(() => {
      console.log("Operator boy on work");
      if (x === 0) {
        x = Math.floor(((Math.random() * 10) % 3) + 1);
      } else {
        x = 0;
      }
      console.log(x);

      let leftdisc = document.querySelector<HTMLElement>(".ldisc");
      let rigtdisc = document.querySelector<HTMLElement>(".rdisc");

      if (leftdisc !== null && rigtdisc !== null) {
        switch (x) {
          case 0:
            leftdisc.style.borderColor = "white";
            rigtdisc.style.borderColor = "white";
            break;

          case 1:
            leftdisc.style.borderColor = "white";
            rigtdisc.style.borderColor = "black";
            break;

          case 2:
            leftdisc.style.borderColor = "black";
            rigtdisc.style.borderColor = "black";
            break;

          case 3:
            leftdisc.style.borderColor = "black";
            rigtdisc.style.borderColor = "white";
            break;

          default:
            break;
        }
        if (counter >= 2 * drillCount - 1) {
          clearInterval(interval);
          if (beginButton !== null) {
            beginButton.disabled = false;
            setButtonText("Again?");
            beginButton.style.backgroundColor = "rgb(14, 95, 14)";
          }
        } else {
          counter++;
        }
      }
    }, tm);

    return interval;
  }

  // useEffect(() => {
  //   operatorBoy();
  // }, []);

  return (
    <>
      <div className="container1">
        <Compon1 />

        <div className="controls">
          <div className="drillinfo">
            <button id="begin" onClick={operatorBoy}>
              {buttonText}
            </button>
            <label htmlFor="turns">Count </label>
            <input
              type="number"
              id="turns"
              value={drillCount}
              onChange={(e) => {
                setDrillCount(+e.target.value);
              }}
            />
          </div>

          <div className="dfclt">
            <label htmlFor="difficulty">Your Reflex Level: {difficulty}</label>
            <input
              type="range"
              min="1"
              max="10"
              value={difficulty}
              onChange={(e) => {
                setDifficulty(+e.target.value);
              }}
              className="slider"
            />
          </div>
        </div>
      </div>
      <div className="menu">
        <h2>SPEED UP YOUR REFLEXES</h2>
        <div className="lnks">
          <ul>
            <li>
              <h5>
                <u>Brief</u>
              </h5>
              <p>
                Try to tap your palm on your thighs as per the disc visible on
                screen.
              </p>
            </li>
            <li>
              <u>Contact at:</u> amolkkamal@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
