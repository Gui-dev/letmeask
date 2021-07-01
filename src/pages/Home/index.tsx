import React from 'react'

import illustrationImg from './../../assets/images/illustration.svg'
import logoImg from './../../assets/images/logo.svg'
import googleIconImg from './../../assets/images/google-icon.svg'
import { Button } from './../../components/Button'
import { Container, Aside, Main } from './style'

export const Home: React.FC = () => {
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
          <button className="create-room">
            <img src={googleIconImg} alt="Logo do Google" title="Logo do Google"/>
            Crie sua sala com o Google
          </button>

          <div className="separator">ou entre em uma sala</div>

          <form>
            <input
              type="text"
              placeholder="Digite o código da sala"
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
