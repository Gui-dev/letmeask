import React from 'react'
import Lottie from 'react-lottie'

import loadLottie from './../../assets/images/lottie/loading.json'
import { Container } from './style'

export const Load = () => {
  return (
    <Container>
      <Lottie
        options={{
          animationData: loadLottie,
          loop: true,
          autoplay: true,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
          }
        }}
        height={300}
        width={300}
      />
    </Container>
  )
}
