export default function MovieCard({ title, poster, rating, onClick }) {
  return (
    <div
      onClick={onClick}
      className="w-[110px]  md:w-[230px] text-center cursor-pointer hover:translate-1"
    >
      <img src={poster} alt={title} className="w-full rounded-lg" />
      <h3 className="pt-2 md:pt-5 font-semibold text-gray-300 text-sm md:text-lg ">
        {title}
      </h3>
      <p className="text-sm text-gray-500">평점: {rating}</p>
    </div>
  );
}
