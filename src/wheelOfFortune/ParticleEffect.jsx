import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useMemo } from 'react';
import { Vector3 } from 'three';
import { BufferAttribute } from "three";
// import token from "./../assets/token.png"
// import { useTexture } from '@react-three/drei';
export default function ParticleEffect({ count = 10000 }) {
  const particleSystem = useRef(null);

  const velocities = useMemo(() => {
    const v = new Array(count).fill(0).map(() => {
      return new Vector3(
        (Math.random() - 0.5) * 0.02, // random x velocity
        (Math.random() - 0.5) * 0.02, // random y velocity
        (Math.random() - 0.5) * 0.02  // random z velocity
      );
    });
    return v;
  }, [count]);

  useFrame(() => {
    const positions = particleSystem.current.geometry.attributes.position.array;

    for (let i = 0; i < positions.length; i += 3) {
      const velocity = velocities[Math.floor(i / 3)];
      positions[i] += velocity.x;
      positions[i + 1] += velocity.y
      positions[i + 2] += velocity.z;
    }

    particleSystem.current.geometry.attributes.position.needsUpdate = true;
  });

  const points = useMemo(() => {
    const p = new Array(count).fill(0).map((v) => (0.5 - Math.random()) * 10);
    return new BufferAttribute(new Float32Array(p), 3);
  }, [count]);
  // const texture = useTexture(token);
  return (
    <>
      <points  ref={particleSystem}>
        <bufferGeometry size={10} >
          <bufferAttribute attach={"attributes-position"} {...points} />
        </bufferGeometry>
        <pointsMaterial
          size={3}
          threshold={0.01}
          color={"gold"}
          sizeAttenuation={false}
          fog={true}
          // map={texture}
          // transparent={true}
        />
      </points>
    </>
  );
}