import type { InputBoxComponent } from "../../types/formTypes";
import classes from "./InputBox.module.scss";

function InputBox({
  name,
  label,
  type,
  error,
  clearErrors,
  register,
  placeholder,
}: InputBoxComponent) {
  return (
    <div className={classes.inputBox}>
      <div className={classes.inputBox__header}>
        <label htmlFor={name} className={classes.inputBox__label}>
          {label}
        </label>
        {error && <span className={classes.inputBox__error}>{error}</span>}
      </div>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register}
        onInput={() => clearErrors()}
        className={`${classes.inputBox__input} ${
          error ? classes["inputBox__input--error"] : undefined
        }`}
      />
    </div>
  );
}

export default InputBox;
