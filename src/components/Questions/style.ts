import styled from 'styled-components'

export const Container = styled.article`
  padding: 2.4rem;
  background-color: #FEFEFE;
  border-radius: .8rem;
  box-shadow: 0 2px 1.2rem rgba(0, 0, 0, .04);

  & + article {
    margin-top: .8rem;
  }

  p {
    font-size: 1.6rem;
    color: #29292E;
  }
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.4rem;

  .user-info {
    display: flex;
    align-items: center;

    img {
      height: 3.2rem;
      width: 3.2rem;
      margin-right: .8rem;
      border-radius: 50%;
    }

    > h1 {
      font-size: 1.4rem;
      color: #737380;
    }
  }
`
