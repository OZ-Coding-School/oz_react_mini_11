import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";

export default function useSearchRouting() {
  const [inputDebounce, setInputDebounce] = useState("");
  const debouncedValue = useDebounce(inputDebounce);
  const [_, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/search") {
      if (debouncedValue.trim()) {
        navigate(`/search?keyword=${debouncedValue}`);
        console.log("keyword: ", debouncedValue);
      } else {
        navigate("/");
      }
    }
  }, [debouncedValue, setSearchParams, navigate, location.pathname]);

  return { inputDebounce, setInputDebounce };
}
