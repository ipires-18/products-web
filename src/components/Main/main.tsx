import React, { PropsWithChildren } from 'react'
import { MainStyled } from './styles'

export const Main = ({ children }: PropsWithChildren) => {
  return <MainStyled>{children}</MainStyled>
}
