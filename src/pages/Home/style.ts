import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`

export const Aside = styled.aside`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 7;
  color: #FFF;
  background-color: #835AFD;
  padding: 12rem 8rem;

  img {
    max-width: 32rem;
  }

  h1 {
    font-size: 3.6rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    line-height: 4.2rem;
    margin-top: 1.6rem;
  }

  p {
    font-size: 2.4rem;
    line-height: 3.2rem;
    color: #F8F8F8;
    margin-top: 1.6rem;
  }
`

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 8;
  padding: 0 3.2rem;

  .main-content {
    display: flex;
    align-items: stretch;
    flex-direction: column;
    text-align: center;
    width: 100%;
    max-width: 32rem;

    > img {
      align-self: center;
    }

    .create-room {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.6rem;
      font-weight: 500;
      color: #FFF;
      height: 5rem;
      margin-top: 6.4rem;
      background-color: #EA4335;
      border: 0;
      border-radius: .8rem;
      cursor: pointer;
      transition: filter 0.2s;

      img {
        margin-right: .8rem;
      }

      &:hover {
        filter: brightness(0.9);
      }
    }

    .separator {
      display: flex;
      align-items: center;
      font-size: 1.4rem;
      color: #A8A8B3;
      margin: 3.2rem 0;

      &::before {
        content: '';
        flex: 1;
        height: 1px;
        background-color: #A8A8B3;
        margin-right: 1.6rem;
      }

      &::after {
        content: '';
        flex: 1;
        height: 1px;
        background-color: #A8A8B3;
        margin-left: 1.6rem;
      }
    }

    form {
      display: flex;
      flex-direction: column;

      input {
        font-size: 1.6rem;
        padding: 0 1.6rem;
        height: 5rem;
        background-color: #FFF;
        border: 1px solid #A8A8B3;
        border-radius: .8rem;
      }

      button {
        margin-top: 1.6rem;
      }
    }
  }
`

export const Error = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  color: #EA4335;
  margin-bottom: 1.6rem;
`
