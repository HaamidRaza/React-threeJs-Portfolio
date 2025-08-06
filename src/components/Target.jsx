import { Float, Text } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Target = ({ text = "<!isPro>", position}) => {
  const textRef = useRef()
  return (
    <Float floatIntensity={1} rotationIntensity={0.5} speed={1 }>
    <group position={position}>
      <Text
        ref={textRef}
        fontSize={0.5}
        fontWeight={600}
        font='/fonts/JetBrainsMono-VariableFont_wght.ttf'
        fontStyle='italic'
        color="#00ffff"
        outlineColor="#00ffff"
        outlineWidth={0.005}
        outlineBlur={0.4}
        transparent
        scale={[5.5, 4.5, 0.5]}
        position={[0, 0, 0]}
      >
        {text}
      </Text>
    </group>
  
    </Float>)
}

export default Target
