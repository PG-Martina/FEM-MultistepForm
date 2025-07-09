import { Outlet } from "react-router-dom";
import classes from "./Layout.module.scss";
import Sidebar from "../Sidebar/Sidebar";

function Layout() {
  return (
    <div className={classes.layout}>
      <div className={classes.layout__box}>
        <div className={classes.layout__left}>
          <Sidebar />
        </div>
        <div className={classes.layout__right}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
