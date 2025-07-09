import type { StepOverviewComponent } from "../../types/stepTypes";
import TitleBox from "../TitleBox/TitleBox";
import classes from "./StepOverview.module.scss";

function StepOverview({ children, title, description }: StepOverviewComponent) {
  return (
    <div className={classes.stepOverview}>
      <TitleBox title={title} description={description || undefined} />
      {children && (
        <div className={classes.stepOverview__content}>{children}</div>
      )}
    </div>
  );
}

export default StepOverview;
