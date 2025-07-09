import { useEffect, useState } from "react";
import { useFormStore } from "../store/formStore";
import StepOverview from "../components/StepOverview/StepOverview";
import Summary from "../components/Summary/Summary";
import Success from "../components/Success/Success";

function Step4() {
  const updateForm = useFormStore((state) => state.updateForm);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    updateForm("step", 4);
  }, [updateForm]);

  return (
    <>
      {!isFinished && (
        <StepOverview
          title={isFinished ? "" : "Finishing up"}
          description={
            isFinished
              ? ""
              : "Double-check everything looks OK before confirming."
          }
        >
          <Summary setIsFinished={setIsFinished} />
        </StepOverview>
      )}
      {isFinished && <Success />}
    </>
  );
}

export default Step4;
