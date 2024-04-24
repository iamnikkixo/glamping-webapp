const server = import.meta.env.VITE_BASE_URL;

const GoogleOAuth = () => {
  const handleLogin = () => {
    window.location.href = `${server}/api/users/auth/google/`;
  };

  return (
    <button onClick={handleLogin}>
      <i
        className="fab fa-google text-red-600 px-2"
        style={{ fontSize: '30px' }}
      />
    </button>
  );
};

export default GoogleOAuth;
