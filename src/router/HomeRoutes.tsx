import { Home } from "../pages/Home";
import { Page404 } from "../pages/Page404";
import { Setting } from "../pages/Setting";
import { UserManagement } from "../pages/UserManagement";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/user_managament",
    exact: false,
    children: <UserManagement />
  },
  {
    path: "/setting",
    exact: false,
    children: <Setting />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  }
];
