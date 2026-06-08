import { useState } from "react";
import Button from "./components/Button";
import Screen from "./components/Screen";

export default function App() {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount(count + 1);
  };

  const resetHandler = () => {
    setCount(0);
  };

  return (
    <div>
      <Screen count={count}></Screen>
      <Button
        title={"inc"}
        callBack={incrementHandler}
        disabled={count === 5} // упрощенная версия
      ></Button>
      <Button
        title={"reset"}
        callBack={resetHandler}
        disabled={count === 0 ? true : false} //полная, чтобы ты не тупил
      ></Button>
    </div>
  );
}
