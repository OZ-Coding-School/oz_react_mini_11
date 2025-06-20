import { BASE_URL } from "../constant/index";

function MediaCard({ title, imgSrc }) {
  return (
    <img
      className="max-w-[200px] aspect-[0.7] object-cover rounded-sm"
      src={`${BASE_URL}${imgSrc}`}
      alt={title}
    />
  );
}

export default MediaCard;
