import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Preloader from '../common/Preloader/Preloader';
import Converter from '../Converter/Converter';
import Header from '../Header/Header';
import classes from './App.module.css';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import AllCurrencies from '../AllCurrencies/AllCurrencies';

const App: React.FC = () => {
  const { rates } = useTypedSelector((state) => state.currency);

  const { getCurrencyAsync } = useActions();

  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  useEffect(() => {
    getCurrencyAsync();
  }, []);

  if (Object.keys(rates).length === 0) return <Preloader />;

  return (
    <div className={classes.app__wrapper} data-testid="app-wrapper">
      <Header setIsShowModal={setIsShowModal} />
      <Routes>
        <Route path="/" element={<Converter />} />
        <Route
          path="/all-currencies"
          element={
            <AllCurrencies
              isShowModal={isShowModal}
              setIsShowModal={setIsShowModal}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
