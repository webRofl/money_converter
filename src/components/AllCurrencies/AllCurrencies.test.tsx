import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import AllCurrencies from './AllCurrencies';

describe('AllCurrencies component', () => {
  test('render AllCurrencies component', () => {
    render(
      <Provider store={store}>
        <AllCurrencies isShowModal={false} setIsShowModal={() => null} />
      </Provider>
    );
    const wrapper = screen.getByTestId('currency-not-found');
    expect(wrapper).toBeInTheDocument();
  });
});
