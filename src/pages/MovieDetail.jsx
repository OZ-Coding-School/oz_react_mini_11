import { useParams } from "react-router-dom";
import { BASE_URL } from "../constant/index";
import SkeletonDetail from "../components/skeletons/SkeletonDetail";
import useFetch from "../hooks/useFetch";

function MovieDetail() {
  const { type, id } = useParams();
  const { data, loading } = useFetch(`${type}/${id}?language=ko`);
  console.log("media: ", data);

  return !loading ? (
    <div className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center blur-2xl scale-[3] brightness-75"
        style={{
          backgroundImage: `url(${BASE_URL}${data.poster_path})`,
        }}
      />

      <div className="relative flex flex-col md:flex-row gap-[5vw] px-[5vw] py-[80px]">
        <img
          className="w-1/3 max-h-[calc(100vh-120px)] object-contain object-top"
          src={`${BASE_URL}${data.poster_path}`}
          alt={data.title}
        />

        <div className="flex flex-col">
          <div className="flex justify-between gap-4">
            <p className="grow text-6xl font-bold">{data.title || data.name}</p>
            <p className="flex justify-between items-end text-xl">
              {data.vote_average.toFixed(1)}&nbsp;&nbsp;
              <span className="text-yellow-500">★</span>
            </p>
          </div>
          <div className="flex gap-4 mt-3 text-gray-300">
            <p>
              {type === "tv"
                ? data.first_air_date + " ~ " + data.last_air_date
                : data.release_date.split("-")[0]}
            </p>
            <p>|</p>
            <p>{data.origin_country}</p>
            <p>|</p>
            <p>All</p>
          </div>

          <div className="flex my-10">
            <p className="w-[100px] text-gray-300">장르</p>
            <div className="flex">
              {data.genres.map((el) => el.name).join(", ")}
            </div>
          </div>

          <p className="w-fit mb-4 border-solid border-b-4 border-red-600 text-xl leading-9">
            OVERVIEW
          </p>
          <p className="leading-6 break-keep">
            {data.overview || "줄거리 정보가 없습니다."}
          </p>

          <p className="w-fit mt-10 mb-4 border-solid border-b-4 border-red-600 text-xl leading-9">
            STEEL CUT
          </p>
          <img
            className="md:w-[300px]"
            src={`${BASE_URL}${data.backdrop_path}`}
            alt={data.title}
          />
        </div>
      </div>
    </div>
  ) : (
    <SkeletonDetail />
  );
}

export default MovieDetail;
