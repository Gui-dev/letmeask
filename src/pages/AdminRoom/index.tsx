import React, { FormEvent, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import logoImg from './../../assets/images/logo.svg'
import { Button } from '../../components/Button'
import { RoomCode } from '../../components/RoomCode'
import { useAuth } from '../../hooks/useAuth'
import { database } from '../../services/firebase'
import { Load } from '../../components/Load'
import { Questions } from '../../components/Questions'
import { useRoom } from '../../hooks/useRoom'

import { Container, Header, Main, Error, UserInfo, QuestionsList } from './style'

interface IRoomParams {
  id: string
}

export const AdminRoom = () => {
  const [newQuestion, setNewQuestion] = useState('')
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const params = useParams<IRoomParams>()
  const roomId = params.id

  const { user } = useAuth()
  const { questions, title } = useRoom(roomId)

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false)
        setErrorMessage('')
      }, 4000)
    }
  }, [error])

  const handleSendQuestion = async (event: FormEvent) => {
    event.preventDefault()

    if (newQuestion.trim() === '') {
      setError(true)
      setErrorMessage('Ooooops, você não gostaria de fazer uma pergunta ?')
      return
    }

    if (!user) {
      setError(true)
      setErrorMessage('Ooooops, você precisa está logado para fazer uma pergunta')
      return
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar
      },
      isHighlighted: false,
      isAnswered: false
    }

    await database.ref(`rooms/${roomId}/questions`).push(question)
    setNewQuestion('')
  }

  if (!user) {
    return (
      <Load />
    )
  }

  return (

    <Container>
      <Header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" title="Letmeask" />
          <div>
            <RoomCode code={ roomId }/>
            <Button title="Encerrar sala" isOutlined/>
          </div>
        </div>
      </Header>

      <Main>
        <div className="room-title">
          <h1>Sala { title }</h1>
          { questions.length && <span>{questions.length} perguntas</span> }
        </div>

        <QuestionsList>
          { questions.map(question => {
            return (
              <Questions
                key={ String(question.id) }
                author={ question.author }
                content={ question.content }
              />
            )
          }) }
        </QuestionsList>

      </Main>
    </Container>
  )
}
