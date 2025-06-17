import movieListData from "./data/movieListData.json";
import movieDetailData from "./data/movieDetailData.json";
import "./App.css";
import MovieCard from "./component/MovieCard";

function App() {
  const movieList = movieListData.results; //json객체안에 results키값을 꺼내옴, 배열형태(movieList는 영화 객체들이 들어 있는 배열)
  return (
    <>
      <div>
        {/* movieList 배열을 map() 함수로 하나씩 돌면서 MovieCard 컴포넌트를 렌더링
            각 영화 데이터(movie)를 props로 넘겨줌
            key 속성은 React가 각 요소를 구분하기 위해 필요 */}
        {movieList.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />; //props
        })}
      </div>
    </>
  );
}

export default App;
