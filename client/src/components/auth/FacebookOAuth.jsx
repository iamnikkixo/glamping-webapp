const server = import.meta.env.VITE_BASE_URL;

const FacebookOAuth = () => {
  const handleLogin = () => {
    window.location.href = `${server}/api/users/auth/facebook`;
  };

  return (
    <button onClick={handleLogin}>
      <i
        className="fab fa-facebook text-blue-600 px-2 text-md"
        style={{ fontSize: '30px' }}
      />
    </button>
  );
};

export default FacebookOAuth;
