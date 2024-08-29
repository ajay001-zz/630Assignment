'use client'
import { decrement, increment } from '@/redux/reducerSlice/counterSlice'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div className='p-2 m-2'>
        <button lassName='p-2 m-2'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button lassName='p-2 m-2'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}