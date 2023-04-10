import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { DRACOLoader, GLTFLoader } from 'three-stdlib'

export function Model(props) {
  const { nodes, materials } = useLoader(
    GLTFLoader,
    'https://hi-oslab.s3.ap-northeast-2.amazonaws.com/ksy-c4d.glb',
    (loader) => {
      console.log(loader)

      const dracoLoader = new DRACOLoader()
      dracoLoader.setDecoderPath('./draco/')
      loader.setDRACOLoader(dracoLoader)
    },
  )

  return (
    <group {...props} dispose={null}>
      <group position={[-30280.4141, -15198.0391, -44438.707]}>
        <group position={[13418.9863, 112766.9766, 35817.7109]} rotation={[0.0477, -0.4794, -0.4115]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Polygon.geometry}
            position={[-4412.6689, -86051.3359, 5808.8062]}>
            <meshStandardMaterial
              attach='material'
              color='MediumVioletRed'
              roughness={0.3}
              metalness={0.9}
              opacity={1}
            />
          </mesh>
        </group>
      </group>
      <group position={[35772.3594, 119911.9141, -126831.7031]} rotation={[0.1314, 0.0455, 0.3317]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Volume_Mesher1_1.geometry}
          position={[3012.3867, -36805.332, 3851.6455]}
          rotation={[1.4905, 0.3516, -0.7443]}>
          <meshStandardMaterial attach='material' color='DarkOrange' roughness={0.1} metalness={0.9} opacity={1} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Volume_Mesher2.geometry}
          position={[5582.207, -46290.4922, 4511.9688]}
          rotation={[1.4905, 0.3516, -0.7443]}>
          <meshStandardMaterial attach='material' color='OrangeRed' roughness={0.5} metalness={0.1} opacity={1} />
        </mesh>
      </group>
      <group position={[95331.4375, 228262.7813, -171065.6406]} rotation={[-2.4961, -0.0519, -1.7847]}>
        <mesh castShadow receiveShadow geometry={nodes.Sphere_1.geometry} rotation={[-2.9795, 0.2572, -3.1097]}>
          <meshStandardMaterial attach='material' color='Gainsboro' roughness={0.1} metalness={0.5} opacity={1} />
        </mesh>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Platonic.geometry}
        position={[-39736.0156, -83062.4531, -177554.5313]}>
        <meshStandardMaterial attach='material' color='RosyBrown' roughness={0.1} metalness={0.5} opacity={1} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Sphere4.geometry} position={[257.4027, -158956.125, -217482.0156]}>
        <meshStandardMaterial attach='material' color='RosyBrown' roughness={0.1} metalness={0.5} opacity={1} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus4.geometry}
        position={[-33196.707, -63368.5273, -156979.5469]}
        rotation={[-Math.PI / 2, 1.3434, Math.PI / 9]}>
        <meshStandardMaterial attach='material' color='RosyBrown' roughness={0.1} metalness={0.5} opacity={1} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus5.geometry}
        position={[-12242.0117, -132972.3594, -189990.6563]}
        rotation={[-2.3525, 1.1923, 1.1129]}>
        <meshStandardMaterial attach='material' color='RosyBrown' roughness={0.1} metalness={0.5} opacity={1} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus6.geometry}
        position={[27929.252, -174016.2969, -201177.1719]}
        rotation={[-Math.PI / 2, 1.3434, Math.PI / 9]}>
        <meshStandardMaterial attach='material' color='RosyBrown' roughness={0.1} metalness={0.5} opacity={1} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Capsule.geometry}
        position={[83738.5156, -49631.9648, -11106.6035]}
        rotation={[-0.5637, -0.3884, -0.5257]}>
        <meshStandardMaterial
          attach='material'
          color='ForestGreen'
          roughness={0.5}
          metalness={0.5}
          opacity={0.5}
          transparent
        />
      </mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus3.geometry}
        position={[116159.1641, 168172.2656, -156979.5469]}
        rotation={[0.7996, 0.6799, -0.9952]}>
        <meshStandardMaterial attach='material' color='RosyBrown' roughness={0.1} metalness={0.5} opacity={1} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus2.geometry}
        position={[100792.3125, 211586.1563, -156979.5469]}
        rotation={[0.7996, 0.6799, -0.9952]}>
        <meshStandardMaterial attach='material' color='RosyBrown' roughness={0.1} metalness={0.5} opacity={1} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus.geometry}
        position={[76694.3281, 255053.3906, -156979.5469]}
        rotation={[1.0285, 0.7736, -1.1478]}>
        <meshStandardMaterial attach='material' color='RosyBrown' roughness={0.1} metalness={0.5} opacity={1} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Sphere.geometry} position={[59656.8984, -51121.5469, -12152.5322]}>
        <meshStandardMaterial attach='material' color='FireBrick' roughness={0.5} metalness={0.5} opacity={1} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Volume_Mesher1.geometry}>
        <meshStandardMaterial
          attach='material'
          color='SeaGreen'
          roughness={0.1}
          metalness={0.5}
          opacity={0.1}
          transparent
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tube1.geometry}
        position={[-66643.9297, 168706.7344, -127418.8281]}
        rotation={[-0.9239, -0.7574, -2.5771]}>
        <meshStandardMaterial attach='material' color='Blue' roughness={0.1} metalness={0.5} opacity={1} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube2.geometry}
        position={[109743.8047, -61668.3906, -81688.4688]}
        rotation={[2.5563, -0.7486, 2.9388]}>
        <meshStandardMaterial attach='material' color='Orange' roughness={0.5} metalness={0.9} opacity={1} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube1.geometry}
        position={[53173.5781, -17457.2109, -35894.0508]}
        rotation={[-2.9627, 0.8638, 2.7062]}>
        <meshStandardMaterial attach='material' color='MediumBlue' roughness={0.5} metalness={0.9} opacity={1} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        position={[84736.6797, -6539.0952, -85967.3516]}
        rotation={[2.242, -0.4992, 2.8078]}>
        <meshStandardMaterial attach='material' color='DarkSlateBlue' roughness={0.5} metalness={0.9} opacity={1} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pyramid.geometry}
        position={[-3743.9661, 53997.5898, 19555.1582]}
        rotation={[-0.7636, -0.1948, -0.5765]}>
        <meshStandardMaterial
          attach='material'
          color='DarkRed'
          roughness={0.5}
          metalness={0.5}
          opacity={0.7}
          transparent
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tube.geometry}
        position={[48642.3438, 85780.5781, -71497.5078]}
        rotation={[0.4656, -0.0253, -0.4428]}>
        <meshStandardMaterial attach='material' color='Coral' roughness={0.5} metalness={0.5} opacity={1} />
      </mesh>
    </group>
  )
}

useGLTF.preload('https://hi-oslab.s3.ap-northeast-2.amazonaws.com/ksy-c4d.glb')
