import { useFormStore } from "../../store/formStore";
import type { SmallCardComponent } from "../../types/cardTypes";
import classes from "./Cards.module.scss";

function SmallCard({ card }: SmallCardComponent) {
  const { plan, updateForm } = useFormStore();
  const handleClick = () => {
    updateForm("plan", {
      title: card.title,
      monthly: plan.monthly,
      priceMonth: card.priceMonth,
      priceYear: card.priceYear,
    });
  };
  return (
    <button
      type="button"
      className={`${classes.smallCard} ${
        card.title === plan.title ? classes["smallCard--active"] : undefined
      }`}
      onClick={handleClick}
    >
      <img src={card.icon} alt="Descorative icon" />
      <div className={classes.smallCard__info}>
        <span className={classes.smallCard__title}>{card.title}</span>
        {plan.monthly && (
          <span className={classes.smallCard__price}>
            ${card.priceMonth}/mo
          </span>
        )}
        {!plan.monthly && (
          <>
            <span className={classes.smallCard__price}>
              ${card.priceYear}/yr
            </span>
            <span className={classes.smallCard__deal}>{card.deal}</span>
          </>
        )}
      </div>
    </button>
  );
}

export default SmallCard;
