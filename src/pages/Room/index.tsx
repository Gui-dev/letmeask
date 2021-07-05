import React from 'react'

import logoImg from './../../assets/images/logo.svg'
import { Button } from '../../components/Button'
import { Container, Header, Main } from './style'

export const Room: React.FC = () => {
  return (
    <Container>
      <Header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" title="Letmeask" />
          <div>#3287879</div>
        </div>
      </Header>

      <Main>
        <div className="room-title">
          <h1>Sala React</h1>
          <span>4 perguntas</span>
        </div>

        <form>
          <textarea placeholder="O que você quer perguntar ?"/>

          <div className="form-footer">
            <span>Para enviar uma pergunta, faça seu <button>login</button>.</span>
            <Button type="submit" title="Enviar pergunta"/>
          </div>
        </form>
      </Main>
    </Container>
  )
}
