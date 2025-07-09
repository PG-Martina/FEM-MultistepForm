import type { BottombarComponent } from "../../types/textTypes";
import classes from "./Bottombar.module.scss";
import buttons from "../../styles/Buttons.module.scss";
import { Link } from "react-router-dom";

function Bottombar({
  hasNext,
  hasPrev,
  prevStep,
  submitHandler,
}: BottombarComponent) {
  if (!hasNext && !hasPrev) return;
  return (
    <div className={classes.bottombar}>
      {hasPrev && prevStep && (
        <Link to={`/${prevStep}`} type="button" className={buttons.buttonGhost}>
          Go back
        </Link>
      )}
      {hasNext && (
        <button
          type="button"
          className={`${buttons.buttonFilled} ${classes.bottombar__next}`}
          onClick={submitHandler}
        >
          {hasNext && typeof hasNext === "string" ? hasNext : "Next step"}
        </button>
      )}
    </div>
  );
}

export default Bottombar;
