function MovieCard({ title, posterPath, voteAverage }) {
  return (
    <div className="border-none bg-[#f3f1f1] rounded shadow overflow-hidden">
      <div className="w-full aspect-[2/3]">
        <img
          src={`${import.meta.env.VITE_BASEURL}${posterPath}`}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3">
        <h2 className="font-bold text-xl truncate mb-2">{title}</h2>
        <p>평점: {voteAverage}</p>
      </div>
    </div>
  );
}

export default MovieCard;
