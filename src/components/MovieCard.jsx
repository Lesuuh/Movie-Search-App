import PropTypes from "prop-types";

export const MovieCard = ({ movies }) => {
  return (
    <>
      {movies && movies.length > 0
        ? movies.map((movie) => {
            return (
              <div
                key={movie.imdbID}
                className="bg-cardBlack flex flex-col justify-between max-w-[350px] h-auto hover:scale-105 duration-300  rounded-xl text-white"
              >
                <div>
                  <img src={movie.Poster} alt="image" className=" rounded-xl" />
                </div>
                <div className="p-5 flex  flex-col items-start justify-evenly  gap-1">
                  <p className="text-gray-300">{movie.Year}</p>
                  <h3 className="text-xl font-bold">{movie.Title}</h3>
                  <p className="text-gray-300">{movie.Type}</p>
                  {/* <p className="text-gray-100">Genre</p> */}
                  <button className="bg-darkBlue hover:bg-hoverBlue px-6 w-full rounded-xl font-semibold cursor-pointer py-2">
                    See Details
                  </button>
                </div>
              </div>
            );
          })
        : "No Movies Found"}
    </>
  );
};

MovieCard.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imdbID: PropTypes.string.isRequired,
      Poster: PropTypes.string.isRequired,
      Year: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
      Type: PropTypes.string.isRequired,
      // Add additional PropTypes for other movie properties if needed
    })
  ).isRequired,
};
