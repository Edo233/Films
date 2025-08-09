'use client'

export interface ButtonProps {
  id: number;
  name: string;
}

export default async function Categoria() {
  const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}`);
  const data = await res.json();
  const genres: ButtonProps[] = data.genres;

  return (
    <div>
      {genres.map(({ id, name }) => (
        <button key={id} className="border p-2 m-2 rounded">
          <span className="text">{name}</span>
        </button>
      ))}
    </div>
  );
}
