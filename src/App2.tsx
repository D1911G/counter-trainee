import { useState } from "react";
import Modal from "./components/Modal";
import Counter from "./components/Counter";
import "./App.css";

export default function App2() {
  const [modalToggle, setModalToggle] = useState(false);
  const [minCount, setMinCount] = useState(0);
  const [maxCount, setMaxCount] = useState(5);
  const [count, setCount] = useState(minCount);

  return (
    <div className="app-container">
      {modalToggle ? (
        <Modal
          countProp={count}
          setCountProp={setCount}
          minCountProp={minCount}
          maxCountProp={maxCount}
          setMinCountProp={setMinCount}
          setMaxCountProp={setMaxCount}
          modalToggleProp={setModalToggle}
        />
      ) : (
        <Counter
          countProp={count}
          setCountProp={setCount}
          minCountProp={minCount}
          maxCountProp={maxCount}
          setMinCountProp={setMinCount}
          setMaxCountProp={setMaxCount}
          modalToggleProp={setModalToggle}
        />
      )}
    </div>
  );
}
