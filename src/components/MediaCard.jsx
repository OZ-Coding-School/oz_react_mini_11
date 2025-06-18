import { BASE_URL } from "../constant/index";

function MediaCard({ title, avg, imgSrc }) {
  return (
    <div className="w-[120px]">
      <img
        className="aspect-[0.7] object-cover"
        src={`${BASE_URL}${imgSrc}`}
        alt={title}
      />
      {/* <div>{title}</div>
      <div>{avg}</div> */}
    </div>
  );
}

export default MediaCard;
