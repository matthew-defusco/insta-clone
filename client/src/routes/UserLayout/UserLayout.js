import { Form, Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth";

const UserLayout = () => {
  const { user } = useAuth();

  return (
    <div>
      welcome {user.username}
      <Form method="POST">
        <button type="submit">Logout</button>
      </Form>
      <Outlet />
    </div>
  );
};

export default UserLayout;
