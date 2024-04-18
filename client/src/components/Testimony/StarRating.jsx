const StarRating = ({ rating }) => {
  const totalStars = 5;
  let fullStars = Math.floor(rating);
  let halfStars = Math.ceil(rating - fullStars);
  let emptyStars = totalStars - fullStars - halfStars;

  return (
    <div className="flex text-2xl">
      {Array.from({ length: fullStars }, (_, index) => (
        <i key={`full-${index}`} className="fas fa-star text-yellow-400"></i>
      ))}
      {halfStars > 0 && (
        <i key="half-1" className="fas fa-star-half-alt text-yellow-400"></i>
      )}
      {Array.from({ length: emptyStars }, (_, index) => (
        <i key={`empty-${index}`} className="far fa-star text-yellow-400"></i>
      ))}
    </div>
  );
};

export default StarRating;
