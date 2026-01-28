import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

export default function Model({ modelName, position = [0, 0, 0] }) {
  const { scene } = useGLTF(`/src/components/models/${modelName}.glb`)
  const ref = useRef()

  const basePosition = useRef(new THREE.Vector3(...position))

  useFrame(({ clock }, delta) => {
    if (!ref.current) return

    const t = clock.getElapsedTime()

    ref.current.position.set(
      basePosition.current.x,
      basePosition.current.y + Math.sin(t * 1.2) * 0.25,
      basePosition.current.z
    )

    ref.current.rotation.y += delta * 0.5
  })

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={1}
      position={position}
    />
  )
}

useGLTF.preload('/src/components/models/WindowsXP.glb')
useGLTF.preload('/src/components/models/Keyboard.glb')
useGLTF.preload('/src/components/models/Tux.glb')
useGLTF.preload('/src/components/models/Pen.glb')
useGLTF.preload('/src/components/models/CD.glb')
useGLTF.preload('/src/components/models/Headphones.glb')
useGLTF.preload('/src/components/models/Dolphin.glb')
useGLTF.preload('/src/components/models/Gamecube.glb')