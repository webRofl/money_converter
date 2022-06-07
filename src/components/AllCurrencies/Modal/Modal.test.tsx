import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../store';
import Modal from './Modal';

describe('Modal component', () => {
  test('render Modal component', () => {
    render(
      <Provider store={store}>
        <Modal
          rates={{}}
          setBaseCurrency={() => null}
          setIsShowModal={() => null}
          isShowModal={false}
        />
      </Provider>
    );
    const wrapper = screen.getByTestId('modal-wrapper');
    expect(wrapper).toBeInTheDocument();
  });
});
