
import { WheelOfFortune } from "./frontPart";
// import { Wheel } from "./wheelOfFortune/wheel";
import { Spinner } from "./BasicShape";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, SSAO, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing'
import { useEffect, useRef, useState } from "react";
import ParticleEffect from "./ParticleEffect"
import { forwardRef } from "react";
import { useImperativeHandle } from "react";
 const Wheel=forwardRef(({ logo,particleEffect=false,soundOn = true,light=true, spinTime = 5, textOrientation = "vertical", textSize = "12px", segments, setResult, lightOn = true, lightColor = "white", flickering = false, flickerTime = 1 },ref)=> {
  


  function colorAssign(index) {
    if (segments.length % 2 == 0) {
      if (segments[index].color) {
        return segments[index].color
      }
      else
        return index % 2 == 0 ? "#0E2359" : "#1B57ED"
    }
    else {
      if (segments[index].color) {
        return segments[index].color
      }
      else
        return index % 3 == 0 ? "#0E2359" : index % 3 == 1 ? "#1B57ED" : [1, 0, 1]
    }
  }

  var seg = []
  for (let index = 0; index < segments.length; index++) {
    seg.push(
      {
        name: segments[index].name,
        image: segments[index].image,
        color: colorAssign(index)
      }
    )
  }

  const frontRef = useRef()
  

  useImperativeHandle(ref,()=>({
    clickHandler() {
       frontRef.current.clickHandler();
   }
}))
  return (
    <div style={{ width:"100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
      <Canvas width="100%" height={"100%"} >
        <color c attach={"background"} />
        <ambientLight />

        {
          light ? "" : <>
            <directionalLight position={[0, 0, 2]} intensity={0.7} color="white" />
         </>
        }
        <Spinner logo={logo} lightOn={lightOn} lightColor={lightColor} flickerTime={flickerTime} flickering={flickering} />
        <WheelOfFortune soundOn={soundOn} spinTime={spinTime} ref={frontRef} textOrientation={textOrientation} textSize={textSize} setResult={setResult} segments={seg} innerRadius={1} outerRadius={2.6} position={[0, 0, 0.5]} />
        {particleEffect?<ParticleEffect/>:"" }
        <EffectComposer >
          <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={5} height={480} />
          <Bloom intensity={1} luminanceThreshold={1} />

          <Vignette eskilS={false} offset={0} darkness={1.1} />
          <SSAO />
        </EffectComposer>
      </Canvas>
    </div>
  );
})

export default Wheel;