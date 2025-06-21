import { useEffect, useState } from 'react';

export default function useDebounce(value) {
  const [searchValue, setSearchValue] = useState();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSearchValue(value);
    }, 300);

    return () => clearTimeout(timeOut);
  }, [value]);

  return searchValue;
}
