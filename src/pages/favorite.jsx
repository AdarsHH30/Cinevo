import { useFavorites } from "../contexts/FavoritesContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="h-full w-full flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-md max-w-md w-full p-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-3xl text-gray-400">�</span>
            </div>
            <h1 className="text-2xl font-semibold text-gray-900">
              No Favorites Yet
            </h1>
            <p className="text-gray-500">
              Start adding movies to your favorites by clicking the heart icon
              on any movie card!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">My Favorites</h1>
          <p className="text-gray-400">
            You have {favorites.length} favorite movie
            {favorites.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {favorites.map((movie) => (
            <div key={movie.id} className="group relative">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favorites;
