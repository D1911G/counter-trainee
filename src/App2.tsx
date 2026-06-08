import { useState } from "react";
import Button from "./components/Button";
import Modal from "./components/Modal";
import Screen from "./components/Screen";

export default function App2() {
  const [modalToggle, setModalToggle] = useState(false);
  const [minCount, setMinCount] = useState(0);
  const [maxCount, setMaxCount] = useState(5);
  const [count, setCount] = useState(minCount);

  const incrementHandler = () => {
    setCount(count + 1);
  };

  const resetHandler = () => {
    setCount(0);
    setMinCount(0);
    setMaxCount(5);
  };
  const modalSetHandler = () => {
    setModalToggle(!modalToggle);
  };

  return (
    <>
      {modalToggle ? (
        <Modal
          countProp={count}
          setCountProp={setCount}
          minCountProp={minCount}
          maxCountProp={maxCount}
          setMinCountProp={setMinCount}
          setMaxCountProp={setMaxCount}
          modalToggleProp={setModalToggle}
        ></Modal>
      ) : (
        <div>
          <Screen count={count}></Screen>
          <Button
            title={"inc"}
            callBack={incrementHandler}
            disabled={count === maxCount ? true : false}
          ></Button>
          <Button
            title={"reset"}
            callBack={resetHandler}
            disabled={count === 0 ? true : false}
          ></Button>
          <Button title={"set"} callBack={modalSetHandler}></Button>
        </div>
      )}
    </>
  );
}
