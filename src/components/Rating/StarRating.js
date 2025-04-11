import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

export const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;

  return (
    <div className="flex text-[#E58E27]">
      {[...Array(fullStars)].map((_, i) => <FaStar key={i} />)}
      {halfStar && <FaStarHalfAlt />}
      {[...Array(5 - fullStars - (halfStar ? 1 : 0))].map((_, i) => <FaRegStar key={i} />)}
    </div>
  );
};
