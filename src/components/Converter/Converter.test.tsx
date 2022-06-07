import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../store';
import Converter from './Converter';

describe('Converter component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Converter />
      </Provider>
    );
  });

  test('render Converter component', () => {
    const inputEl = screen.getByPlaceholderText('15 usd in eur');
    const convertBtn = screen.getByText('Convert');
    expect(inputEl).toBeInTheDocument();
    expect(convertBtn).toBeInTheDocument();
  });

  test('text input', () => {
    const inputEl = screen.getByPlaceholderText('15 usd in eur');
    expect(screen.queryByPlaceholderText('15 usd in eur')).toContainHTML('');
    userEvent.type(inputEl, '15 usd in rub');
    expect(screen.queryByPlaceholderText('15 usd in eur')).toContainHTML(
      '15 usd in rub'
    );
  });

  test('convert button', () => {
    const inputEl = screen.getByPlaceholderText('15 usd in eur');
    userEvent.type(inputEl, '15 usd in rub');
    const convertBtn = screen.getByText('Convert');
    userEvent.click(convertBtn);
    expect(convertBtn).not.toBeInTheDocument();
    const resultBlock = screen.getByTestId('result-block');
    expect(resultBlock).toBeInTheDocument();
  });
});
