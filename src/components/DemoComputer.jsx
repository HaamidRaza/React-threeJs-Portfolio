import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Html,
  OrbitControls,
  useTexture,
  useVideoTexture,
} from "@react-three/drei";
import * as THREE from "three";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const DemoComputer = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/laptop2.glb");
  const txt = useVideoTexture(
    props.texture ? props.texture : "/textures/project/project1.mp4"
  );

  useGSAP(() => {
    if (group.current) {
      gsap.from(group.current.rotation, {
        y: Math.PI / 2,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, [txt]);

  // Fix UV mapping for the display
  useEffect(() => {
    if (nodes.Object_13) {
      const geometry = nodes.Object_13.geometry;
      const uvAttribute = geometry.attributes.uv;

      let minU = Infinity,
        maxU = -Infinity;
      let minV = Infinity,
        maxV = -Infinity;

      for (let i = 0; i < uvAttribute.count; i++) {
        const u = uvAttribute.getX(i);
        const v = uvAttribute.getY(i);

        minU = Math.min(minU, u);
        maxU = Math.max(maxU, u);
        minV = Math.min(minV, v);
        maxV = Math.max(maxV, v);
      }
      const uRange = maxU - minU;
      const vRange = maxV - minV;
      for (let i = 0; i < uvAttribute.count; i++) {
        let u = uvAttribute.getX(i);
        let v = uvAttribute.getY(i);

        // Normalize to 0-1 range
        u = (u - minU) / uRange;
        v = (v - minV) / vRange;

        uvAttribute.setXY(i, u, v);
      }

      uvAttribute.needsUpdate = true;
    }
  }, [nodes]);

  useEffect(() => {
    if (txt) {
      txt.flipY = true;
      txt.wrapS = THREE.ClampToEdgeWrapping;
      txt.wrapT = THREE.ClampToEdgeWrapping;
      txt.repeat.set(1, 1);
      txt.offset.set(0, 0);

      txt.center.set(0.5, 0.5);
      txt.rotation = Math.PI / 2;
    }
  }, [txt]);

  return (
    <group ref={group} {...props} dispose={null} rotation={[0, Math.PI, 0]}>
      <group
        position={[0.498, 0.016, 0.416]}
        rotation={[-0.027, 0, 0]}
        scale={0.281}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.black_plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.touchpad}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.holes}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.ports}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.speaker}
        />
      </group>
      <group
        position={[0.498, 0.037, 0.667]}
        rotation={[1.806, 0, 0]}
        scale={0.281}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.display}
        >
          <meshBasicMaterial map={txt} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.touchscreen_bezel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials.black_plastic}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_17.geometry}
        material={materials.body}
        position={[0.496, 0, 0.454]}
        rotation={[1.544, 0, 0]}
        scale={[0.983, 0.941, 0.983]}
      />
    </group>
  );
};
useGLTF.preload("/models/laptop2.glb");

export default DemoComputer;