import { BASE_URL } from '../constant';

function MediaCard({ title, imgSrc }) {
  return (
    <img
      className="aspect-[0.7] object-cover rounded-sm"
      src={`${BASE_URL}${imgSrc}`}
      alt={title}
    />
  );
}

export default MediaCard;
