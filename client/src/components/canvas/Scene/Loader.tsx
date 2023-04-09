import * as S from './styles'
import { Html } from '@react-three/drei'
import { GLTFLoader } from 'three-stdlib'

export const Loader = () => {
  return (
    <Html center>
      <S.SpinnerCover>
        <S.Spinner />
        <div className='flex items-center justify-center w-40 my-1 text-white border border-white rounded-full text-xxs'>
          포스터를 불러오는 중입니다...
        </div>
      </S.SpinnerCover>
    </Html>
  )
}
