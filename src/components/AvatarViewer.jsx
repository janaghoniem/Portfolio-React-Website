import React, { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF, useAnimations } from '@react-three/drei';

function AvatarModel({ currentAnim }) {
  const group = useRef();

  // Avatar base model
  const { scene: avatarScene } = useGLTF('/avatar.glb');

  // Expressive animations
  const stretching = useGLTF('/animations/stretching.glb').animations;
  const excitedWave = useGLTF('/animations/excited_wave.glb').animations;
  const cutItOut = useGLTF('/animations/cut_it_out.glb').animations;
  const comeOn = useGLTF('/animations/come_on.glb').animations;
  const heyYou = useGLTF('/animations/hey_you.glb').animations;
  const wave = useGLTF('/animations/wave.glb').animations;
  const thumbsDown = useGLTF('/animations/you_thumbs_down.glb').animations;
  const explaining = useGLTF('/animations/explaining.glb').animations;

  // Locomotion animations (shortlisted)
  const idle1 = useGLTF('/animations/F_Falling_Idle_000.glb').animations;
  const idle2 = useGLTF('/animations/M_Falling_Idle_002.glb').animations;
  const walk1 = useGLTF('/animations/F_Walk_002.glb').animations;
  const walk2 = useGLTF('/animations/M_Walk_001.glb').animations;
  const walkBack = useGLTF('/animations/F_Walk_Backwards_001.glb').animations;
  const strafeLeft = useGLTF('/animations/F_Walk_Strafe_Left_001.glb').animations;
  const strafeRight = useGLTF('/animations/F_Walk_Strafe_Right_001.glb').animations;
  const jog = useGLTF('/animations/F_Jog_001.glb').animations;
  const run = useGLTF('/animations/F_Run_001.glb').animations;
  const jump = useGLTF('/animations/F_Walk_Jump_001.glb').animations;

  // Merge all animations
  const allAnimations = [
    ...stretching,
    ...excitedWave,
    ...cutItOut,
    ...comeOn,
    ...heyYou,
    ...wave,
    ...thumbsDown,
    ...explaining,
    ...idle1,
    ...idle2,
    ...walk1,
    ...walk2,
    ...walkBack,
    ...strafeLeft,
    ...strafeRight,
    ...jog,
    ...run,
    ...jump
  ];

  const { actions } = useAnimations(allAnimations, group);
  const prevActionRef = useRef(null);

  useEffect(() => {
    if (!actions || !currentAnim) return;

    const nextAction = actions[currentAnim];
    const prevAction = prevActionRef.current;

    if (prevAction && nextAction && prevAction !== nextAction) {
      prevAction.crossFadeTo(nextAction, 0.5, false);
      nextAction.play();
    } else if (nextAction) {
      nextAction.play();
    }

    prevActionRef.current = nextAction;
  }, [currentAnim, actions]);

  // Optional idle bounce
  useFrame(() => {
    group.current.position.y = Math.sin(Date.now() / 500) * 0.02 - 1.5;
  });

  return <primitive ref={group} object={avatarScene} scale={1.5} position={[0, -1.5, 0]} />;
}

export default function AvatarViewer() {
  const [currentAnim, setCurrentAnim] = useState('wave'); // default animation

  // Example: cycle through animations every 4s
  const animationSequence = [
    'wave',
    'F_Falling_Idle_000',
    'F_Walk_002',
    'excited_wave',
    'F_Run_001',
    'explaining'
  ];

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      index = (index + 1) % animationSequence.length;
      setCurrentAnim(animationSequence[index]);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [0, 1.5, 3] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <AvatarModel currentAnim={currentAnim} />
        </Suspense>
        <Environment preset="sunset" />
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
}

// Preload avatar + animations
useGLTF.preload('/avatar.glb');
[
  '/animations/stretching.glb',
  '/animations/excited_wave.glb',
  '/animations/cut_it_out.glb',
  '/animations/come_on.glb',
  '/animations/hey_you.glb',
  '/animations/wave.glb',
  '/animations/you_thumbs_down.glb',
  '/animations/explaining.glb',
  '/animations/F_Falling_Idle_000.glb',
  '/animations/M_Falling_Idle_002.glb',
  '/animations/F_Walk_002.glb',
  '/animations/M_Walk_001.glb',
  '/animations/F_Walk_Backwards_001.glb',
  '/animations/F_Walk_Strafe_Left_001.glb',
  '/animations/F_Walk_Strafe_Right_001.glb',
  '/animations/F_Jog_001.glb',
  '/animations/F_Run_001.glb',
  '/animations/F_Walk_Jump_001.glb'
].forEach(path => useGLTF.preload(path));
