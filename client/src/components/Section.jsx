const Section = ({
  className,
  id,
  customPaddings,
  children,
  backgroundImage,
  height
}) => {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: `${height ? '100vh' : null}`,
  };

  return (
    <div
      id={id}
      className={`relative ${customPaddings || `py-10 lg:py-16 xl:py-20`} ${
        className || ''
      }`}
      style={backgroundImage ? sectionStyle : {}}
    >
      {children}
    </div>
  );
};

export default Section;
