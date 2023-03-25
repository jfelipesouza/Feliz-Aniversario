import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  background-color: ${({ theme }) => theme.colors.secundary};
`

export const SideContainer = styled.div`
  width: 50vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  flex-direction: column;
`
export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  font-family: 'Inter', sans-serif;
  width: 100%;
  color: transparent;
  -webkit-background-clip: text;
  background-image: linear-gradient(
    to top,
    #000,
    #e63946,
    #ff006e,
    #c1121f,
    #780000,
    #000
  );
`
export const Description = styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;
  font-weight: bold;
  text-align: left;
  font-family: 'Inter', sans-serif;
  color: ${({ theme }) => theme.colors.black};
`
export const Button = styled.a`
  display: flex;
  padding: 1rem 4rem;
  font-size: 1.4rem;
  color: white;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-top: 2rem;
  border-radius: 0.4rem;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`
