import { Outlet } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";

const UserLayout = () => {
  return (
    <div style={{ width: "100%" }}>
      <Header />
      <Navigation />
      <Outlet />
    </div>
  );
};

export default UserLayout;
