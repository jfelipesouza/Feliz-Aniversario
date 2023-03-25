import styled, { keyframes } from 'styled-components'

const levitationAndPulse = keyframes`
  0%{
    transform: translateY(0) scale(0.98);
  }
  50%{
    transform: translateY(0.5rem) scale(1);
  }
  100%{
    transform: translateY(0) scale(0.98);
  }
`

export const Container = styled.div`
  width: 30vw;
  height: calc(50vw - 25vh);
  min-height: calc(35vw);
  max-height: calc(40vw);
  min-width: 300px;
  max-width: 1000px;

  -webkit-perspective: 2500px;
  perspective: 2500px;

  cursor: pointer;
  transition: 1s;

  animation-name: ${levitationAndPulse};
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  :hover {
    animation-name: none;
    transform: rotate(5deg) scale(1.2);
    box-shadow: inset 100px 20px 100px rgba(0, 0, 0, 0.2),
      0 10px 100px rgba(0, 0, 0, 0.5);
  }
`

type OutsideCardProps = {
  flip?: Boolean
}
export const OutsideCard = styled.div<OutsideCardProps>`
  height: 100%;
  width: 30vw;
  transform: rotateX(0deg) rotateY(${({ flip }) => (flip ? '-150deg' : '0deg')});
  position: relative;
  overflow: hidden;
  transform-origin: left;
  box-shadow: inset 100px 20px 100px rgba(0, 0, 0, 0.2),
    30px 0 50px rgba(0, 0, 0, 0.4);
  transition: 0.6s;
`

export const OutsideCardContent = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
    to left,
    ${({ theme }) => theme.colors.blue},
    ${({ theme }) => theme.colors.ligthBlue}
  );
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotate(0deg, 180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.8rem;

  .image {
    flex: 1;
    stroke: aqua;
  }
`

export const OutsideCardTitle = styled.h2<OutsideCardProps>`
  font-size: ${({ theme }) => theme.fontSize.lg};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Tahoma, sans-serif;
  text-transform: uppercase;
  background-image: linear-gradient(
    120deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.pink} 100%
  );

  padding: 0.4rem;
  border-radius: 0.3rem;
  transition: 0.1s;
  visibility: ${({ flip }) => (flip ? 'hidden' : 'visible')};
  display: ${({ flip }) => (flip ? 'none' : 'flex')};
  color: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: 1800px) {
    font-size: 2.5rem;
  }
`
export const InsideCard = styled.div<OutsideCardProps>`
  position: absolute;
  background-image: linear-gradient(
    to left,
    ${({ theme }) => theme.colors.blue},
    ${({ theme }) => theme.colors.ligthBlue}
  );
  height: 100%;
  width: 30vw;
  z-index: -1;
  left: 0;
  top: 0;

  p {
    font-family: 'Brush Script MT', cursive;
    margin: 0.5rem 2rem;
    color: ${({ theme }) => theme.colors.hueBlack};
    font-size: 1.7rem;
    font-weight: bold;
    text-align: justify;
    visibility: ${({ flip }) => (flip ? 'visibility' : 'hidden')};
  }
  @media screen and (min-width: 1800px) {
    p {
      font-size: 3rem;
    }
  }
`
export const InsideCardTitle = styled.h2`
  font-family: Tahoma, sans-serif;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.hueBlack};
  text-align: center;
  margin: 30px;
  outline-color: ${({ theme }) => theme.colors.hueBlack};
  outline-style: dotted;
  padding: 0.4rem;
  font-size: ${({ theme }) => theme.fontSize.lg};

  @media screen and (min-width: 1800px) {
    font-size: 2.5rem;
  }
`
