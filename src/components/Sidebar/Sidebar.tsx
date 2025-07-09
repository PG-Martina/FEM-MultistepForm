import StepList from "../StepList/StepList";
import classes from "./Sidebar.module.scss";

function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <StepList />
    </div>
  );
}

export default Sidebar;
