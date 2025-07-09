import { useEffect } from "react";
import { useFormStore } from "../store/formStore";
import StepOverview from "../components/StepOverview/StepOverview";
import AddonsOverview from "../components/AddonsOverview/AddonsOverview";

function Step3() {
  const updateForm = useFormStore((state) => state.updateForm);

  useEffect(() => {
    updateForm("step", 3);
  }, [updateForm]);

  return (
    <StepOverview
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience."
    >
      <AddonsOverview />
    </StepOverview>
  );
}

export default Step3;
