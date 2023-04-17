import React from 'react'

export const Prize = ({ textOrientation,textSize,text,index, image,length }) => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'center',
          justifyContent: 'center',
          color:"white",
          fontFamily:"sans-serif",
          fontSize: textSize,
          fontWeight:"900",
          backgroundColor:"transparent",
          transform: "translate(0%, 0%) rotate(" +(length%2==0? (index * (360 / length)+(index +1)* (360 / length))/2:(index * (360 / length)+(index)* (360 / length))/2 )+ "deg)",
          paddingRight:"140px",
          
        }}
      >
        <div
         style={{
          width:`${length<4?(40)/length:(100)/length}%`,
          transform:"rotate(-90deg)"
         }}
        >
        <img src={image} style={{
           width:"100%",
           height:"100%"
        }}    />  
        </div>
        
        <div style={{
          writingMode:textOrientation==="vertical"?"vertical-lr":"",
          transform:"rotate(180deg) ",
          marginRight:"5px",
           
        }}>
        <p>{text}</p>
        </div>
        
      </div>
    );
  };