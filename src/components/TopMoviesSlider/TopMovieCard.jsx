import { useNavigate } from "react-router-dom";
import { TMDB_IMAGE_BASE_URL } from "../../constants/imageBaseUrl";

export default function TopMovieCard({ data, ranking }) {
  const navigate = useNavigate();

  // TODO 추후 details/영화id로 수정
  return (
    <div
      className="flex justify-center items-end gap-4 w-[220px] shrink-0"
      onClick={() => navigate(`/details`)}
    >
      <h2 className="text-5xl pb-2 min-w-[40px] text-right">{ranking}</h2>
      <div className="aspect-[2/3] w-full h-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={TMDB_IMAGE_BASE_URL + data.poster_path}
          alt={data.title}
        />
      </div>
    </div>
  );
}
