'use client'
import {  changeBackgroundColor,changeToCircle, changeToNormal, decreaseMargin, moveDown, moveLeft, moveMarginToLeft, moveRight, moveUp,marginLeft } from '@/redux/reducerSlice/boxSlice';
import { Button, Input } from '@nextui-org/react';
import React, { useEffect, useState } from 'react'
import { FaArrowDown, FaArrowLeft, FaArrowRight, FaArrowUp } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux'

const Box = () => {
   const dispatch = useDispatch();
   const [customStyles, setCustomStyles] = useState({})
   const {  width, height,margin,borderRadius,marginRight,marginLeft,marginTop,marginBottom,backgroundColor } = useSelector((state) => state.box)
   const area = borderRadius ? Math.PI * (width/2)**2 : width*height
   const handleChange =(e)=> {
          let text = e?.target?.value
            const output = text.split(',').map((item)=>{
              return item.split(':')
            })
           const styles =  Object.fromEntries(output)
           setCustomStyles(styles)

          dispatch(changeBackgroundColor(e.target.value))
        }

   useEffect(()=>{
    document.body.addEventListener('keydown', (e)=>{
      console.log(e)
        switch(e.key){
          case 'ArrowUp':
            dispatch(moveUp())
            break;
          case 'ArrowDown':
            dispatch(moveBottom())
            break;
          case 'ArrowLeft':
            dispatch(moveLeft())
            break;
          case '+':
            dispatch(increaseWidth())
            break;
          case '-':
            dispatch(decreaseWidth())
            break;
          case 'ArrowRight':
            dispatch(moveRight())
            break;
        }
    })
  },[])
    
  return (
    <div>
        <div style={{backgroundColor: backgroundColor,margin: margin,width: width,height: height,borderRadius:borderRadius,marginLeft: marginLeft,marginRight: marginRight,marginTop: marginTop, marginBottom:marginBottom, ...customStyles }}>

        </div>
        <div><Input type='text' placeholder='backgroundCOlor: ' onKeyPress={handleChange} className='w-[20%] p-4 m-4' /></div>
        <div>
        {/* <button onClick={()=> borderRadius===0?dispatch(changeToCircle()):dispatch(changeToNormal())} className='bg-slate-400 w-[15%] p-4 m-4 rounded-lg'>Change to {borderRadius===0?'Circle':'Square'} </button>
        <button onClick={()=> dispatch(moveMarginToLeft())} className='w-[15%] p-4 m-4 bg-slate-400 rounded-lg'> Margin +</button>
        <button onClick={()=> dispatch(decreaseMargin())} className='w-[15%] p-4 m-4 bg-slate-400 rounded-lg'> Margin -</button>
        <Button onClick={()=>dispatch(moveLeft())}><FaArrowLeft/></Button>
        <Button onClick={()=>dispatch(moveRight())}><FaArrowRight/></Button>
        <Button onClick={()=>dispatch(moveDown())}><FaArrowUp/></Button>
        <Button onClick={()=>dispatch(moveUp())}><FaArrowDown/></Button> */}

          
        {/* <button onClick={()=> dispatch(increaseWidth())}>-</button> */}
        </div>
        <div className='absolute bg-teal-600 p-3 bottom-0'>
          <p>area is {area}</p> 
          <p>   <input  onChange={handleChange} placeholder="Property:value"/></p>
        </div>
    </div>
  )
}

export default Box