import { useState } from "react";

export const Navbar = ({SearchMovies}) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="w-full max-w-[1100px] pt-5 h-[80px] mx-auto flex flex-wrap flex-row gap-10 items-center">
      <div onClick={()=> location.reload()} className="text-white font-semibold flex items-center gap-1">
        <h2 className="logo w-[50px] h-[50px] rounded-full text-white flex items-center justify-center text-2xl font-bold">
          M
        </h2>
        MoviesHub
      </div>
      <div className="flex gap-2 flex-1 flex-wrap">
        <input
          type="text"
          placeholder="Search your movies"
          className="px-5 py-1 flex-1 max-w-[350px] rounded-xl"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          onClick={() => SearchMovies(searchValue)}
          className="bg-darkBlue hover:bg-hoverBlue px-6 text-white rounded-xl font-semibold cursor-pointer py-2"
        >
          Search
        </button>
      </div>
    </div>
  );
};
