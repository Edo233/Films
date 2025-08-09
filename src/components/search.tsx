import React from 'react'
import Srch from './srch'
import Categoria from './categories'

export default function Search() {
  return (
    <div className='w-[100%] flex flex-col items-center'>
      <div className='W-[100%]'>
            <div className='w-[100%] text-white text-center flex flex-col gap-2 my-10'>
                <h1 className='text-3xl whitespace-nowrap'>Welcome to my movie web-page</h1>
                <h3>Find movies, Tv shows and more</h3>
            </div>
            <div>
                <Srch/>
            </div>
            <div className='w-full justify-center gap-[20px] mt-[50px] overflow-x-auto pt-[20px] pb-[20px] block whitespace-nowrap'>
            </div>
      </div>
    </div>
  )
}


