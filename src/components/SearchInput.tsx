import { useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useNavigate } from "react-router";
import useSearchParamStore from "../hooks/zustand/useSearchParamStore";

export default function SearchInput({
  className,
}: React.InputHTMLAttributes<HTMLInputElement>) {
  const searchParam = useSearchParamStore((state) => state.searchParam);
  const updateSearchParam = useSearchParamStore(
    (state) => state.updateSearchParam
  );

  const debouncedParam = useDebounce(searchParam, 200);
  const navigate = useNavigate();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    updateSearchParam(event.target.value);
  };

  useEffect(() => {
    if (searchParam.length > 0) {
      navigate(`/search?searchParam=${debouncedParam}`);
    }
  }, [debouncedParam, navigate, searchParam]);

  return <input className={className} onChange={handleChange} />;
}
