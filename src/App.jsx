import React, { useEffect, useRef, useState } from 'react'
import Wheel from './wheelOfFortune/wheel'
import icon1 from "./assets/icons/icon1.png"
import icon2 from "./assets/icons/icon2.png"
import icon3 from "./assets/icons/icon3.png"
import icon4 from "./assets/icons/icon4.png"
import icon5 from "./assets/icons/icon5.png"
import icon6 from "./assets/icons/icon6.png"
import logo from "./assets/logo1.png"
export const App = () => {
    const segments = [
        { name: 'GOODS',image:icon1 , color: "" },
        { name:'SERVICES',image:icon2,color: "" },
        { name: 'PROMOS', image:icon3 , color: "" },
        { name: 'MYSTERY', image:icon4 , color: "" },
        { name: 'ACTS', image:icon5 , color: "" },
        { name: 'ENTERTAINMENT', image:icon6, color: "" }
      ]
    const [result,setResult] = useState(-1);
    useEffect(
        ()=>{
        if(result != -1)
           {
            console.log(segments[result].name)
           }
           
        },[result]
    )
    
    const ref= useRef();

    return (
    <div style={{
      width:"70vw",
      height:"70vh"
    }}>
         <Wheel  ref = {ref} setResult={setResult} logo={logo} segments={segments} flickering={false} lightOn={true} soundOn={true} textOrientation={"vertical"} textSize="8px" />
         <button
        style={{
          padding: "10px",
          borderRadius: "10px",
          backgroundColor: "gold",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
        onClick={() => ref.current.clickHandler()}>Spin</button>
    </div>
  )
}
