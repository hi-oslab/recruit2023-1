import * as S from './styles'
import { Suspense, useRef } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import {
  CameraShake,
  Environment,
  Html,
  OrbitControls,
  PerspectiveCamera,
  Preload,
  Stage,
  useProgress,
} from '@react-three/drei'
import { Loader } from '@/components/canvas/Scene/Loader'

const Scene = ({ children, ...props }) => {
  const canvasRef = useRef()
  return (
    <>
      <Canvas ref={canvasRef} {...props} shadows camera={{ position: [0, 0, 100], fov: 70.531 }}>
        <Suspense fallback={<Loader />}>
          {children}
          <Preload all />
        </Suspense>
        {/* <CameraShake
          maxYaw={0.1} // Max amount camera can yaw in either direction
          maxPitch={0.1} // Max amount camera can pitch in either direction
          maxRoll={0.1} // Max amount camera can roll in either direction
          yawFrequency={0.1} // Frequency of the the yaw rotation
          pitchFrequency={0.1} // Frequency of the pitch rotation
          rollFrequency={0.1} // Frequency of the roll rotation
          intensity={1} // initial intensity of the shake
          decayRate={0.65} // if decay = true this is the rate at which intensity will reduce at />
        /> */}
      </Canvas>
    </>
  )
}

export default Scene
