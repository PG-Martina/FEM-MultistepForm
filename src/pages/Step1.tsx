import { useEffect } from "react";
import { useFormStore } from "../store/formStore";
import StepOverview from "../components/StepOverview/StepOverview";
import PersonalForm from "../components/PersonalForm/PersonalForm";

function Step1() {
  const updateForm = useFormStore((state) => state.updateForm);

  useEffect(() => {
    updateForm("step", 1);
  }, [updateForm]);

  return (
    <StepOverview
      title="Personal info"
      description="Please provide your name, email address, and phone number."
    >
      <PersonalForm />
    </StepOverview>
  );
}

export default Step1;
