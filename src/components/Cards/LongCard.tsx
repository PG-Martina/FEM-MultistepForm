import { useFormStore } from "../../store/formStore";
import type { LongCardComponent } from "../../types/cardTypes";
import classes from "./Cards.module.scss";

function LongCard({ addon }: LongCardComponent) {
  const { plan, addons, updateForm } = useFormStore();

  const handleClick = () => {
    if (addons.some((ad) => ad.title === addon.title)) {
      updateForm(
        "addons",
        addons.filter((ad) => ad.title !== addon.title)
      );
    } else {
      updateForm("addons", [...addons, addon]);
    }
  };
  return (
    <button
      className={`${classes.longCard} ${
        addons.length > 0 && addons.some((ad) => ad.title === addon.title)
          ? classes["longCard--active"]
          : undefined
      }`}
      onClick={handleClick}
    >
      <div className={classes.longCard__checkmark}></div>
      <div className={classes.longCard__info}>
        <span className={classes.longCard__title}>{addon.title}</span>
        <span className={classes.longCard__description}>
          {addon.description}
        </span>
      </div>
      {plan.monthly && (
        <span className={classes.longCard__price}>+${addon.priceMonth}/mo</span>
      )}
      {!plan.monthly && (
        <span className={classes.longCard__price}>+${addon.priceYear}/yr</span>
      )}
    </button>
  );
}

export default LongCard;
