import StarRating from './StarRating';

const TestimonyCard = ({ item: { name, image, testimony, date, rating } }) => {
  return (
    <div className=" bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 hover:border-orange-500 mx-4">
      <div className="flex items-center gap-5 mb-5 sm:mb-9">
        <img
          src={image}
          alt={name}
          className="rounded-full h-20 w-20 object-cover"
        />
        <div className="grid gap-1 ">
          <h5 className="text-gray-900 font-medium">{name}</h5>
          <span className="text-sm leading-6 text-gray-500">{date}</span>
        </div>
      </div>
      <div className="flex items-center mb-5 sm:mb-9 gap-2 text-amber-500">
        <StarRating rating={rating} />
      </div>
      <p className="text-sm text-gray-500 leading-6 transition-all duration-500 min-h-24 group-hover:text-gray-800">
        {testimony}
      </p>
    </div>
  );
};

export default TestimonyCard;
