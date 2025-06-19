import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useNavigate } from "react-router";

export default function SearchInput({
  className,
}: React.InputHTMLAttributes<HTMLInputElement>) {
  const [searchParam, setSearchParam] = useState("");
  const debouncedParam = useDebounce(searchParam, 200);
  const navigate = useNavigate();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchParam(event.target.value);
  };

  useEffect(() => {
    navigate(`/search?searchParam=${debouncedParam}`);
  }, [debouncedParam, navigate]);

  return <input className={className} onChange={handleChange} />;
}
