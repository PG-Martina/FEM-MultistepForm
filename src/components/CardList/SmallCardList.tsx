import classes from "./CardList.module.scss";
import arcade from "../../assets/icon-arcade.svg";
import advanced from "../../assets/icon-advanced.svg";
import pro from "../../assets/icon-pro.svg";
import SmallCard from "../Cards/SmallCard";

function SmallCardList() {
  const cards = [
    {
      icon: arcade,
      title: "Arcade",
      priceMonth: 9,
      priceYear: 90,
      deal: "2 months free",
    },
    {
      icon: advanced,
      title: "Advanced",
      priceMonth: 12,
      priceYear: 120,
      deal: "2 months free",
    },
    {
      icon: pro,
      title: "Pro",
      priceMonth: 15,
      priceYear: 150,
      deal: "2 months free",
    },
  ];
  return (
    <ul className={classes.smallCardList}>
      {cards.map((card) => (
        <li key={card.title} className={classes.smallCardList__item}>
          <SmallCard card={card} />
        </li>
      ))}
    </ul>
  );
}

export default SmallCardList;
