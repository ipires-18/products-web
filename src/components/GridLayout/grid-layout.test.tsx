import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { GridLayout } from './grid-layout'

jest.mock('./styles', () => ({
  GridLayoutSelector: (props: any) => (
    <select {...props} data-testid="grid-layout-selector" />
  ),
  GridLayout: (props: any) => <div {...props} data-testid="grid-layout" />
}))

describe('GridLayout Component', () => {
  beforeEach(() => {
    render(
      <GridLayout>
        <div>Child Component</div>
      </GridLayout>
    )
  })

  test('renders GridLayout with initial "auto" state', () => {
    expect(screen.getByTestId('grid-layout-selector')).toBeInTheDocument()

    expect(screen.getByText('Padrão automático')).toBeInTheDocument()
    expect(screen.getByText('Exibir uma coluna')).toBeInTheDocument()
    expect(screen.getByText('Exibir duas colunas')).toBeInTheDocument()
    expect(screen.getByText('Exibir três colunas')).toBeInTheDocument()
    expect(screen.getByText('Exibir quatro colunas')).toBeInTheDocument()

    expect(screen.getByTestId('grid-layout-selector')).toHaveValue('auto')

    expect(screen.getByTestId('grid-layout')).toHaveTextContent(
      'Child Component'
    )
  })

  test('changes layout when select value changes', () => {
    fireEvent.change(screen.getByTestId('grid-layout-selector'), {
      target: { value: '4-cols' }
    })

    expect(screen.getByTestId('grid-layout-selector')).toHaveValue('4-cols')
  })

  test('changes layout to "auto" when selected', () => {
    fireEvent.change(screen.getByTestId('grid-layout-selector'), {
      target: { value: 'auto' }
    })

    expect(screen.getByTestId('grid-layout-selector')).toHaveValue('auto')
  })
})
