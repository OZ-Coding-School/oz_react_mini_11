const handleSearch = value => {
  navigate(`/searchresults?query=${value}`);
};

function SearchButton() {
  return (
    <div onClick={handleSearch} className="p-2 hover:bg-gray-200 rounded-full transition bg-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-gray-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
        />
      </svg>
    </div>
  );
}

export default SearchButton;
