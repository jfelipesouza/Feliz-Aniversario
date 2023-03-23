import styled from 'styled-components'

export const Container = styled.div`
  width: 30vw;
  height: calc(50vw - 25vh);
  min-width: 300px;
  max-width: 1000px;

  -webkit-perspective: 1500px;
  perspective: 1500px;

  cursor: pointer;
`

type OutsideCardProps = {
  flip?: Boolean
}
export const OutsideCard = styled.div<OutsideCardProps>`
  border: 1px solid ${({ theme }) => theme.colors.black};
  height: 100%;
  width: 30vw;
  position: absolute;

  z-index: 1;
  transform-origin: left;
  transition: 2s;

  transform: rotateX(0deg) rotateY(${({ flip }) => (flip ? '-140deg' : '0deg')});
`
export const FrontOutsideCard = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: white;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotatex(0deg);
`
export const BackOutsideCard = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    to left,
    ${({ theme }) => theme.colors.gray},
    ${({ theme }) => theme.colors.white} 40%
  );
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotate(0deg, 180deg);
`
export const InsideCard = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.black};
  height: 100%;
  width: 30vw;
  display: flex;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.gray},
    ${({ theme }) => theme.colors.white} 40%
  );
  line-height: 3;
  padding: 0 20px;
  text-align: center;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
