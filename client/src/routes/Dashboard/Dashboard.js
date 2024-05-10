import { Form } from "react-router-dom";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      welcome {user.username}
      <Form method="POST">
        <button type="submit">Logout</button>
      </Form>
    </div>
  );
};

export default Dashboard;
