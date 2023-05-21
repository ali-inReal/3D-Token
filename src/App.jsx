import React, { useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Coin } from './Coin/Coin'
export const App = () => {
  
    

    return (
      <div 
        style={{
          width:"100vw",
          height:"100vh"
        }}
       >
           <Canvas>                                                                  
        
        <Coin goodFor='Good for 1' id={12} type="promos Token" actOfKindness='Donate a coke'/>
        
    </Canvas>
      </div>
    
  )
}
