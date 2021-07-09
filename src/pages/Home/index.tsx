import React, { FormEvent, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import illustrationImg from './../../assets/images/illustration.svg'
import logoImg from './../../assets/images/logo.svg'
import googleIconImg from './../../assets/images/google-icon.svg'
import { Button } from './../../components/Button'
import { useAuth } from '../../hooks/useAuth'
import { database } from '../../services/firebase'

import { Container, Aside, Main, Error } from './style'
import { setTimeout } from 'timers'

export const Home: React.FC = () => {
  const history = useHistory()
  const { signInWithGoogle, user } = useAuth()
  const [roomCode, setRoomCode] = useState('')
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false)
        setErrorMessage('')
      }, 4000)
    }
  }, [error])

  const handleCreateRoom = async () => {
    if (!user) {
      await signInWithGoogle()
    }
    history.push('/rooms/new')
  }

  const handleJoinRoom = async (event: FormEvent) => {
    event.preventDefault()

    if (roomCode.trim() === '') return

    const roomRef = await database.ref(`rooms/${roomCode}`).get()

    if (!roomRef.exists()) {
      setError(true)
      setErrorMessage('Essa sala não existe')
      return
    }

    if (roomRef.val().endedAt) {
      setError(true)
      setErrorMessage('Essa sala já foi fechada')
      return
    }

    history.push(`/rooms/${roomCode}`)
  }

  return (
    <Container>
      <Aside>
        <img src={illustrationImg} alt="ilustração simbolizando perguntas e respostas"/>
        <h1>Crie salas de Q&amp;A ao vivo</h1>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </Aside>

      <Main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" title="Letmeask"/>
          <button className="create-room" onClick={ handleCreateRoom }>
            <img src={googleIconImg} alt="Logo do Google" title="Logo do Google"/>
            Crie sua sala com o Google
          </button>

          <div className="separator">ou entre em uma sala</div>

          <form onSubmit={ handleJoinRoom }>
            { error && (
              <Error>{ errorMessage }</Error>
            ) }
            <input
              type="text"
              placeholder="Digite o código da sala"
              value={ roomCode }
              onChange={ event => setRoomCode(event.target.value) }
            />
            <Button
              title="Entrar na sala"
            />
          </form>
        </div>
      </Main>
    </Container>
  )
}
