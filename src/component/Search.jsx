import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Search() {
  const [searchParam] = useParams();
  const [filterData, setFilterData] = useState();
  const param = searchParam.get("movie"); //navbar에서 navigate로 생성된 쿼리스트링 movie의 값

  useEffect(() => {});
}
