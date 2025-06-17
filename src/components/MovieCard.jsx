import baseUrl from "../constant/baseUrl";

function MovieCard({ title, avg, imgSrc }) {
  return (
    <div className="w-[120px]">
      <img
        className="aspect-[0.7] object-cover"
        src={`${baseUrl}${imgSrc}`}
        alt={title}
      />
      <div>{title}</div>
      <div>{avg}</div>
    </div>
  );
}

export default MovieCard;
