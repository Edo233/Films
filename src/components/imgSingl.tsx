import React from 'react'


const NEXT_PUBLIC_API_KEY = "9b702a6b89b0278738dab62417267c49";

export interface CardProps {
  id: string;
  title: string;
  img_url: string;
  vote_average:number;
}


export default async function ImgSingl() {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${NEXT_PUBLIC_API_KEY}`)
  const json = await res.json();
  const data = json.results;




  return (
    <div className='w-full h-[100vh] bg-white '>
      
    </div>
  )
}
