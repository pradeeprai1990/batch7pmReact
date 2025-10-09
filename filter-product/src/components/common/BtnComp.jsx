import React from 'react'

export default function BtnComp({text,bgColor}) {
  return (
    <div>
      <button className='bg-[#ef4444] p-[10px_25px] text-[20px] text-white'> {text} </button>
    </div>
  )
}
