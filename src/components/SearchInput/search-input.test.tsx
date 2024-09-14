import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { SearchInput } from './search-input'

jest.mock('../Button/button', () => ({
  Button: (props: any) => <button {...props} data-testid="search-button" />
}))

describe('SearchInput Component', () => {
  test('renders SearchInput with initial state', () => {
    render(<SearchInput onSearch={() => {}} />)

    expect(
      screen.getByPlaceholderText('Buscar produtos...')
    ).toBeInTheDocument()
    expect(screen.getByTestId('search-button')).toBeInTheDocument()
  })

  test('updates query state when input changes', () => {
    render(<SearchInput onSearch={() => {}} />)

    const input = screen.getByPlaceholderText(
      'Buscar produtos...'
    ) as HTMLInputElement

    fireEvent.change(input, { target: { value: 'Novo produto' } })

    expect(input.value).toBe('Novo produto')
  })

  test('calls onSearch with the correct query when button is clicked', () => {
    const onSearchMock = jest.fn()

    render(<SearchInput onSearch={onSearchMock} />)

    const input = screen.getByPlaceholderText(
      'Buscar produtos...'
    ) as HTMLInputElement
    const button = screen.getByTestId('search-button')

    fireEvent.change(input, { target: { value: 'Produto teste' } })

    fireEvent.click(button)

    expect(onSearchMock).toHaveBeenCalledWith('Produto teste')
  })
})
