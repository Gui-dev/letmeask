import styled from 'styled-components'

export const Container = styled.div`

`

export const Header = styled.header`
  padding: 2.4rem;
  border-bottom: 1px solid #E2E2E2;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1120px;
    margin: 0 auto;

    > img {
      max-height: 4.5rem;
    }

    > div {
      font-size: 1.6rem;
    }
  }
`

export const Main = styled.main`
  max-width: 80rem;
  margin: 0 auto;

  .room-title {
    display: flex;
    align-items: center;
    margin: 3.2rem 0 2.4rem;

    h1 {
      font-size: 2.4rem;
      font-family: 'Poppins', sans-serif;
      color: #29292E;
    }

    span {
      font-size: 1.4rem;
      font-weight: 500;
      color: #FFF;
      margin-left: 1.6rem;
      padding: .8rem 1.6rem;
      background-color: #E559F9;
      border-radius: 9999px;
    }
  }

  form {
    margin-top: 2rem;

    textarea {
      font-size: 1.6rem;
      font-family: 'Poppins', sans-serif;
      color: #29292E;
      min-height: 13rem;
      width: 100%;
      margin: 2rem 0;
      padding: 1.6rem;
      background-color: #FEFEFE;
      border: 0;
      border-radius: .8rem;
      box-shadow: 0 2px 1.2rem rgba(0, 0, 0, .04);
      resize: vertical;

      &::placeholder {
        font-size: 1.6rem;
        font-family: 'Poppins', sans-serif;
        color: #29292E;
      }
    }

    .form-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        font-size: 1.4rem;
        font-weight: 500;
        color: #737380;

        button {
          font-size: 1.6rem;
          font-weight: 500;
          text-decoration: underline;
          color: #835AFD;
          background: transparent;
          border: 0;
          cursor: pointer;
        }
      }
    }
  }
`

export const Error = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  color: #EA4335;
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 3.2rem;
    width: 3.2rem;
    margin-right: .8rem;
    border-radius: 50%;
  }

  > span {
    font-size: 1.4rem;
    font-weight: 500;
    color: #29292E;
  }
`
