function Favorites() {
  return (
    <div className="h-full w-full flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md max-w-md w-full p-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
            <span className="text-3xl text-gray-400">📥</span>
          </div>
          <h1 className="text-2xl font-semibold text-gray-900">
            No Favorites Yet
          </h1>
          <p className="text-gray-500">
            This feature is coming soon! You'll be able to save your favorite
            items here for quick access.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Favorites;
