import { Link } from "react-router-dom";
import { Paths } from "../../constants/Paths";
import { useFormStore } from "../../store/formStore";
import classes from "./PriceOverview.module.scss";

function PriceOverview() {
  const { plan, addons } = useFormStore();
  const total =
    addons.reduce(
      (sum, addon) => (plan.monthly ? addon.priceMonth : addon.priceYear) + sum,
      0
    ) + (plan.monthly ? plan.priceMonth : plan.priceYear);
  return (
    <div className={classes.priceOverview}>
      <div className={classes.priceOverview__top}>
        <div className={classes.priceOverview__plan}>
          <div className={classes.priceOverview__planInfo}>
            <span className={classes.priceOverview__title}>
              {plan.title} {plan.monthly ? "(Monthly)" : "(Yearly)"}
            </span>
            <Link to={`/${Paths.Step2}`}>Change</Link>
          </div>
          <span className={classes.priceOverview__price}>
            {plan.monthly ? (
              <span>${plan.priceMonth}/mo</span>
            ) : (
              <span>${plan.priceYear}/yr</span>
            )}
          </span>
        </div>
        <ul className={classes.priceOverview__addons}>
          {addons.length > 0 ? (
            addons.map((addon) => (
              <li key={addon.title}>
                <span>{addon.title}</span>
                {plan.monthly ? (
                  <span>+${addon.priceMonth}</span>
                ) : (
                  <span>+${addon.priceYear}</span>
                )}
              </li>
            ))
          ) : (
            <span>No add-ons selected.</span>
          )}
        </ul>
      </div>
      <div className={classes.priceOverview__total}>
        <span>Total {plan.monthly ? "(per month)" : "(per year)"}</span>
        <span className={classes.priceOverview__priceTotal}>
          +${total} {plan.monthly ? "/mo" : "/yr"}
        </span>
      </div>
    </div>
  );
}

export default PriceOverview;
