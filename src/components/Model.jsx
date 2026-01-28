import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

export default function Model({ modelName, position = [0, 0, 0] }) {
  const { scene } = useGLTF(`/public/components/models/${modelName}.glb`)
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

useGLTF.preload('/public/models/WindowsXP.glb')
useGLTF.preload('/public/models/Keyboard.glb')
useGLTF.preload('/public/models/Tux.glb')
useGLTF.preload('/public/models/Pen.glb')
useGLTF.preload('/public/models/CD.glb')
useGLTF.preload('/public/models/Headphones.glb')
useGLTF.preload('/public/models/Dolphin.glb')
useGLTF.preload('/public/models/Gamecube.glb')