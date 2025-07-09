import { useEffect } from "react";
import { useFormStore } from "../store/formStore";
import StepOverview from "../components/StepOverview/StepOverview";
import PlanOverview from "../components/PlanOverview/PlanOverview";

function Step2() {
  const updateForm = useFormStore((state) => state.updateForm);

  useEffect(() => {
    updateForm("step", 2);
  }, [updateForm]);
  return (
    <StepOverview
      title="Select your plan"
      description="You have the option of monthly or yearly billing."
    >
      <PlanOverview />
    </StepOverview>
  );
}

export default Step2;
