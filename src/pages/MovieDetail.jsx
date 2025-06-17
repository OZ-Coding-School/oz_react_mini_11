import { useParams } from "react-router-dom";
import MovieDetailCard from "../components/MovieDetailCard";
import movieDetailData from "../data/movieDetailData.json";

export default function MovieDetail() {
    console.log(movieDetailData);

    // const { id } = useParams();
    // const movie = movieDetailData.find((el) => el.id === Number(id));
    // console.log(movie);

    const { id } = useParams();
    const validId = 1011985; // 쿵푸팬더 ID

    if (Number(id) !== validId) {
        //더미데이터 하나 밖에 없어서 다른 이미지 클릭시 그냥 없는 데이터 보여주기
        return (
            <div className="text-white text-center py-20">
                <h2 className="text-2xl font-bold mb-4">상세 정보 없음</h2>
                <p className="text-gray-400">이 영화의 상세 페이지는 아직 준비되지 않았어요.</p>
            </div>
        );
    }

    return (
        <>
            <div className="">
                <MovieDetailCard movie={movieDetailData} />
            </div>
        </>
    );
}
