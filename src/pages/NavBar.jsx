import { useNavigate } from 'react-router-dom';
/* import { useSearch } from '../components/SearchContext'; */
import useDebounce from '../hooks/useDebounce';
import { useEffect } from 'react';

export default function NavBar({ inputValue, setInputValue }) {
  /*
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue);

  const { setSearchTerm } = useSearch();
  const navigate = useNavigate();

  useEffect(() => {
    setSearchTerm(debouncedValue);
    navigate(`?query=${encodeURIComponent(debouncedValue)}`);
  }, [debouncedValue, navigate, setSearchTerm]);
  */

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const debouncedValue = useDebounce(inputValue);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`?query=${encodeURIComponent(debouncedValue)}`);
    console.log(inputValue);
  }, [debouncedValue, navigate]);

  return (
    <div className="flex items-center justify-between px-12 p-6 w-full bg-gray-950">
      <div className="flex">
        <h1 className="w-32 text-3xl font-semibold">OZ무비.</h1>
        <div className="hidden lg:block border border-gray-300/30 rounded px-3 py-2">
          <input
            type="text"
            value={inputValue}
            className="focus:outline-none w-[450px] bg-transparent caret-white"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex gap-4">
        <button>로그인</button>
        <button>회원가입</button>
      </div>
    </div>
  );
}
