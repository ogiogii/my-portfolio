'use client';
import * as THREE from 'three';
import { useRef, useState, useMemo } from 'react';
import { Canvas, extend, useFrame, ThreeEvent, ThreeElement } from '@react-three/fiber';
import { useTexture, Environment, Lightformer } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint, RapierRigidBody } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';

extend({ MeshLineGeometry, MeshLineMaterial });

declare module '@react-three/fiber' {
  interface ThreeElements {
    meshLineGeometry: ThreeElement<typeof MeshLineGeometry>;
    meshLineMaterial: ThreeElement<typeof MeshLineMaterial>;
  }
}

interface LanyardProps {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
  profileImage?: string | { src: string };
}

export default function Lanyard({ 
  position = [0, 0, 30], 
  gravity = [0, -40, 0], 
  fov = 20, 
  transparent = true, 
  profileImage = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop" 
}: LanyardProps) {
  const [isMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);

  return (
    <div className="lanyard-wrapper w-full h-full" style={{ height: '100vh' }}>
      <Canvas
        camera={{ position: position, fov: fov }}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1);
        }}
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity}>
          <Band isMobile={isMobile} profileImage={profileImage} />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
        </Environment>
      </Canvas>
    </div>
  );
}

function Band({ isMobile = false, profileImage = "" }: { isMobile: boolean; profileImage: string | { src: string } }) {
  const band = useRef<THREE.Mesh>(null);
  const fixed = useRef<RapierRigidBody>(null!);
  const j1 = useRef<RapierRigidBody>(null!);
  const j2 = useRef<RapierRigidBody>(null!);
  const j3 = useRef<RapierRigidBody>(null!);
  const card = useRef<RapierRigidBody>(null!);
  const materialRef = useRef<MeshLineMaterial>(null!);
  
  const vec = new THREE.Vector3();
  const dir = new THREE.Vector3();
  
  const photoSrc = typeof profileImage === 'string' ? profileImage : profileImage.src;
  
  // Hanya load foto profil, tekstur tali kita hapus agar tidak error loading
  const photoTexture = useTexture(photoSrc);
  
  const curve = useMemo(() => new THREE.CatmullRomCurve3([
    new THREE.Vector3(), 
    new THREE.Vector3(), 
    new THREE.Vector3(), 
    new THREE.Vector3()
  ]), []);
  
  const [dragged, drag] = useState<THREE.Vector3 | false>(false);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.5, 0]]);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.resolution.value.set(state.size.width, state.size.height);
    }

    if (dragged && card.current) {
        vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
        dir.copy(vec).sub(state.camera.position).normalize();
        vec.add(dir.multiplyScalar(state.camera.position.length()));
        
        [card, j1, j2, j3, fixed].forEach(ref => ref.current?.wakeUp());
        card.current.setNextKinematicTranslation({ 
            x: vec.x - dragged.x, 
            y: vec.y - dragged.y, 
            z: vec.z - dragged.z 
        });
    }

    if (fixed.current && j1.current && j2.current && j3.current && band.current) {
        curve.points[0].copy(j3.current.translation() as THREE.Vector3);
        curve.points[1].copy(j2.current.translation() as THREE.Vector3);
        curve.points[2].copy(j1.current.translation() as THREE.Vector3);
        curve.points[3].copy(fixed.current.translation() as THREE.Vector3);
        
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const geo = band.current.geometry as any;
        if (geo.setPoints) geo.setPoints(curve.getPoints(isMobile ? 16 : 32));
    }
  });

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} colliders={false} angularDamping={4} linearDamping={4}><BallCollider args={[0.1]} /></RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} colliders={false} angularDamping={4} linearDamping={4}><BallCollider args={[0.1]} /></RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} colliders={false} angularDamping={4} linearDamping={4}><BallCollider args={[0.1]} /></RigidBody>
        
        <RigidBody position={[2, 0, 0]} ref={card} type={dragged ? 'kinematicPosition' : 'dynamic'}>
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerDown={(e: ThreeEvent<PointerEvent>) => {
              if (card.current) {
                e.stopPropagation();
                (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
                const cardPos = card.current.translation();
                drag(new THREE.Vector3().copy(e.point).sub(new THREE.Vector3(cardPos.x, cardPos.y, cardPos.z)));
              }
            }}
            onPointerUp={(e: ThreeEvent<PointerEvent>) => {
              (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
              drag(false);
            }}
          >
            <mesh>
              <boxGeometry args={[0.8, 1.125, 0.02]} />
              <meshPhysicalMaterial 
                map={photoTexture as THREE.Texture} 
                clearcoat={1}
                roughness={0.15}
                metalness={0.2}
              />
            </mesh>
            <mesh position={[0, 0.6, 0]}>
              <sphereGeometry args={[0.05]} />
              <meshStandardMaterial color="#555" metalness={1} roughness={0.2} />
            </mesh>
          </group>
        </RigidBody>
      </group>
      
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial 
          ref={materialRef}
          transparent 
          color="#ffffff" 
          lineWidth={1} 
          args={[{ resolution: new THREE.Vector2(1024, 1024) }]} 
        />
      </mesh>
    </>
  );
}