'use client'

import React from 'react'
import * as Styled from './styles'

interface ButtonProps extends
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  title:string
}

export const Button: React.FC<ButtonProps> = ({ title, ...props }: ButtonProps) => {
  return <Styled.Button {...props}>{title}</Styled.Button>
}
