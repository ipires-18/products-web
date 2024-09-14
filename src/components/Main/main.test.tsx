import React from 'react'
import { render } from '@testing-library/react'
import { Main } from './main'

test('renders Main component with correct text', () => {
  const { container } = render(<Main />)

  expect(container.firstChild).toHaveStyle({ 'background-color': 'gray' })
})
