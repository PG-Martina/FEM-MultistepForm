import type { StepType } from "../../types/stepTypes";
import Step from "../Step/Step";
import classes from "./StepList.module.scss";

function StepList() {
  const steps: StepType[] = [
    { id: 1, name: "Your info" },
    { id: 2, name: "Select plan" },
    { id: 3, name: "Add-ons" },
    { id: 4, name: "Summary" },
  ];
  return (
    <ul className={classes.stepList}>
      {steps.map((step) => (
        <li key={step.id} className={classes.stepList__item}>
          <Step step={step} />
        </li>
      ))}
    </ul>
  );
}

export default StepList;
