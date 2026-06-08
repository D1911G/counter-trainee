import React from "react";
import Screen from "./Screen";
import Button from "./Button";

type CounterPropsType = {
  countProp: number;
  maxCountProp: number;
  setCountProp: (number) => void;
  minCountProp: number;
  setMinCountProp: (number) => void;
  setMaxCountProp: (number) => void;
  modalToggleProp: (boolean) => void;
};

export default function Counter({
  countProp,
  maxCountProp,
  setCountProp,
  setMinCountProp,
  setMaxCountProp,
  modalToggleProp,
}: CounterPropsType) {
  const incrementHandler = () => {
    setCountProp(countProp + 1);
  };

  const resetHandler = () => {
    setCountProp(0);
    setMinCountProp(0);
    setMaxCountProp(5);
  };

  const modalSetHandler = () => {
    modalToggleProp(true);
  };

  return (
    <div>
      <Screen count={countProp} maxCount={maxCountProp}></Screen>
      <Button
        title={"inc"}
        callBack={incrementHandler}
        disabled={countProp === maxCountProp ? true : false}
      ></Button>
      <Button
        title={"reset"}
        callBack={resetHandler}
        disabled={countProp === 0 ? true : false}
      ></Button>
      <Button title={"set"} callBack={modalSetHandler}></Button>
    </div>
  );
}
