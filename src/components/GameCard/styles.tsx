import styled from 'styled-components'

export const CardContent = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  transform-style: preserve-3d;
  transition: transform 600ms ease-in-out;
`

export const ContentFlipped = styled.div`
  transform: rotateY(180deg);
`
export const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8rem;
  cursor: pointer;
`

export const CardFaceFront = styled.div`
  background: #13141f;
  color: #ffffff;
`

export const CardFaceBack = styled.div`
  background: crimson;
  color: #000;
  transform: rotateY(180deg);
`
