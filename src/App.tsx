import { useState } from "react";
import Button from "./components/Button";
import Screen from "./components/Screen";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount(count + 1);
  };

  const resetHandler = () => {
    setCount(0);
  };

  return (
    <div className="app-container">
      <div className="counter-card">
        <Screen count={count} maxCount={5} />
        <div className="button-group">
          <Button
            title={"inc"}
            callBack={incrementHandler}
            disabled={count === 5}
            className="btn-inc"
          />
          <Button
            title={"reset"}
            callBack={resetHandler}
            disabled={count === 0}
            className="btn-reset"
          />
        </div>
      </div>
    </div>
  );
}
