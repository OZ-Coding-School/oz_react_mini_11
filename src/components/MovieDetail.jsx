const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movieDetailData from "../data/movieDetailData.json";

export const MovieDetail = () => {
  const { id } = useParams();

  // const { title, vote_average, poster_path, genres, overview } =
  //   movieDetailData;

  // console.log(IMAGE_BASE_URL);

  const [detail, setDetail] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setDetail(movieDetailData);
  }, []);

  if (!detail) return <p>📄 상세 정보를 불러오는 중입니다...</p>;

  return (
    <section className="max-w-screen-lg h-[calc(100vh-60px)] justify-center text-[#fff]">
      <div className="flex gap-[20px]">
        <div className="pb-[calc((185/350)*100%)] w-[350px] relative">
          {!isLoaded && <p>🖼️ 이미지 로딩 중...</p>}
          <img
            src={`${IMAGE_BASE_URL}${detail.poster_path}`}
            alt={detail.title}
            onLoad={() => setIsLoaded(true)}
            style={{ display: isLoaded ? "block" : "none" }}
            className="object-cover absolute top-0 w-[100%] h-[100%]"
          />
        </div>
        <div className="flex-1 flex flex-col gap-[20px]">
          <div className="flex justify-between">
            <h2 className="leading-none font-[500] text-[16px]">
              {detail.title}
            </h2>
            <p className="leading-none text-[13px] text-[gray]">
              평점: {detail.vote_average}
            </p>
          </div>
          <div className="flex gap-[5px]">
            {detail.genres.map((el) => (
              <span key={el.id} className="text-[13px]">
                {el.name}
              </span>
            ))}
          </div>
          <p className="text-[13px] text-left">{detail.overview}</p>
        </div>
      </div>
    </section>
  );
};
