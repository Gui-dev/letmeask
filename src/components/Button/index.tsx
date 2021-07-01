import React, { ButtonHTMLAttributes } from 'react'

import { Container } from './style'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
}

export const Button = ({ title, ...props }: IButtonProps) => {
  return (

    <Container {...props}>
      { title }
    </Container>
  )
}
