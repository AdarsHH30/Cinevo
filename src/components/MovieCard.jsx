import "../index.css";
import "../styles/Card.css";
import { HoverEffect } from "./ui/card-hover-effect";
import { useFavorites } from "../contexts/FavoritesContext";

function MovieCard({ movie }) {
  const { toggleFavorite, isFavorite } = useFavorites();

  function onfavClick() {
    toggleFavorite(movie);
  }

  const isMovieFavorite = isFavorite(movie.id);

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`fav-btn ${isMovieFavorite ? "favorite" : ""}`}
            onClick={onfavClick}
            title={
              isMovieFavorite ? "Remove from favorites" : "Add to favorites"
            }
          >
            {isMovieFavorite ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
