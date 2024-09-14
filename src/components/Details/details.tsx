'use client'
import React from 'react'
import * as Styled from './styles'
import Image from 'next/image'
import { DetailsProps } from '@/types/components/details'
import Link from 'next/link'
import { calculateDiscountedPrice } from '@/utils/calculateDiscountedPrice'

export const Details: React.FC<DetailsProps> = ({
  title,
  brand,
  category,
  color,
  description,
  discount,
  image,
  model,
  price
}) => {
  const discountedPrice = calculateDiscountedPrice(
    Number(price),
    Number(discount)
  )

  return (
    <Styled.Container>
      <Styled.ContentImg>
        <Link href="/">
          <Styled.TextBack>Voltar</Styled.TextBack>
        </Link>
        <Styled.ImageWrapper>
          <Image
            src={image ?? '/default-image.png'}
            alt="img"
            fill
            style={{ objectFit: 'contain' }}
          />
        </Styled.ImageWrapper>
      </Styled.ContentImg>
      <Styled.Content>
        <Styled.ProductTitle>{title}</Styled.ProductTitle>
        <Styled.ProductDetails>
          <Styled.ProductDetail>
            <strong>Brand:</strong> {brand}
          </Styled.ProductDetail>
          <Styled.ProductDetail>
            <strong>Model:</strong> {model}
          </Styled.ProductDetail>
          <Styled.ProductDetail>
            <strong>Color:</strong> {color}
          </Styled.ProductDetail>
          <Styled.ProductDetail>
            <strong>Category:</strong> {category}
          </Styled.ProductDetail>
          <Styled.ProductDetail>
            <strong>Description:</strong> {description}
          </Styled.ProductDetail>
          <Styled.ProductDetail>
            <strong>Price:</strong> R$ {price}
          </Styled.ProductDetail>
          <Styled.ProductDetail>
            <strong>Discount:</strong> {discount}%
          </Styled.ProductDetail>
          <Styled.ProductDetail>
            <strong>TOTAL:</strong> {discountedPrice}
          </Styled.ProductDetail>
        </Styled.ProductDetails>
      </Styled.Content>
    </Styled.Container>
  )
}
