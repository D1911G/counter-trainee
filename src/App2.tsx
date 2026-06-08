import { useState } from "react";

import Modal from "./components/Modal";

import Counter from "./components/Counter";

export default function App2() {
  const [modalToggle, setModalToggle] = useState(false);
  const [minCount, setMinCount] = useState(0);
  const [maxCount, setMaxCount] = useState(5);
  const [count, setCount] = useState(minCount);

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
        <Counter
          countProp={count}
          setCountProp={setCount}
          minCountProp={minCount}
          maxCountProp={maxCount}
          setMinCountProp={setMinCount}
          setMaxCountProp={setMaxCount}
          modalToggleProp={setModalToggle}
        ></Counter>
      )}
    </>
  );
}
