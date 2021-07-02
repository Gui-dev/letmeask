import React from 'react'

import illustrationImg from './../../assets/images/illustration.svg'
import logoImg from './../../assets/images/logo.svg'
import { Button } from './../../components/Button'
import { Container, Aside, Main } from './style'

export const NewRoom: React.FC = () => {
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

          <form>
            <input
              type="text"
              placeholder="Nome da sala"
            />
            <Button
              title="Criar sala"
            />
          </form>

          <p>Quer entar em uma sala existente, <a href="#">clique aqui</a></p>
        </div>
      </Main>
    </Container>
  )
}
