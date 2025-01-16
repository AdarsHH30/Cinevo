import MovieCard from "../components/MovieCard";
import "../styles/Home.css";
import Grid from "@mui/material/Grid";
import ReactSearchBox from "react-search-box";

function Home() {
  const movies = [
    {
      id: 1,
      title: "John wick",
      release_date: "2003",
      url: "data:image/webp;base64,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",
    },
    { id: 2, title: "Naruto", release_date: "1959" },
    { id: 3, title: "black clover", release_date: "1323" },
    { id: 4, title: "black clover", release_date: "1323" },
    { id: 5, title: "black clover", release_date: "1323" },
    { id: 6, title: "black clover", release_date: "1323" },
    { id: 7, title: "black clover", release_date: "1323" },
  ];

  const handlesearch = () => {};
  return (
    <div className="home space-y-8">
      <form onSubmit={handlesearch} className="search-form">
        <input
          placeholder="Search any movies here "
          type="text"
          className="search-input"
        ></input>
        <button className="search-btn">search</button>
      </form>
      <div className="movies-grid">
        <Grid container columnGap={8} rowGap={6}>
          {movies.map((movie) => (
            <Grid item xs={6} sm={6} md={6} lg={2} key={movie.id}>
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
