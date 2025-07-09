import { Paths } from "../../constants/Paths";
import Bottombar from "../Bottombar/Bottombar";
import PriceOverview from "../PriceOverview/PriceOverview";
import classes from "./Summary.module.scss";

interface SummaryProps {
  setIsFinished: (isFinished: boolean) => void;
}

function Summary({ setIsFinished }: SummaryProps) {
  return (
    <div className={classes.summary}>
      <PriceOverview />
      <Bottombar
        prevStep={Paths.Step3}
        hasPrev
        hasNext="Confirm"
        submitHandler={() => setIsFinished(true)}
      />
    </div>
  );
}

export default Summary;
