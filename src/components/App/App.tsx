import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Preloader from '../common/Preloader/Preloader';
import Converter from '../Converter/Converter';
import Header from '../Header/Header';
import classes from './App.module.css';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

const App: React.FC = () => {
  const { rates } = useTypedSelector((state) => state.currency);

  const { getCurrencyAsync } = useActions();

  useEffect(() => {
    getCurrencyAsync();
  }, []);

  if (Object.keys(rates).length === 0) return <Preloader />;

  return (
    <div className={classes.app__wrapper}>
      <Header />
      <Routes>
        <Route path="/" element={<Converter />} />
      </Routes>
    </div>
  );
};

export default App;
