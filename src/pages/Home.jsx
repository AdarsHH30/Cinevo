import MovieCard from "../components/MovieCard";
import "../styles/Home.css";
import { Grid } from "@mui/joy";
import ReactSearchBox from "react-search-box";
import { getMovies, searchMovies } from "../services/api";
import { useState, useEffect } from "react";
// import { FilterAlt, FlashAuto } from "@mui/icons-material";
// import { HoverEffect } from "@/components/ui/card-hover-effect";

import NoiseTexture from "@/components/ui/NoiseTexture";
function Home() {
  const [searchQuery, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const popularMovies = await getMovies();
        console.log("Fetched movies:", popularMovies);
        setMovies(popularMovies);
      } catch (err) {
        console.error(err);
        setError("Failed to load movies.");
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, []);

  const handelSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const popularMovies = await searchMovies(searchQuery);
      setMovies(popularMovies);
      if (!popularMovies.length) {
        setError("No movies found.");
      } else setError(null);
    } catch (err) {
      console.error(err);
      setError("Failed to load movies.");
    } finally {
      setLoading(false);
    }
    setSearch("");
  };

  return (
    <>
      <div className="home space-y-0">
        <form onSubmit={handelSearch} className="search-form">
          <input
            type="text"
            placeholder="Search any movies here "
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="search-btn">search</button>

          {/* <Button variant="secondary" type="submit">
        </div>  Search
        </Button> */}
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {movies.map((movie) => (
            <div key={movie.id} className="group relative">
              {/* <HoverEffect> */}

              <MovieCard movie={movie} />
              {/* </HoverEffect> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Home;
