import React, { useState } from 'react';
import classes from './ao.module.css';

const Ao: React.FC = () => {
  const [number, setNumber] = useState<number>(0);
  const [resultRadix, setResultRadix] = useState<number>(2);
  const [numberRadix, setNumberRadix] = useState<number>(10);

  const [isClick, setIsClick] = useState<boolean>(false);

  const [result, setResult] = useState<number>(0);

  const handleChangeNumber = (event: React.FormEvent<HTMLInputElement>): void =>
    setNumber(Number(event.currentTarget.value));

  const handleChangeResultRadix = (
    event: React.FormEvent<HTMLInputElement>
  ): void => setResultRadix(Number(event.currentTarget.value));

  const handleChangeNumberRadix = (
    event: React.FormEvent<HTMLInputElement>
  ): void => setNumberRadix(Number(event.currentTarget.value));

  const convertNumber = (num: number, radix: number) =>
    num.toString().includes('.') || num.toString().includes(',')
      ? parseFloat(Number(num.toString(radix)).toFixed(2))
      : Number(num.toString(radix));

  const handleClick = () => {
    const realNumber = convertNumber(number, numberRadix); // variable number after convert to numberRadix
    setResult(convertNumber(realNumber, resultRadix));
    setIsClick(true);
  };

  return (
    <div className={classes.ao__wrapper}>
      <div className={classes.ao__form}>
        <div className={classes.ao__formBlocks}>
          <label className={classes.ao__formLabel}>number</label>
          <input type="number" onChange={handleChangeNumber} value={number} />
          <input
            type="number"
            value={numberRadix}
            onChange={handleChangeNumberRadix}
            className={classes.ao__numberRadix}
          />
        </div>
        <div className={classes.ao__formBlocks}>
          <label className={classes.ao__formLabel}>radix</label>
          <input
            type="number"
            onChange={handleChangeResultRadix}
            value={resultRadix}
          />
        </div>
        <button onClick={handleClick}>Click</button>
      </div>
      {isClick ? <span>{result}</span> : null}
    </div>
  );
};

export default Ao;
