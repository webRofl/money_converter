import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrencyAsync,
  setFirstCurrency,
  setSecondCurrency,
  setValue,
} from '../../redux/currencyReducer';
import { GlobalState } from '../../redux/store';
import { currencyStringConverter } from '../../utils/currencyStringConverter';

const Converter: React.FC = () => {
  const dispatch = useDispatch();

  const currencyValue = useSelector(
    //@ts-ignore
    (state: GlobalState) => state.currency.value
  );

  const firstCurrency = useSelector(
    //@ts-ignore
    (state: GlobalState) => state.currency.firstCurrency
  );

  const secondCurrency = useSelector(
    //@ts-ignore
    (state: GlobalState) => state.currency.secondCurrency
  );

  const result = useSelector(
    (state: GlobalState) =>
      //@ts-ignore
      state.currency.result
  );

  const inputsCheck = () => {
    console.log(firstCurrency, secondCurrency);

    if (firstCurrency && secondCurrency)
      dispatch(
        getCurrencyAsync(currencyStringConverter(firstCurrency, secondCurrency))
      );
  };

  const valueHandleChange = (event: any) =>
    dispatch(setValue(event.currentTarget.value));

  const firstCurrencyHandleChange = (event: any) => {
    inputsCheck();
    dispatch(setFirstCurrency(event.currentTarget.value));
  };

  const secondCurrencyHandleChange = (event: any) => {
    inputsCheck();
    dispatch(setSecondCurrency(event.currentTarget.value));
  };

  return (
    <>
      <form>
        <span>Перевести</span>
        <input
          type="number"
          value={currencyValue || 0}
          onChange={valueHandleChange}
        />
        <input
          type="text"
          value={firstCurrency || ''}
          onChange={firstCurrencyHandleChange}
        />
        <span>в</span>
        <input
          type="text"
          value={secondCurrency || ''}
          onChange={secondCurrencyHandleChange}
        />
      </form>
      <div>
        <span>Результат</span>
        <span>{result}</span>
      </div>
    </>
  );
};

export default Converter;
