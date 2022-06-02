import React from 'react';
import { useLocation, useMatch, useNavigate } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import classes from './Header.module.css';

const Header: React.FC = () => {
  const { baseCurrency, searchCurrencyValue } = useTypedSelector(
    (state) => state.currency
  );

  const { setSearchCurrencyValue } = useActions();

  const location = useLocation();

  const navigate = useNavigate();

  const handleChangeSearchCurrencyValue = (
    event: React.FormEvent<HTMLInputElement>
  ) => setSearchCurrencyValue(event.currentTarget.value);

  return (
    <div className={classes.header__wrapper}>
      {location.pathname === '/all-currencies' ? (
        <>
          <span className={classes.header__baseCurrencyContext}>
            Base Currency:{' '}
            <span
              className={classes.header__baseCurrency}
              onClick={() => navigate('/all-currencies')}
            >
              {baseCurrency.toUpperCase()}
            </span>
          </span>
          <button
            className={classes.header__allCurrenciesBtn}
            onClick={() => navigate('/')}
          >
            Converter
          </button>
          <input
            type="text"
            placeholder="type anything currency"
            autoFocus
            value={searchCurrencyValue || ''}
            onChange={handleChangeSearchCurrencyValue}
            className={classes.header__findCurrency}
          />
        </>
      ) : null}
      {location.pathname === '/' ? (
        <button
          className={classes.header__allCurrenciesBtn}
          onClick={() => navigate('/all-currencies')}
        >
          All Currencies
        </button>
      ) : null}
    </div>
  );
};

export default Header;
