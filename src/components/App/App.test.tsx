import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../../store';
import App from './App';

describe('App component', () => {
  test('render Preloader component', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );
    const preloader = screen.getByAltText('preloader');
    expect(preloader).toBeInTheDocument();
  });
});
