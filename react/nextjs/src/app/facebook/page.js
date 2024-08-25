'use client'
import { Button } from '@nextui-org/react'
import React, { useState } from 'react'
import { AiFillLike } from "react-icons/ai";
import { FaHeart } from "react-icons/fa6";
import { FaFaceLaughSquint } from "react-icons/fa6";
import { FaAngry } from "react-icons/fa";
import { FaFaceSadCry } from "react-icons/fa6";
import { FaFaceSurprise } from "react-icons/fa6";


const  Facebook=()=> {
    const [reaction, setReaction]=useState(null)
    const changeReaction=(newReaction) =>{
        setReaction(newReaction)
    }
    const GenerateReactionButton =()=>{
      if(reaction=='love'){
        return <Button onClick={()=>changeReaction('love')}><FaHeart color='red'/>Love</Button>
      } else if (reaction=='haha'){
        return <Button onClick={()=>changeReaction('haha')}><FaFaceLaughSquint color='yellow'/>Haha</Button>
      }else if (reaction=='Angry'){
        return <Button onClick={()=>changeReaction('Angry')}><FaAngry color='red'/>Angry</Button>
      } else if (reaction=='Sad'){
        return <Button onClick={()=>changeReaction('sad')}><FaFaceSadCry color='yellow'/>Sad</Button>
      } else if (reaction=='wow'){
        return <Button onClick={()=>changeReaction('wow')}><FaHeart color='yellow'/>Wow</Button>
      }else {
        return <Button className={reaction=='like'? 'text-blue-700 font-semibold': null}  onClick={()=>changeReaction('wow')}>  <AiFillLike/> {reaction } </Button>


      }
    }
  return (
    <div className='flex justify-center items-center m-2 p-2 pt-40'>
        <div className='flex gap-4 m-2 p-2'>
        <FaHeart size={60} onClick={()=>changeReaction('love')} />
        <FaFaceLaughSquint size={60}   onClick={()=>changeReaction('haha')} />
        <FaAngry size={60} onClick={()=>changeReaction('Angry')} />
        <FaFaceSadCry size={60} onClick={()=>changeReaction('Sad')} />
        <FaFaceSurprise size={60} onClick={()=>changeReaction('wow')} />

        
        </div>
        <GenerateReactionButton/>        
    </div>
  )
}

export default Facebook