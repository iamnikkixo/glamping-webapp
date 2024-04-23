const server = import.meta.env.VITE_BASE_URL;

const FacebookOAuth = () => {
  return (
    <button onClick={() => console.log('Facebook button pressed')}>
      <i
        className="fab fa-facebook text-blue-600 px-2 text-md"
        style={{ fontSize: '30px' }}
      />
    </button>
  );
};

export default FacebookOAuth;
