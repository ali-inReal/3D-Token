import React, { useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Coin } from './Coin/Coin'
import { OrbitControls } from '@react-three/drei'
export const App = () => {
  
    

    return (
      <div 
        style={{
          width:"100vw",
          height:"100vh"
        }}
       >
           <Canvas>                                                                  
        
        <Coin/>
        <OrbitControls/>
    </Canvas>
      </div>
    
  )
}
