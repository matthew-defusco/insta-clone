import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      welcome {user.username}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
