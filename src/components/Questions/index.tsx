import React from 'react'

import { Container, Footer } from './style'

interface IQuestionsProps {
  id?: string
  author: {
    name: string
    avatar: string
  }
  content: string
  isHighlighted?: boolean
  isAnswered?: boolean
}

export const Questions = ({ author, content }: IQuestionsProps) => {
  return (
    <Container>
      <p>{content}</p>

      <Footer>
        <div className="user-info">
          <img src={ author.avatar } alt={ author.name } />
          <h1>{ author.name }</h1>
        </div>

        <div></div>
      </Footer>
    </Container>
  )
}
