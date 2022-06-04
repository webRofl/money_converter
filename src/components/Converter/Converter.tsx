import React, { useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { currencyParser } from '../../utils/currency';
import classes from './Converter.module.css';

const Converter: React.FC = () => {
  const { result } = useTypedSelector((state) => state.currency);

  const { setCurrencyInfo, setResult } = useActions();

  const [inputValue, setInputValue] = useState<string>('');

  const [isClick, setIsClick] = useState<boolean>(false);

  const handleChangeInputValue = (event: React.FormEvent<HTMLInputElement>) => {
    if (isClick) setIsClick(false);
    setInputValue(event.currentTarget.value);
  };

  const handleClick = () => {
    setIsClick(true);
    const [quantity, originalCurrency, convertCurrency] =
      currencyParser(inputValue);
    setCurrencyInfo(originalCurrency, convertCurrency, quantity);
    setResult(originalCurrency, convertCurrency, quantity);
  };

  return (
    <div className={classes.converter__wrapper}>
      <input
        className={classes.converter__input}
        type="text"
        placeholder="15 usd in eur"
        autoFocus
        value={inputValue}
        onChange={handleChangeInputValue}
      />
      {isClick ? (
        <div className={classes.converter__resultBlock}>
          <span className={classes.converter__result}>
            {result === -1 ? 'Invalid Currency' : result || '...Loading'}
          </span>
        </div>
      ) : (
        <button
          className={classes.converter__btn}
          onClick={handleClick}
          disabled={!!!inputValue.match(/\d.[a-zA-Z]{3,}.in.[a-zA-Z]{3,}/g)}
        >
          Convert
        </button>
      )}
    </div>
  );
};

export default Converter;
