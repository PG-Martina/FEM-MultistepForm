import { useNavigate } from "react-router-dom";
import { Paths } from "../../constants/Paths";
import AddonsList from "../AddonsList/AddonsList";
import Bottombar from "../Bottombar/Bottombar";
import classes from "./AddonsOverview.module.scss";

function AddonsOverview() {
  const navigate = useNavigate();
  return (
    <div className={classes.addonsOverview}>
      <AddonsList />
      <Bottombar
        hasNext
        hasPrev
        prevStep={Paths.Step2}
        submitHandler={() => navigate(`/${Paths.Step4}`)}
      />
    </div>
  );
}

export default AddonsOverview;
