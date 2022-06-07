import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import classes from './AllCurrencies.module.css';
import Modal from './Modal/Modal';

interface AllCurrenciesProps {
  isShowModal: boolean;
  setIsShowModal: (isShowModal: boolean) => void;
}

const AllCurrencies: React.FC<AllCurrenciesProps> = (props) => {
  const { rates, baseCurrency, allCurrencies, searchCurrencyValue } =
    useTypedSelector((state) => state.currency);

  const { setAllCurrencies, filterCurrencies, setBaseCurrency } = useActions();

  useEffect(() => {
    if (allCurrencies && searchCurrencyValue) {
      filterCurrencies(allCurrencies, searchCurrencyValue);
    } else {
      setAllCurrencies(baseCurrency, rates);
    }
  }, [searchCurrencyValue]);

  if (allCurrencies?.length === 0)
    return (
      <div
        className={`${classes.allCurrencies__wrapper} ${classes.allCurrencies__wrapper_notFound}`}
      >
        <h1 data-testid="currency-not-found">currency wasn't found</h1>
      </div>
    );

  return (
    <div
      className={classes.allCurrencies__wrapper}
      data-testid="all-currencies-wrapper"
    >
      {allCurrencies?.map((currency, index) => {
        const key = Object.keys(currency)[0];
        return (
          <div key={index} className={classes.allCurrencies__element}>
            <span>{key}</span>
            <span>{currency[key]}</span>
          </div>
        );
      })}
      <Modal
        rates={rates}
        setBaseCurrency={setBaseCurrency}
        isShowModal={props.isShowModal}
        setIsShowModal={props.setIsShowModal}
      />
    </div>
  );
};

export default AllCurrencies;
