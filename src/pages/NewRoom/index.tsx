import React, { FormEvent, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { database } from '../../services/firebase'
import { useAuth } from '../../hooks/useAuth'


import illustrationImg from './../../assets/images/illustration.svg'
import logoImg from './../../assets/images/logo.svg'
import { Button } from './../../components/Button'
import { Container, Aside, Main } from './style'

export const NewRoom = () => {
  const { user } = useAuth()
  const history = useHistory()
  const [newRoom, setNewRoom] = useState('')

  const handleCreateRoom = async ( event: FormEvent ) => {
    event.preventDefault()

    if (newRoom.trim() === '') {
      return
    }

    const roomRef = database.ref('rooms')
    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id
    })

    history.push(`/rooms/${firebaseRoom.key}`)
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
          <h1>Criar uma nova sala</h1>

          <form onSubmit={ handleCreateRoom }>
            <input
              type="text"
              placeholder="Nome da sala"
              value={ newRoom }
              onChange={ event => setNewRoom(event.target.value) }
            />
            <Button
              title="Criar sala"
            />
          </form>

          <p>Quer entar em uma sala existente, <Link to="/">clique aqui</Link></p>
        </div>
      </Main>
    </Container>
  )
}
