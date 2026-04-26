import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 2500;

const Particles = ({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) => {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, originalPositions, colors } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const cyan = new THREE.Color("#3df0ea");
    const magenta = new THREE.Color("#d946ef");
    const violet = new THREE.Color("#a855f7");

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const radius = 6 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const t = Math.random();
      const color = t < 0.5 ? cyan : t < 0.8 ? violet : magenta;
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return { positions, originalPositions: positions.slice(), colors };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.elapsedTime;
    const geometry = pointsRef.current.geometry;
    const positionAttr = geometry.attributes.position as THREE.BufferAttribute;
    const arr = positionAttr.array as Float32Array;

    const mouseX = mouse.current.x * 4;
    const mouseY = mouse.current.y * 4;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const ix = i * 3;
      const ox = originalPositions[ix];
      const oy = originalPositions[ix + 1];
      const oz = originalPositions[ix + 2];

      // Subtle breathing motion
      const wave = Math.sin(time * 0.5 + i * 0.01) * 0.15;

      // Mouse attraction
      const dx = mouseX - ox;
      const dy = mouseY - oy;
      const distSq = dx * dx + dy * dy + 4;
      const force = 1.5 / distSq;

      arr[ix] = ox + dx * force + wave;
      arr[ix + 1] = oy + dy * force + wave;
      arr[ix + 2] = oz + Math.sin(time * 0.3 + i * 0.005) * 0.2;
    }

    positionAttr.needsUpdate = true;
    pointsRef.current.rotation.y = time * 0.04;
    pointsRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={PARTICLE_COUNT}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

const ParticleField = () => {
  const mouse = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
  };

  return (
    <div
      className="fixed inset-0 -z-10"
      onMouseMove={handleMouseMove}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Particles mouse={mouse} />
      </Canvas>
      {/* Vignette overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(var(--background))_90%)]" />
    </div>
  );
};

export default ParticleField;
