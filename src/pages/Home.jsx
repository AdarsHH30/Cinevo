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
        <Grid container columnGap={8} rowGap={6}>
          {movies.map(
            (movie) =>
              movie.title.toLowerCase().startsWith(searchQuery) && (
                <Grid item xs={6} sm={6} md={6} lg={2} key={movie.id}>
                  <MovieCard movie={movie} />
                </Grid>
              )
          )}
        </Grid>
      </div>
    </div>
  );
}
export default Home;
