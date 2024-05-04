import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    // logout();
    const res = await fetch("http://localhost:3000/api/logout", {
      method: "POST",
    });
    const data = await res.json();
    console.log(data);
  };

  const handleClick = async () => {
    const res = await fetch("http://localhost:3000/api/session", {
      credentials: "include",
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      welcome {user.username}
      <button onClick={handleLogout}>Logout</button>
      <button onClick={handleClick}>Check session</button>
    </div>
  );
};

export default Dashboard;
