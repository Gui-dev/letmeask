import styled from 'styled-components'
import { ButtonHTMLAttributes } from 'react'


type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Container = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: 500;
  color: #FFF;
  height: 5rem;
  margin-top: 6.4rem;
  padding: 0 3.2rem;
  background-color: #835AFD;
  border: 0;
  border-radius: .8rem;
  cursor: pointer;
  transition: filter 0.2s;

  img {
    margin-right: .8rem;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: .6;
    cursor: not-allowed;
  }
`
