function Loader() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="h-72 bg-gray-300 animate-pulse rounded-xl"
        />
      ))}
    </div>
  );
}

export default Loader;