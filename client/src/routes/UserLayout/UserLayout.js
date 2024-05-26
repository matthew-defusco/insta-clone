import { Form, Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth";
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";

const UserLayout = () => {
  const { user } = useAuth();

  return (
    <div style={{ width: "100%" }}>
      <Header />
      <Navigation />
      welcome {user.username}
      <Form method="POST" action="/logout">
        <button type="submit">Logout</button>
      </Form>
      <Outlet />
    </div>
  );
};

export default UserLayout;
