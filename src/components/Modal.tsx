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
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Настройки счетчика</h2>
        <div className="modal-input-group">
          <label>Минимальное значение</label>
          <input
            type="number"
            value={minCountM}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setMinCountM(Number(e.target.value));
            }}
            className={`modal-input ${minCountM > maxCountM ? "modal-input-error" : ""}`}
          />
        </div>
        <div className="modal-input-group">
          <label>Максимальное значение</label>
          <input
            type="number"
            value={maxCountM}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setMaxCountM(Number(e.target.value));
            }}
            className="modal-input"
          />
        </div>
        {minCountM > maxCountM && (
          <div className="error-message">
            ⚠️ Минимум не может быть больше максимума!
          </div>
        )}
        <div className="modal-buttons">
          <Button
            title={"Сохранить"}
            callBack={() => {
              props.setMaxCountProp(maxCountM);
              props.setMinCountProp(minCountM);
              props.modalToggleProp(false);
              props.setCountProp(minCountM);
            }}
            disabled={minCountM > maxCountM || minCountM < 0}
            className="btn-set"
          />
          <Button
            title={"Отмена"}
            callBack={() => props.modalToggleProp(false)}
            className="btn-reset"
          />
        </div>
      </div>
    </div>
  );
}
