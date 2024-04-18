import React from 'react';

const AmenityCard = ({ item: { name, icon } }) => {
  return (
    <div className="p-5 lg:p-10 bg-gradient-to-tr from-indigo-800 to-indigo-900 rounded-2xl text-center">
      <i className={`${icon} text-white text-2xl md:text-4xl lg:text-6xl`} />
      <h3 className="text-white text-sm md:text-md lg:text-xl font-medium mt-4 lg:mt-8">
        {name}
      </h3>
    </div>
  );
};

export default AmenityCard;
