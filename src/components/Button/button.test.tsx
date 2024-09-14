import React from 'react'
import { render } from '@testing-library/react'
import { Button } from './button'

test('renders Button component with correct text', () => {
  const { getByText } = render(<Button title="Click Me" />)
  const buttonElement = getByText(/click me/i)
  expect(buttonElement).toBeInTheDocument()
})
