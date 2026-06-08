import { useState } from "react";
import Button from "./components/Button";

export default function App() {
  const [total, setTotal] = useState(0);

  const incrementHandler = () => {
    setTotal(total + 1);
  };

  const resetHandler = () => {
    setTotal(0);
  };

  return (
    <div>
      <h1 style={{ color: total === 5 ? "red" : "" }}>{total}</h1>
      {/* в отдельный компонент восрать */}
      <Button
        title={"inc"}
        callBack={incrementHandler}
        disabled={total === 5} //упрощенный вид
      ></Button>
      <Button
        title={"reset"}
        callBack={resetHandler}
        disabled={total === 0 ? true : false}
      ></Button>
    </div>
  );
}
