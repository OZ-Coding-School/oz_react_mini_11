export default function MovieCard({ title, poster, rating, onClick }) {
  return (
    <div onClick={onClick} className="w-[200px] text-center cursor-pointer">
      <img src={poster} alt={title} className="w-full rounded-lg" />
      <h3 className="mt-2 font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">평점: {rating}</p>
    </div>
  );
}
