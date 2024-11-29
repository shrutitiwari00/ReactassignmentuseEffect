import React from 'react'
import { useState,useEffect } from 'react'
import './App.css'

const WindowResize = () => {
    const[widthCount,setWidthCount] = useState(window.screen.width)
          console.log(widthCount)
        
        const updatedWidth = ()=>{
          console.log(window.innerWidth);
          setWidthCount(window.innerWidth)
        }
        
        useEffect(()=>{
          window.addEventListener('resize',updatedWidth)
        
          return()=>{
            window.removeEventListener('resize',updatedWidth)
          }
        })
  return (
    <>
    <p>The actual size of the window:</p>
    <h1>{widthCount}</h1>
    <p>To see the change in window size please open the mobile view.....</p>
    </>
  )
}

export default WindowResize