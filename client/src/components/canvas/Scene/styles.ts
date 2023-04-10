import styled from 'styled-components'
import tw from 'twin.macro'
export const SpinnerCover = styled.div`
  ${tw`
  fixed
  top-1/2
  left-1/2
  -translate-x-1/2
  -translate-y-1/2
  flex
  flex-col
  w-fit
  h-fit
  justify-center
  items-center
  `}
`

export const Spinner = styled.span`
  width: 40px;
  height: 40px;
  display: flex;
  background: #000;
  padding: 4px;
  border-radius: 12%;
  overflow: hidden;
  box-sizing: border-box;
  animation: flipX 1.3s linear infinite;
  color: white;

  @keyframes flipX {
    0% {
      transform: perspective(200px) rotateX(0deg) rotateY(0deg);
    }
    50% {
      transform: perspective(200px) rotateX(-180deg) rotateY(0deg);
    }
    100% {
      transform: perspective(200px) rotateX(-180deg) rotateY(-180deg);
    }
  }
`
