// App.js
import { useEffect, useState } from "react";
import { Movies } from "./components/Movies";
import { Navbar } from "./components/Navbar";

function App() {
  const [movies, setMovies] = useState([]);

  const SearchMovies = async (title) => {
    const apiKey = "dbefd62b";
    const API_URL = `http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`;

    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Network Response was not okay");
      }
      const data = await response.json();

      if (data.Search) {
        console.log(data.Search);
        setMovies(data.Search);
      } else {
        console.log("No movies Found");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // This will be called on the initial render, you may want to remove or adjust it based on your needs.
    SearchMovies("");
  }, []);

  return (
    <>
      <div className="bg-bgBlack h-auto pb-36 px-5">
        {/* Correct the prop name to SearchMovies */}
        <Navbar SearchMovies={SearchMovies} />
        <Movies movies={movies} />
      </div>
    </>
  );
}

export default App;
