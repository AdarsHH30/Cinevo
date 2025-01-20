import MovieCard from "../components/MovieCard";
import "../styles/Home.css";
import { Grid } from "@mui/joy";
import ReactSearchBox from "react-search-box";
import { getMovies, searchMovies } from "../services/api";
import { useState, useEffect } from "react";
import { FilterAlt, FlashAuto } from "@mui/icons-material";

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
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Failed to load movies.");
    } finally {
      setLoading(false);
    }
    setSearch("");
  };

  return (
    <div className="home space-y-8">
      <form onSubmit={handelSearch} className="search-form">
        <input
          type="text"
          placeholder="Search any movies here "
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-btn">search</button>
      </form>
      <div className="movies-grid">
        <Grid container spacing={2}>
          {/* Container grid with spacing */}
          {movies.map((movie) => (
            <Grid item sm={2} key={movie.id}>
              {/* Individual grid item for each MovieCard */}
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
export default Home;
