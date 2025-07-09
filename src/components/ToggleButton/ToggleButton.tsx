import { useFormStore } from "../../store/formStore";
import classes from "./ToggleButton.module.scss";

function ToggleButton() {
  const { plan, updateForm } = useFormStore();
  const handleButtonClick = () => {
    updateForm("plan", { ...plan, monthly: !plan.monthly });
  };
  return (
    <div
      className={`${classes.toggleButton} ${
        plan?.monthly === false ? classes["toggleButton--toggle"] : undefined
      }`}
    >
      <span>Monthly</span>
      <button
        type="button"
        className={`${classes.toggleButton__button} ${
          plan?.monthly === false
            ? classes["toggleButton__button--toggle"]
            : undefined
        }`}
        onClick={handleButtonClick}
      ></button>
      <span>Yearly</span>
    </div>
  );
}

export default ToggleButton;
