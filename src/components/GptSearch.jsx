import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {toggleGpt} from '../utils/gptSearchSlice';

export const GptSearch = () => {
    
  const dispatch = useDispatch();


  return (
    <>
    <div className='bg-black text-white w-1/2 h-screen mx-auto'>
      <h1>Welcome to GPT Search</h1>
      <button onClick={()=> dispatch(toggleGpt(false))} className='p-2 border-2 rounded-2xl border-amber-50'>cancel</button>
    </div>
    </>
  )
}
