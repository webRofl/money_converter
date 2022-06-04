import React from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { Rates } from '../../../store/types/currency';
import classes from './Modal.module.css';

interface ModalProps {
  rates: Rates;
  setBaseCurrency: (base: string) => void;
  isShowModal: boolean;
  setIsShowModal: (isShowModal: boolean) => void;
}

const Modal: React.FC<ModalProps> = (props) => {
  const { setAllCurrencies } = useActions();

  const { rates } = useTypedSelector((state) => state.currency);

  const handleBtnClick = (event: React.FormEvent<HTMLButtonElement>) => {
    props.setBaseCurrency(event.currentTarget.textContent || 'usd');
    props.setIsShowModal(false);
    setAllCurrencies(event.currentTarget.textContent || 'usd', rates);
  };

  return (
    <div
      className={
        props.isShowModal
          ? `${classes.modal__wrapper_active} ${classes.modal__wrapper}`
          : classes.modal__wrapper
      }
    >
      <div className={classes.modal__scrollWrapper}>
        <div
          className={
            props.isShowModal
              ? `${classes.modal__content_active} ${classes.modal__content}`
              : classes.modal__content
          }
          onClick={() => props.setIsShowModal(false)}
        >
          {Object.keys(props.rates).map((key, index) => {
            return (
              <button
                key={index}
                onClick={handleBtnClick}
                className={classes.modal__element}
              >
                {key.toUpperCase()}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Modal;
