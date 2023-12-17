import React from 'react'

const Background = () => {
  return (
    <div className='fixed w-full h-screen z-[2]'>
      <div className="nav w-full py-10 flex justify-center text-zinc-500 text-xl absolute top-[5%]">
        Documents.
      </div>
      <h1 className='text-[32vw] leading-none tracking-tighter text-zinc-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-normal'>Docs</h1>

    </div>
  )
}

export default Background
