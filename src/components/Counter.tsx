import React from "react";
import Button from "./Button";
import Screen from "./Screen";

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
    <div className="counter-card">
      <Screen count={countProp} maxCount={maxCountProp} />
      <div className="button-group">
        <Button
          title={"inc"}
          callBack={incrementHandler}
          disabled={countProp === maxCountProp}
          className="btn-inc"
        />
        <Button
          title={"reset"}
          callBack={resetHandler}
          disabled={countProp === 0}
          className="btn-reset"
        />
        <Button title={"set"} callBack={modalSetHandler} className="btn-set" />
      </div>
    </div>
  );
}
