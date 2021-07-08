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

export const Room = () => {
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
          <RoomCode code={ roomId }/>
        </div>
      </Header>

      <Main>
        <div className="room-title">
          <h1>Sala { title }</h1>
          { questions.length && <span>{questions.length} perguntas</span> }
        </div>

        <form onSubmit={ handleSendQuestion }>
          { error && (
            <Error>{ errorMessage }</Error>
          ) }
          <textarea
            placeholder="O que você quer perguntar ?"
            value={ newQuestion }
            onChange={ event => setNewQuestion(event.target.value) }
          />

          <div className="form-footer">
            {
              user
              ? (
                <UserInfo>
                  <img src={user.avatar} alt={user.name} title={user.name} />
                  <span>{ user.name }</span>
                </UserInfo>
              )
              : (
                <span>Para enviar uma pergunta, faça seu <button>login</button>.</span>
              )
            }

            <Button
              type="submit"
              disabled={!user}
              title="Enviar pergunta"
            />
          </div>
        </form>

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
