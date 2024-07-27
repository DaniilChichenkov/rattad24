import { Outlet } from "react-router-dom";

import { Navigation, SideMenu } from "../components";

const RootLayout = () => {
  return (
    <div>
      <SideMenu />
      <Navigation />
      <Outlet />
    </div>
  );
};

export default RootLayout;
