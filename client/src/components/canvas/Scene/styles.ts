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
  padding: 10px;
  display: flex;
  background: #fff;
  border-radius: 10%;
  box-sizing: border-box;
  animation: flipX 1s linear infinite;

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
