import { useNavigate } from 'react-router'

const Index = () => {
    const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <button onClick={handleLogout} className="cursor-pointer">
        <img
          src="/assets/icons/logout.svg"
          alt="logout"
          className="size-8"
        />
      </button>
    </div>
  )
}

export default Index
