import * as S from './styles'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

export const Dom = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  return (
    <>
      {isOpen && (
        <div className='fixed z-50 flex items-center justify-center w-screen h-screen bg-black bg-opacity-10 backdrop-blur-sm'>
          <div className='flex relative flex-col gap-4 justify-center items-center bg-white bg-opacity-90  p-8 w-fit h-fit rounded-2xl'>
            <button className='absolute top-2 right-2' onClick={() => setIsOpen(false)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='black'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
            <p className='flex flex-col justify-center items-center text-center w-fit text-xl'>
              🙌 Open Source Lab 2023 Recruit 🙌
              <p className='flex w-fit text-xs text-center'>*아래에 버튼을 누르면 신청 구글폼으로 연결됩니다.</p>
            </p>
            <button
              onClick={() =>
                router.push(
                  'https://docs.google.com/forms/d/e/1FAIpQLSehAWP5OzQU2OQQkSkBxtR1uEuNQS_X0-NCXRc0HUOrwFDb7g/viewform?usp=sf_link/',
                )
              }
              className='flex px-4 py-1 text-lg text-white border border-black bg-black text-white rounded-full w-fit hover:bg-white hover:text-black active:bg-white active:text-black'>
              지원하러가기
            </button>
          </div>
        </div>
      )}
      <div className='fixed flex items-center justify-center h-full w-fit'>
        <div className='fixed z-10 flex flex-col justify-center w-full h-full bg-black opacity-70' />
        <Image src='/data/renderimage.png' alt='OSL2023Poster' width={1190} height={1683} />
      </div>
      <div className='fixed z-20 flex flex-col justify-start w-full p-4 text-white h-fit'>
        <p className='flex w-fit  text-xxs'>Hongik univ. Interactive media art crew</p>
        <h1 className='flex text-2xl font-bold w-fit'>
          OPEN SOURCE LAB <br /> 2023 RECRUIT
        </h1>
      </div>
      <div className='fixed bottom-0 right-0 z-50 flex flex-col justify-start p-4 gap-4 h-fit'>
        <button
          onClick={() => setIsOpen(true)}
          className='flex px-4 py-2 text-lg font-bold text-white bg-white border-2 border-white rounded-full bg-opacity-10 backdrop-blur-sm animate-pulse'>
          🔥신청하기
        </button>
      </div>
      <div className='fixed bottom-0 z-20 flex flex-col justify-start w-full p-4 text-white gap-4 h-fit'>
        <div className='flex flex-col '>
          <p className='flex text-xs font-bold w-fit'>활동내용</p>
          <p className='flex w-fit  text-xxs'>
            다양한 미디어를 활용한 인터랙티브 <br /> 미디어 아트 정보 교류 및 전시
          </p>
        </div>
        <div className='flex flex-col '>
          <p className='flex text-xs font-bold w-fit'>모집대상</p>
          <p className='flex w-fit  text-xxs'>
            인터랙션을 활용한 디지털 <br /> 미디엉 아트에 관심이 많은 <br /> 재학생 및 휴학생
          </p>
        </div>
        <div className='flex flex-col '>
          <p className='flex text-xs font-bold w-fit'>지원기간</p>
          <p className='flex w-fit  text-xxs'>2023.04.10 ~ 2023.04.14</p>
        </div>
        <div className='flex flex-col '>
          <p className='flex text-xs font-bold w-fit'>지원방법</p>
          <p className='flex w-fit  text-xxs'>
            구글 폼 작성 후 간간한 포트폴리오 <br /> 개별연락 후 비대면 젼접 실시
          </p>
        </div>
      </div>
      <button
        onClick={() => router.push('https://hi-oslab.github.io/')}
        className='fixed right-0 z-20 flex flex-col justify-start p-4 text-white gap-4 h-fit'>
        <Image src='/img/logo.png' width={40} height={40} alt={''} />
      </button>
    </>
  )
}
