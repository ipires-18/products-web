'use client'
import React from 'react'
import * as Styled from './styles'
import Image from 'next/image'
import { truncateText } from '@/utils/truncateText'
import { CardProps } from '@/types/components/card'

export const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  price
}) => {
  const formattedNumberInBRLocale = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
  const descriptionFormatted = truncateText(description, 150)

  return (
    <Styled.Container>
      <Styled.ImageWrapper>
        <Image src={imageSrc} alt="img" fill style={{ objectFit: 'contain' }} />
      </Styled.ImageWrapper>
      <Styled.Content>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Text>{descriptionFormatted}</Styled.Text>
        <Styled.Price>{formattedNumberInBRLocale}</Styled.Price>
      </Styled.Content>
    </Styled.Container>
  )
}
