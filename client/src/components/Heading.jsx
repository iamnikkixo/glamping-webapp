import React from 'react';

const Heading = ({ className, title }) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
      {title && (
        <h1 className="text-4xl font-semibold font-poppins text-gray-800">
          {title}
        </h1>
      )}
    </div>
  );
};

export default Heading;
