'use client'

import React from 'react'
import * as Styled from './styles'
import Image from 'next/image'

export const Details: React.FC = () => {
  const product = {
    title: 'Microsoft Xbox X/S Wireless Controller',
    image: 'https://www.designi.com.br/images/preview/10001736.jpg',
    price: 57,
    description:
      'Experience the modernized design of the Xbox Wireless Controller, featuring sculpted surfaces and refined geometry for enhanced comfort during gameplay.',
    brand: 'Microsoft',
    model: 'Xbox X/S',
    color: 'White',
    category: 'Gaming',
    popular: true,
    discount: 4
  }

  return (
    <Styled.Container>
      <Styled.ContentImg>
        <Styled.TextBack>Voltar</Styled.TextBack>
        <Styled.ImageWrapper>
          <Image
            src={product.image}
            alt="img"
            layout="fill"
            objectFit="cover"
          />
        </Styled.ImageWrapper>
      </Styled.ContentImg>
      <Styled.Content>
        <Styled.ProductTitle>{product.title}</Styled.ProductTitle>
        <Styled.ProductDetails>
          <Styled.ProductDetail>
            <strong>Brand:</strong> {product.brand}
          </Styled.ProductDetail>
          <Styled.ProductDetail>
            <strong>Model:</strong> {product.model}
          </Styled.ProductDetail>
          <Styled.ProductDetail>
            <strong>Color:</strong> {product.color}
          </Styled.ProductDetail>
          <Styled.ProductDetail>
            <strong>Category:</strong> {product.category}
          </Styled.ProductDetail>
          <Styled.ProductDetail>
            <strong>Description:</strong> {product.description}
          </Styled.ProductDetail>
          <Styled.ProductDetail>
            <strong>Price:</strong> ${product.price}
          </Styled.ProductDetail>
          <Styled.ProductDetail>
            <strong>Discount:</strong> {product.discount}%
          </Styled.ProductDetail>
          {product.popular && (
            <Styled.PopularLabel>This product is popular!</Styled.PopularLabel>
          )}
        </Styled.ProductDetails>
      </Styled.Content>
    </Styled.Container>
  )
}
