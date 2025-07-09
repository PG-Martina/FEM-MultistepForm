import type { TitleBoxComponent } from "../../types/textTypes";
import classes from "./TitleBox.module.scss";

function TitleBox({ title, description }: TitleBoxComponent) {
  return (
    <div className={classes.titleBox}>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
}

export default TitleBox;
