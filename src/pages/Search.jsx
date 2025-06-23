import { Link, useSearchParams } from 'react-router-dom';
import MediaCard from '../components/MediaCard';
import useFetch from '../hooks/useFetch';
import SkeletonCard from '../components/skeletons/SkeletonCard';
import { useEffect, useRef, useState } from 'react';

function Search() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  const [page, setPage] = useState(1);
  const [resultList, setResultList] = useState([]);
  const [isEnd, setIsEnd] = useState(false);
  const loader = useRef(null);

  const { data, loading } = useFetch(
    `search/multi?query=${keyword}&include_adult=false&language=ko&page=${page}`
  );

  console.log('Search keyword: ', keyword);

  // 초기화
  useEffect(() => {
    setPage(1);
    setResultList([]);
    setIsEnd(false);
  }, [keyword]);

  // 데이터 추가
  useEffect(() => {
    if (data?.results) {
      const filtered = data.results.filter(el => !el.adult && el.backdrop_path);
      setResultList(prev => [...prev, ...filtered]);

      if (data.page >= data.total_pages) setIsEnd(true);
    }
  }, [data]);

  // 스크롤 감지
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !loading && !isEnd) {
        setPage(prev => prev + 1);
      }
    });

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, [loading, isEnd]);

  const len = resultList?.length;

  return (
    <div className="w-full pt-[100px] px-[5vw] pb-20">
      <p className="fixed top-0 w-full pt-[100px] pb-8 bg-black text-[calc(12px+1vw)]">
        `{keyword}` 검색 결과: {len}개{isEnd ? '' : '+'}
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-[calc(1vw+8px)]
                      pt-16">
        {resultList.map((media, index) => (
          <Link
            to={`/details/${media.media_type}/${media.id}`}
            key={index}
          >
            <MediaCard
              title={media.title || media.name}
              avg={media.vote_average}
              imgSrc={media.poster_path}
            />
          </Link>
        ))}
        {loading && (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        )}
      </div>
      <div ref={loader} />
    </div>
  );
}

export default Search;;
