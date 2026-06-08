import React, { useState, type ChangeEvent } from "react";
import Button from "./Button";

type ModalPropsType = {
  countProp: number;
  setCountProp: (number) => void;
  minCountProp: number;
  maxCountProp: number;
  setMinCountProp: (number) => void;
  setMaxCountProp: (number) => void;
  modalToggleProp: (boolean) => void;
};

export default function Modal(props: ModalPropsType) {
  const [minCountM, setMinCountM] = useState(0);
  const [maxCountM, setMaxCountM] = useState(5);

  return (
    <>
      <div>
        <input
          placeholder="set new max count"
          type="number"
          value={maxCountM}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setMaxCountM(Number(e.target.value));
          }}
        ></input>
        <input
          placeholder="set new min count"
          type="number"
          value={minCountM}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setMinCountM(Number(e.target.value));
          }}
          style={{
            border: minCountM > maxCountM ? "1px solid red" : "",
          }}
        ></input>
      </div>
      <p style={{ color: "red" }}>
        {minCountM > maxCountM && "Please, write correct value"}
      </p>
      <Button
        title={"set"}
        callBack={() => {
          props.setMaxCountProp(maxCountM);
          props.setMinCountProp(minCountM);
          props.modalToggleProp(false);
          props.setCountProp(minCountM);
        }}
        disabled={minCountM > maxCountM || minCountM < 0 ? true : false}
      ></Button>
      <Button
        title={"cancel"}
        callBack={() => props.modalToggleProp(false)}
      ></Button>
    </>
  );
}
