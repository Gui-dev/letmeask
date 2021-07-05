import styled from 'styled-components'

export const Container = styled.button`
  position: relative;
  display: flex;
  height: 4rem;
  background-color: #FFF;
  border: 1px solid #835AFD;
  border-radius: .8rem;
  cursor: pointer;
  overflow: hidden;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    background-color: #835AFD;
    padding: 0 1.2rem;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    font-size: 1.4rem;
    font-weight: 500;
    width: 23rem;
    padding: 0 1.6rem 0 1.2rem;
  }

  .copy {
    position: absolute;
    left: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    height: 4rem;
    background-color: rgba(0, 0, 0, .8);
  }
`
