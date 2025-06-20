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
      <nav className="flex bg-black bg-contain justify-around items-center">
        <Link to="/">
          <h3
            className="
              bg-lime-100
                font-extrabold
                text-4xl
                text-violet-500
                rounded-xs
                bg-cover
                m-[5px]
                p-3
            "
          >
            OZ 무비
          </h3>
        </Link>
        <input
          type="text"
          placeholder="검색..."
          className="
              bg-white
                m-[15px]
                rounded-s
                w-[50%]
                p-3
            "
          onChange={e => setQuery(e.target.value)}
        />

        <Link to="/login">
          <div
            className="
                bg-lime-200
                text-gray-800
                font-semibold
                text-[18px]
                p-3
                rounded-xs
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
                text-[18px]
                p-3
                rounded-xs
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
