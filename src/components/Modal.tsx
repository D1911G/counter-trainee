import React, { useState, type ChangeEvent } from "react";
import Button from "./Button";

type ModalPropsType = {
  totalProp: number;
  setTotalProp: (number) => void;
  minTotalProp: number;
  maxTotalProp: number;
  setMinTotalProp: (number) => void;
  setMaxTotalProp: (number) => void;
  modalToggleProp: (boolean) => void;
};

export default function Modal(props: ModalPropsType) {
  const [minTotalM, setMinTotalM] = useState(0);
  const [maxTotalM, setMaxTotalM] = useState(5);
  //   const [error, setError] = useState(false);

  return (
    <>
      <div>
        <input
          placeholder="set new max total"
          type="number"
          value={maxTotalM}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setMaxTotalM(Number(e.target.value));
          }}
        ></input>
        <input
          placeholder="set new min total"
          type="number"
          value={minTotalM}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setMinTotalM(Number(e.target.value));
          }}
          style={{
            border: minTotalM > maxTotalM ? "1px solid red" : "",
          }}
        ></input>
      </div>
      <p style={{ color: "red" }}>
        {minTotalM > maxTotalM && "Please, write correct value"}
      </p>
      <Button
        title={"set"}
        callBack={() => {
          props.setMaxTotalProp(maxTotalM);
          props.setMinTotalProp(minTotalM);
          props.modalToggleProp(false);
          props.setTotalProp(minTotalM);
        }}
        disabled={minTotalM > maxTotalM || minTotalM < 0 ? true : false}
      ></Button>
      <Button
        title={"cancel"}
        callBack={() => props.modalToggleProp(false)}
      ></Button>
    </>
  );
}
