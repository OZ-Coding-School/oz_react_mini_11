import { FaStar, FaRegStar } from "react-icons/fa";

export function StarRating({ score }) {
  const total = 10;
  const filled = Math.round(score);
  const stars = [];

  for (let i = 1; i <= total; i++) {
    stars.push(
      i <= filled ? (
        <FaStar key={i} className="text-yellow-400" />
      ) : (
        <FaRegStar key={i} className="text-gray-300" />
      )
    );
  }

  return <div className="flex space-x-1">{stars}</div>;
}
