import { useState } from "react";
import Button from "./components/Button";
import Modal from "./components/Modal";

export default function App2() {
  const [modalToggle, setModalToggle] = useState(false);
  const [minTotal, setMinTotal] = useState(0);
  const [maxTotal, setMaxTotal] = useState(5);
  const [total, setTotal] = useState(minTotal);

  const incrementHandler = () => {
    setTotal(total + 1);
  };

  const resetHandler = () => {
    setTotal(0);
    setMinTotal(0);
    setMaxTotal(5);
  };
  const modalSetHandler = () => {
    setModalToggle(!modalToggle);
  };

  return (
    <>
      {modalToggle ? (
        <Modal
          totalProp={total}
          setTotalProp={setTotal}
          minTotalProp={minTotal}
          maxTotalProp={maxTotal}
          setMinTotalProp={setMinTotal}
          setMaxTotalProp={setMaxTotal}
          modalToggleProp={setModalToggle}
        ></Modal>
      ) : (
        // ============================ в отдельный компонент трохи пожже
        <div>
          <h1 style={{ color: total === maxTotal ? "red" : "" }}>{total}</h1>
          <Button
            title={"inc"}
            callBack={incrementHandler}
            disabled={total === maxTotal ? true : false}
          ></Button>
          <Button
            title={"reset"}
            callBack={resetHandler}
            disabled={total === 0 ? true : false}
          ></Button>
          <Button title={"set"} callBack={modalSetHandler}></Button>
        </div>
        // ============================ в отдельный компонент трохи пожже
      )}
    </>
  );
}
