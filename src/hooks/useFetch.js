import { useEffect } from "react";

export const useFetch = (
  apiFunc,
  deps = [],
  setData,
  setLoading,
  dataLabel = ""
) => {
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await apiFunc();
        setData(data);
        dataLabel && console.log(`${dataLabel} : `, data);
      } catch (error) {
        console.log(`${apiFunc} 실행 실패 : `, error);
        throw error;
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
