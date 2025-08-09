// Cats.tsx
import Card, { CardProps } from './card';

const NEXT_PUBLIC_API_KEY = "9b702a6b89b0278738dab62417267c49";

export default async function Cardd() {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${NEXT_PUBLIC_API_KEY}`);
  const json = await res.json();
  const data = json.results;

  return (
    <div className="flex justify-center flex-wrap gap-10 p-10">
      {data.map((elm: any) => (
        <Card
          key={elm.id}
           vote_average={elm.vote_average}
          id={String(elm.id)}
          img_url={`https://image.tmdb.org/t/p/w500${elm.poster_path}`}
          title={elm.title}
          
        />
      ))}
    </div>
  );
}
