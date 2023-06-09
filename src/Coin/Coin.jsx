/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./assets/coin.glb
*/

import React, { useEffect, useRef } from 'react'
import {  useGLTF } from '@react-three/drei'
import model1 from "./assets/coinGold.glb"
import lithos from "./assets/lithos.typeface.json"
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import png from "./assets/map.png"
import qr from "./assets/qr.png"
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { useTexture } from '@react-three/drei'
import { extend } from '@react-three/fiber'
import cambria from "./assets/cambria.typeface.json"
import Bender from './assets/Bender'
import { useFrame } from '@react-three/fiber'
extend({ TextGeometry })




export function Coin({ actOfKindness = "Random Act Of Kindness",goodFor="Good For 1",type="Token",id ="12345" }) {
  const group = useRef()
  // useFrame(
  //   (state,delta)=>{
  //         group.current.rotation.y+=delta/2
  //   }

  // )

  useEffect(
    ()=>{
      group.current.rotation.y=Math.PI
    }
  )
  const image = useTexture(png)
  const qrcode = useTexture(qr);
  const font = new FontLoader().parse(cambria)

  const { nodes, materials } = useGLTF(model1)
  const backBottomText = new TextGeometry(actOfKindness.toUpperCase(),{ font, size: 0.13, curveSegments: 100, height: 0.03, bevelThickness: 0.015, bevelSize: 0.003, bevelEnabled: true })
  const backTopText = new TextGeometry(goodFor.toUpperCase(),{ font, size: 0.13, curveSegments: 100, height: 0.03, bevelThickness: 0.015, bevelSize: 0.003, bevelEnabled: true })
  const backInnerBottom = new TextGeometry("PAY IT FORWARD",{font,size:0.13,curveSegments: 100, height: 0.03, bevelThickness: 0.015, bevelSize: 0.003, bevelEnabled: true})
  const i = id.toString()
  const tokenId = new TextGeometry("#"+i,{font,size:0.13,curveSegments: 100, height: 0.03, bevelThickness: 0.015, bevelSize: 0.003, bevelEnabled: true})
  
  const tokenType = new TextGeometry(type.toUpperCase(),{font,size:0.13,curveSegments: 100, height: 0.03, bevelThickness: 0.015, bevelSize: 0.003, bevelEnabled: true})
 
  const bend = new Bender();
  bend.bend(backBottomText,'z',(Math.PI/5)-0.08)
  bend.bend(backTopText,'z',-((Math.PI/5)-0.08))
  bend.bend(backInnerBottom,"z",(Math.PI/5)-0.08)
  bend.bend(tokenId,"z",-(Math.PI/5)-0.08)
  bend.bend(tokenType,"z",(Math.PI/5)-0.08)
  tokenId.center()
  backBottomText.center()
  backTopText.center()
  backInnerBottom.center()
  tokenType.center()
  return (
    <group ref={group} dispose={null}>
      <pointLight intensity={2} decay={2} position={[3.01, 2.55, 2.5]} rotation={[-1.5, -0.07, 0.02]} />
      <pointLight intensity={2} decay={2} position={[-2.85, 2.55, 2.5]} rotation={[-1.5, -0.07, 0.02]} />
      <pointLight intensity={2} decay={2} position={[3.01, -2.74, 2.5]} rotation={[-1.5, -0.07, 0.02]} />
      <pointLight intensity={2} decay={2} position={[-2.85, -2.74, 2.5]} rotation={[-1.5, -0.07, 0.02]} />
      <pointLight intensity={2} decay={2} position={[3.01, 2.55, -1.78]} rotation={[-1.5, -0.07, 0.02]} />
      <pointLight intensity={2} decay={2} position={[-2.85, 2.55, -1.78]} rotation={[-1.5, -0.07, 0.02]} />
      <pointLight intensity={2} decay={2} position={[3.01, -2.74, -1.78]} rotation={[-1.5, -0.07, 0.02]} />
      <pointLight intensity={2} decay={2} position={[-2.85, -2.74, -1.78]} rotation={[-1.5, -0.07, 0.02]} />
      <lineSegments geometry={nodes.NurbsCircle.geometry} material={materials['default']} position={[2.31, 0.58, 0.03]} scale={0.02} />
      <mesh geometry={nodes.outerMostRing.geometry} material-color={0x8C6F18} material={materials.silver} rotation={[Math.PI / 2, 0, 0]} scale={1.98} />
      <mesh geometry={nodes.Circle001.geometry} material-color={0x36403A} material={materials.black} position={[0, 0, -0.1]} rotation={[Math.PI / 2, 0, 0]} scale={1.89} />
      <mesh  geometry={nodes.innerMostRing.geometry} material={materials.silver} position={[0, 0, -0.04]} rotation={[Math.PI / 2, 0, 0]} scale={[0.97, 0.47, 0.97]} />
      <mesh geometry={nodes.middleRing.geometry} material={materials.silver} position={[0, 0, -0.03]} rotation={[Math.PI / 2, 0, 0]} scale={[1.35, 0.65, 1.35]} />
      <mesh geometry={nodes.Circle002.geometry} material={materials.silver} position={[0, 0, -0.09]} rotation={[Math.PI / 2, 0, 0]} scale={1.65} />
      <mesh geometry={nodes.Plane.geometry} material={materials.silver} position={[0, 0, -0.06]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Circle003.geometry} material={materials.silver} position={[0, 0, -0.1]} rotation={[Math.PI / 2, 0, Math.PI]} scale={1.65} />
      {/* <mesh geometry={nodes.Sphere.geometry} material={materials.silver} position={[-1.76, 0, -0.08]} rotation={[Math.PI / 2, 0, 0]} scale={0.04} /> */}
      <mesh material={materials.silver}rotation={[0,Math.PI,-(Math.PI/2)-(0.047*type.length)*(Math.PI/5)]} position={[1.73-(0.0125*(type.length-(type.length<=15?5:0))),0,-0.18]} geometry={tokenType} />
      <mesh material={materials.silver}rotation={[0,Math.PI,-(Math.PI/2)+(0.047*i.length)*(Math.PI/5)]} position={[-1.7,0,-0.18]} geometry={tokenId} />
      <mesh geometry={nodes.Circle004.geometry} material-color={0x675319} material={materials.gold} position={[0, 0, -0.1]} rotation={[Math.PI / 2, 0, 0]} scale={1.89} />
      <mesh geometry={nodes.Circle004.geometry} position={[0, 0, -0.1]} rotation={[Math.PI / 2, 0, 0]} scale={1.89} >
        <meshStandardMaterial map={image} transparent={true} />
      </mesh>
      <mesh geometry={nodes.Circle004.geometry} position={[0, 0, -0.02]} rotation={[-Math.PI / 2, 0, 0]} scale={1.89} >
        <meshStandardMaterial map={image} transparent={true} />
      </mesh>
      <mesh geometry={nodes.frontTop.geometry} material={materials.silver} position={[0, 1.37, 0.75]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.frontMiddleTop.geometry} material={materials.silver} position={[0, 1.02, 0.75]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.frontMiddleBottom.geometry} material={materials.silver} position={[0, -0.93, 0.75]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Plane001.geometry} material={materials.silver} position={[0, 0, -0.17]} rotation={[Math.PI / 2, 0, Math.PI]} scale={0.27} />
      <mesh geometry={backBottomText} material={materials.silver} rotation={[Math.PI , 0, Math.PI-0.63+(0.027*(23-actOfKindness.length))]} position={[0, -1.43-(0.020*(23-actOfKindness.length)), -0.18]}  />
      <mesh geometry={nodes.qr.geometry} position={[0, 0, -0.12]} rotation={[Math.PI / 2, 0, 0]} scale={0.33} >
        <meshStandardMaterial map={qrcode} color={"black"} transparent={true} />
      </mesh>
      <mesh geometry={nodes.frontBottom.geometry} material={materials.silver} position={[0, -1.76, -0.09]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.rightScan.geometry} material={materials.silver} position={[0, 1.76, -0.03]} rotation={[Math.PI / 2, 0, Math.PI]} />
      <mesh geometry={nodes.leftScan.geometry} material={materials.silver} position={[0, 1.76, -0.03]} rotation={[Math.PI / 2, 0, Math.PI]} />
      <mesh geometry={nodes.backInnerTop.geometry} material={materials.silver} position={[0, 1.76, -0.03]} rotation={[Math.PI / 2, 0, Math.PI]} />
      <mesh geometry={backTopText} material={materials.silver} position={[-0.05, 1.5+(0.015*(23-goodFor.length)), -0.15]} rotation={[Math.PI , 0, Math.PI+0.55-(0.025*(23-goodFor.length))]} />
      <mesh geometry={backInnerBottom} material={materials.silver} position={[0, -1.06, -0.15]} rotation={[0,Math.PI,-0.4]} />
      <mesh geometry={nodes.frontYear.geometry} material={materials.silver} position={[0.28, -0.54, -0.09]} rotation={[Math.PI / 2, 0.49, 0]} scale={0.2} />
    </group>
  )
}

useGLTF.preload(model1)
