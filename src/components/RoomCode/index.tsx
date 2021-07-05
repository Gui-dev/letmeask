import React, { useEffect, useState } from 'react'

import copyImg from './../../assets/images/copy.svg'
import { Container } from './style'

interface IRoomCodeProps {
  code: string
}

export const RoomCode = ({ code }: IRoomCodeProps) => {

  const [copy, setCopy] = useState(false)

  useEffect(() => {
    if (copy) {
      setTimeout(() => {
        setCopy(false)
      }, 3000)
    }
  }, [copy])

  const copyRoomCodeToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopy(true)
  }

  return (
    <Container onClick={ copyRoomCodeToClipboard }>
      <div>
        <img src={copyImg} alt="Copiar room code" title="Copiar room code" />
      </div>
      <span>Sala: {code}</span>
      {copy && (
        <span className="copy">Copiado</span>
      )}
    </Container>
  )
}
