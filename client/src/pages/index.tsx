import {
  Center,
  Effects,
  Environment,
  OrthographicCamera,
  OrbitControls,
  Preload,
  PerspectiveCamera,
} from '@react-three/drei'
import { Model } from '@/components/canvas/Object'
import { useThree } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import { useRef } from 'react'
import { Dom } from '@/components/dom/Dom'
const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false })
import Image from 'next/image'

export default function Page(props) {
  return (
    <>
      <Dom />
      <Scene>
        {/* 
          //@ts-ignore */}
        {/* <PerspectiveCamera
          makeDefault
          far={1000}
          near={0.01}
          fov={70.531}
          position={[74.8967, 0, 180.2802]}
          filmGauge={36}
          filmOffset={0}
          focus={200}
        /> */}
        <ambientLight intensity={1} />
        <directionalLight
          castShadow
          position={[0, 100, 0]}
          intensity={1}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={1000}
          shadow-camera-left={-100}
          shadow-camera-right={100}
          shadow-camera-top={100}
          shadow-camera-bottom={-100}
        />
        <ScaledModel />
        <Environment files='./data/mutianyu_2k.hdr' />
        <ScaledModel />
        <OrbitControls autoRotate={true} autoRotateSpeed={5} enableDamping enableZoom={false} enableRotate={true} />
      </Scene>
    </>
  )
}

function ScaledModel({ props }: JSX.IntrinsicElements['group']) {
  const viewport = useThree((state) => state.viewport)
  return (
    //@ts-ignore
    <Center onCentered={({ container, height }) => container.scale.setScalar(viewport.height / height)}>
      <Model {...props} />
    </Center>
  )
}
export async function getStaticProps() {
  return { props: { title: 'HI OPENSOURCELAB' } }
}
