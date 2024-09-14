// Card.test.tsx
import React from 'react'
import { render, screen } from '@testing-library/react'
import { Card } from './card'

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  )
}))

const props = {
  imageSrc:
    'https://www.istockphoto.com/photo/stocked-shelves-in-grocery-store-aisle-gm521812367-521812367?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fpt%2Fimages%2Fsearch%2Fproducst%2F&utm_term=products',
  title: 'Bordeaux Getaway',
  description: 'Entire home in Bordeaux',
  price: 'Total: R$ 762,00'
}

test('renders Card component', () => {
  render(<Card {...props} />)

  const imageElement = screen.getByAltText('img')
  expect(imageElement).toBeInTheDocument()
  expect(imageElement).toHaveAttribute('src', props.imageSrc)

  const titleElement = screen.getByText(props.title)
  expect(titleElement).toBeInTheDocument()

  const descriptionElement = screen.getByText(props.description)
  expect(descriptionElement).toBeInTheDocument()

  const priceElement = screen.getByText(props.price)
  expect(priceElement).toBeInTheDocument()
})
