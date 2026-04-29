import React, { useRef, useEffect } from "react";
import { Center, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type ModelProps = {
  url: string;
  scale?: number | [number, number, number];
  rotation?: [number, number, number];
  position?: [number, number, number];
};

export default function Model({ url, scale = 1, rotation = [0, 0, 0], position = [0, 0, 0] }: ModelProps) {
  const gltf = useGLTF(url);
  const groupRef = useRef<THREE.Group>(null);
  
  // 用于存储全局鼠标位置（归一化到 -1 到 1）
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // 将屏幕坐标转换为 WebGL 坐标 (-1 到 1)
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      // 这里限制旋转角度，确保正面的 "JR" 始终可见
      // 加大了旋转的系数：上下增加到 0.4 (约23度)，左右增加到 0.6 (约34度)
      const targetX = -(mouseRef.current.y * 0.4); // 上下轻微转动
      const targetY = mouseRef.current.x * 0.6;  // 左右轻微转动
      
      // 使用 lerp 实现平滑的跟随动画
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.05);
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Center>
        <primitive object={gltf.scene} scale={scale} rotation={rotation} />
      </Center>
    </group>
  );
}