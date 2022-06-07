import { render, screen } from '@testing-library/react';
import Preloader from './Preloader';

describe('Preloader component', () => {
  test('render Preloader', () => {
    render(<Preloader />);
    const preloaderImg = screen.getByAltText('preloader');
    expect(preloaderImg).toBeInTheDocument();
  });
});
