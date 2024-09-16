import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SearchInput } from './search-input';
import { useProducts } from '@/context/ProductsContext';

jest.mock('../../context/ProductsContext', () => ({
  useProducts: jest.fn(),
}));

jest.mock('../../components/Button/button', () => ({
  Button: ({ title, onClick }: { title: string; onClick: () => void }) => (
    <button onClick={onClick}>{title}</button>
  ),
}));

test('renders SearchInput and handles input and button interactions', () => {
  const searchProductsMock = jest.fn();

  (useProducts as jest.Mock).mockReturnValue({
    searchProducts: searchProductsMock,
  });

  render(<SearchInput />);

  const inputElement = screen.getByPlaceholderText('Enter a product...');
  expect(inputElement).toBeInTheDocument();

  const buttonElement = screen.getByText('Search');
  expect(buttonElement).toBeInTheDocument();

  fireEvent.change(inputElement, { target: { value: 'Laptop' } });
  expect(inputElement).toHaveValue('Laptop');

  fireEvent.click(buttonElement);
  expect(searchProductsMock).toHaveBeenCalledWith('Laptop');
});
