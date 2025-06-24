import { useEffect, useState, useRef } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";
import { fetchSearchMovies } from "../api/movieApi";

const NavBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { darkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const query = searchParams.get("query") || "";
  const [input, setInput] = useState(query);
  const debouncedSearch = useDebounce(input, 500);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionRef = useRef(null);

  useEffect(() => {
    const currentQuery = searchParams.get("query") || "";
    setInput(currentQuery);
  }, [searchParams]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const trimmed = input.trim();
      if (trimmed) {
        setSearchParams({ query: trimmed });
        setShowSuggestions(false);
      } else {
        setSearchParams({});
        setShowSuggestions(false);
      }
    }
  };

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!debouncedSearch.trim()) {
        setSuggestions([]);
        return;
      }
      try {
        const results = await fetchSearchMovies(debouncedSearch);
        const sorted = results
          .filter((movie) =>
            movie.title?.toLowerCase().includes(debouncedSearch.toLowerCase())
          )
          .sort((a, b) => b.vote_average - a.vote_average);
        setSuggestions(sorted.slice(0, 5));
        setShowSuggestions(true);
      } catch (e) {
        console.error("추천 영화 로드 실패", e);
        setSuggestions([]);
      }
    };
    fetchSuggestions();
  }, [debouncedSearch]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        suggestionRef.current &&
        !suggestionRef.current.contains(e.target)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        backgroundColor: darkMode ? "#1a202c" : "#ffffff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        padding: "16px 24px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "12px",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          fontSize: "1.25rem",
          color: darkMode ? "#f7fafc" : "#1a202c",
        }}
      >
        🎬 OZMovie
      </div>

      <div style={{ flex: 1, textAlign: "center", minWidth: "100%", position: "relative" }} ref={suggestionRef}>
        <input
          type="text"
          placeholder="영화 검색..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={handleKeyDown}
          style={{
            width: "100%",
            maxWidth: "600px",
            padding: "8px 16px",
            borderRadius: "9999px",
            border: "none",
            backgroundColor: darkMode ? "#2d3748" : "#f3f4f6",
            color: darkMode ? "#f7fafc" : "#000000",
            outline: "none",
            fontSize: "1rem",
          }}
          onFocus={() => {
            if (suggestions.length > 0) setShowSuggestions(true);
          }}
        />

        {showSuggestions && suggestions.length > 0 && (
          <ul
            style={{
              position: "absolute",
              top: "48px",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: darkMode ? "#2d3748" : "#ffffff",
              opacity: 0.9,
              border: "1px solid #ccc",
              borderRadius: "8px",
              width: "100%",
              maxWidth: "600px",
              zIndex: 999,
              padding: "8px 0",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              marginTop: "4px",
              listStyle: "none",
            }}
          >
            {suggestions.map((movie) => (
              <li
                key={movie.id}
                onClick={() => {
                  setShowSuggestions(false);
                  const trimmed = input.trim();
                  setSearchParams({ query: trimmed });
                  navigate(`/movie/${movie.id}?query=${trimmed}`);
                }}
                style={{
                  padding: "8px 16px",
                  cursor: "pointer",
                  color: darkMode ? "#f7fafc" : "#1a202c",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = darkMode ? "#4a5568" : "#f3f4f6")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                {movie.title}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div
        style={{
          flex: "1 1 250px",
          display: "flex",
          gap: "12px",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "flex-end",
        }}
      >
        <button
          style={{
            padding: "8px 16px",
            borderRadius: "9999px",
            fontSize: "0.875rem",
            fontWeight: "500",
            backgroundColor: "#2563eb",
            color: "#ffffff",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#1e40af")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#2563eb")
          }
        >
          로그인
        </button>
        <button
          style={{
            padding: "8px 16px",
            borderRadius: "9999px",
            fontSize: "0.875rem",
            fontWeight: "500",
            backgroundColor: "#16a34a",
            color: "#ffffff",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#15803d")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#16a34a")
          }
        >
          회원가입
        </button>
        <button
          onClick={toggleTheme}
          style={{
            padding: "8px 16px",
            borderRadius: "9999px",
            fontSize: "0.875rem",
            fontWeight: "500",
            backgroundColor: darkMode ? "#4a5568" : "#e5e7eb",
            color: darkMode ? "#f7fafc" : "#1f2937",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = darkMode
              ? "#2d3748"
              : "#d1d5db")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = darkMode
              ? "#4a5568"
              : "#e5e7eb")
          }
        >
          {darkMode ? "☀️ 라이트모드" : "🌙 다크모드"}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
