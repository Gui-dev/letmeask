import React, { ButtonHTMLAttributes } from 'react'

import { Container } from './style'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  isOutlined?: boolean
}

export const Button = ({ title, isOutlined = false, ...props }: IButtonProps) => {
  return (

    <Container {...props} isOutlined>
      { title }
    </Container>
  )
}
