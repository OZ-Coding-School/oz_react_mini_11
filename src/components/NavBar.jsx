import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import useDebounce from '../hooks/useDebounce';

function NavBar() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (debouncedQuery !== '') {
      setSearchParams({ query: debouncedQuery });
    } else {
      setSearchParams({});
    }
  }, [debouncedQuery, setSearchParams]);

  return (
    <>
      <nav className="flex bg-black px-1 py-1 items-center">
        <Link to="/">
          <h3
            className="
              bg-lime-100
                font-extrabold
                text-[clamp(0.5rem,5vw,2.5rem)]
                text-violet-600
                rounded
                m-[clamp(0.3rem,0.5vw,1rem)]
                p-[clamp(0.5rem,0.5vw,1rem)]
            "
          >
            OZ 무비
          </h3>
        </Link>
        <div className="flex-1 flex justify-center">
          <input
            type="text"
            placeholder="검색..."
            className="
              m-[clamp(0.1rem,0.2vw,0.5rem)]
              text-[clamp(0.35rem,3vw,1rem)]
              w-[clamp(5rem,35vw,56rem)]
              bg-white 
              p-[clamp(0.5rem,0.5vw,1rem)] 
              rounded "
            onChange={e => setQuery(e.target.value)}
          />
        </div>

        <Link to="/login">
          <div
            className="
                bg-lime-200
                text-gray-700
                font-semibold
                text-[clamp(0.35rem,3vw,1rem)]
                p-[clamp(0.2rem,2vw,1.5rem)]
                ml-[clamp(0.2rem,0.5vw,1rem)]
                rounded-xs
                justify-end
            "
          >
            로그인
          </div>
        </Link>
        <Link to="/signin">
          <div
            className="
              bg-lime-200
              text-gray-700
                font-semibold
                text-[clamp(0.35rem,3vw,1rem)]
                p-[clamp(0.2rem,2vw,1.5rem)]
                mx-[clamp(0.3rem,0.5vw,1rem)]
                rounded-xs
                justify-end
            "
          >
            회원가입
          </div>
        </Link>
      </nav>
    </>
  );
}

export default NavBar;
