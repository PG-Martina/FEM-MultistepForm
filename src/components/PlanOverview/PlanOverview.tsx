import Bottombar from "../Bottombar/Bottombar";
import SmallCardList from "../CardList/SmallCardList";
import ToggleButton from "../ToggleButton/ToggleButton";
import classes from "./PlanOverview.module.scss";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../constants/Paths";

function PlanOverview() {
  const navigate = useNavigate();

  return (
    <div className={classes.planOverview}>
      <SmallCardList />
      <ToggleButton />
      <Bottombar
        hasNext
        hasPrev
        prevStep={Paths.Step1}
        submitHandler={() => navigate(`/${Paths.Step3}`)}
      />
    </div>
  );
}

export default PlanOverview;
