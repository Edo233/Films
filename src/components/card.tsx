import Link from 'next/link';
import React from 'react';

export interface CardProps {
  id: string;
  title: string;
  img_url: string;
  vote_average:number;
}

export default function Card({ id, title, img_url,vote_average }: CardProps) {
  return (
    
       <Link href="/Singl">
        <div className='w-[250px] rounded-[15px] relative cursor-pointer opacity-100 visible'>
      <div className='absolute w-full h-[95%] rounded-[15px] opacity-0 invisible flex items-center flex-col gap-[40px] text-[white] pb-[30px] [transition:opacity_0.5s_ease,_visibility_0.5s_ease] text-center'>
        <h3>{title}</h3>
        <div className='w-[70px] h-[70px] rounded-[50%] flex items-center justify-center text-center '>
            <p>{vote_average}</p>
        </div>
      </div>
      <img className='w-full h-full bg-contain rounded-[15px]' src={img_url} />
      <p className='text-white'>{title}</p>
    </div>
       </Link>    
    

  );
}
