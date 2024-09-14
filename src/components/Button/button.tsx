'use client'
import React from 'react'
import * as Styled from './styles'
import { ButtonProps } from '@/types/components/button'

export const Button: React.FC<ButtonProps> = ({
  title,
  ...props
}: ButtonProps) => {
  return <Styled.Button {...props}>{title}</Styled.Button>
}
