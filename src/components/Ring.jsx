import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Rings = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/brain_hologram.glb')
  const { actions } = useAnimations(animations, group)

   useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.5 
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="07e8ba9162674e488df6dd56fc54b2e3fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Icosphere001" rotation={[-Math.PI / 2, 0, -2.734]} scale={100}>
                  <mesh
                    name="Icosphere001_Particle_2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere001_Particle_2_0.geometry}
                    material={materials.Particle_2}
                  />
                  <mesh
                    name="Icosphere001_Particle_2_0_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere001_Particle_2_0_1.geometry}
                    material={materials.Particle_2}
                  />
                  <mesh
                    name="Icosphere001_Particle_2_0_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere001_Particle_2_0_2.geometry}
                    material={materials.Particle_2}
                  />
                  <mesh
                    name="Icosphere001_Particle_1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere001_Particle_1_0.geometry}
                    material={materials.Particle_1}
                  />
                  <mesh
                    name="Icosphere001_Particle_1_0_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere001_Particle_1_0_1.geometry}
                    material={materials.Particle_1}
                  />
                  <mesh
                    name="Icosphere001_Particle_1_0_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere001_Particle_1_0_2.geometry}
                    material={materials.Particle_1}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/brain_hologram.glb')
export default Rings;