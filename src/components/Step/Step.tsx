import { useFormStore } from "../../store/formStore";
import type { StepComponent } from "../../types/stepTypes";
import classes from "./Step.module.scss";

function Step({ step }: StepComponent) {
  const currentStep = useFormStore((state) => state.step);

  return (
    <div
      className={`${classes.step} ${
        step.id === currentStep && classes["step--active"]
      }`}
    >
      <span className={classes.step__number}>{step.id}</span>
      <div className={classes.step__info}>
        <span className={classes.step__counter}>Step {step.id}</span>
        <span className={classes.step__title}>{step.name}</span>
      </div>
    </div>
  );
}

export default Step;
