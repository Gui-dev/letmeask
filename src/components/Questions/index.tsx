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
  children: React.ReactNode
}

export const Questions = ({ author, content, isAnswered = false, isHighlighted = false, children }: IQuestionsProps) => {
  return (
    <Container isAnswered={isAnswered} isHighlighted={isHighlighted}>
      <p>{content}</p>

      <Footer>
        <div className="user-info">
          <img src={ author.avatar } alt={ author.name } />
          <h1>{ author.name }</h1>
        </div>

        <div>{ children }</div>
      </Footer>
    </Container>
  )
}
