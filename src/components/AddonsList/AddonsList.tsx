import LongCard from "../Cards/LongCard";
import classes from "./AddonsList.module.scss";

function AddonsList() {
  const addons = [
    {
      title: "Online service",
      description: "Access to multiplayer games",
      priceMonth: 1,
      priceYear: 10,
    },
    {
      title: "Larger storage",
      description: "Extra 1TB of cloud save",
      priceMonth: 2,
      priceYear: 20,
    },
    {
      title: "Customizable Profile",
      description: "Custom theme on your profile",
      priceMonth: 2,
      priceYear: 20,
    },
  ];
  return (
    <ul className={classes.addonsList}>
      {addons.map((addon) => (
        <li key={addon.title}>
          <LongCard addon={addon} />
        </li>
      ))}
    </ul>
  );
}

export default AddonsList;
