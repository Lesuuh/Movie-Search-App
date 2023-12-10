import { MovieCard } from "./MovieCard";

export const Movies = ({ movies }) => {
  return (
    <div className="w-full max-w-[1100px] mx-auto px-5 my-36 text-white gap-5 rounded-xl grid grid-cols-1 lg:grid-cols-4">
      <MovieCard movies={movies} />
    </div>
  );
};
