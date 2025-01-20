import "../index.css";
import "../styles/Card.css";
function MovieCard({ movie }) {
  function onfavClick() {
    alert(`${movie.title} added to favorite`);
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button className="fav-btn" onClick={onfavClick}>
            ♥
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
