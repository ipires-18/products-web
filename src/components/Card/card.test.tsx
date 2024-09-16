import { render, screen } from '@testing-library/react'
import { Card } from './card'

describe('Card Component', () => {
  const mockProps = {
    imageSrc: '/path/to/image.jpg',
    title: 'Test Title',
    description: 'This is a test description that will be truncated.',
    price: 199.99
  }

  it('renders correctly', () => {
    render(<Card {...mockProps} />)

    expect(screen.getByAltText('img')).toBeInTheDocument()

    expect(screen.getByText('Test Title')).toBeInTheDocument()

    expect(screen.getByText('This is a test description that will be truncated.')).toBeInTheDocument()

    expect(screen.getByText('R$ 199,99')).toBeInTheDocument()
  })
})
