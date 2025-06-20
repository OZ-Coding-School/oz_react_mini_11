import { BASE_URL } from "../constant/index";

function MediaCard({ title, imgSrc }) {
  return (
    <img
      className="aspect-[0.7] object-cover rounded-sm
      p-[0.2vw] white-space-nowrap"
      src={`${BASE_URL}${imgSrc}`}
      alt={title}
    />
  );
}

export default MediaCard;
