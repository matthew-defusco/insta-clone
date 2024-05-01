import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const auth = useAuth();

  return (
    <div>
      welcome {auth.user.username}
      <button>Logout</button>
    </div>
  );
};

export default Dashboard;
