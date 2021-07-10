import React from 'react'
import { useHistory, useParams } from 'react-router-dom'

import logoImg from './../../assets/images/logo.svg'
import deleteImg from './../../assets/images/delete.svg'
import checkImg from './../../assets/images/check.svg'
import answerImg from './../../assets/images/answer.svg'
import { Button } from '../../components/Button'
import { RoomCode } from '../../components/RoomCode'
import { useAuth } from '../../hooks/useAuth'
import { Load } from '../../components/Load'
import { Questions } from '../../components/Questions'
import { useRoom } from '../../hooks/useRoom'
import { database } from '../../services/firebase'

import { Container, Header, Main, QuestionsList } from './style'

interface IRoomParams {
  id: string
}

export const AdminRoom = () => {
  const history = useHistory()
  const params = useParams<IRoomParams>()
  const roomId = params.id

  const { user } = useAuth()
  const { questions, title } = useRoom(roomId)

  const handleEndRoom = async () => {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date()
    })

    history.push('/')
  }

  const handleCheckQuestionAsAnswered = async (questionId: string) => {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true
    })
  }

  const handleHighlightQuestion = async (questionId: string) => {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true
    })
  }


  const handleDeleteQuestion = async (questionId: string) => {
    if (window.confirm('Tem certeza que você deseja excluir está pergunta')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
    }
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
            <Button
              title="Encerrar sala"
              isOutlined
              onClick={ handleEndRoom }
            />
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
                isAnswered={question.isAnswered}
                isHighlighted={ question.isHighlighted }
              >

                { !question.isAnswered && (
                  <>
                    <button
                      onClick={ () => handleCheckQuestionAsAnswered(question.id) }
                    >
                      <img src={checkImg} alt="Marcar pergunta como respondida" title="Marcar pergunta como respondida"/>
                    </button>

                    <button
                      onClick={ () => handleHighlightQuestion(question.id) }
                    >
                      <img src={answerImg} alt="Da destaque a pergunta" title="Da destaque a pergunta"/>
                    </button>
                  </>
                ) }

                <button
                  onClick={ () => handleDeleteQuestion(question.id) }
                >
                  <img src={deleteImg} alt="Remover pergunta" title="Remover pergunta"/>
                </button>
              </Questions>
            )
          }) }
        </QuestionsList>

      </Main>
    </Container>
  )
}
