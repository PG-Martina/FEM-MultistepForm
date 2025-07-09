import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PersonalFormSchema } from "./validations";
import type { PersonalFormComponent } from "../../types/stepTypes";
import InputBox from "../InputBox/InputBox";
import classes from "./PersonalForm.module.scss";
import Bottombar from "../Bottombar/Bottombar";
import { Paths } from "../../constants/Paths";
import { useFormStore } from "../../store/formStore";
import { useNavigate } from "react-router-dom";

function PersonalForm() {
  const { name, email, phone, updateForm } = useFormStore();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<PersonalFormComponent>({
    resolver: zodResolver(PersonalFormSchema),
    mode: "onSubmit",
    defaultValues: { name, email, phone },
  });

  const handleDataStore = (data: PersonalFormComponent) => {
    updateForm("name", data.name);
    updateForm("email", data.email);
    updateForm("phone", data.phone);
    navigate(`/${Paths.Step2}`);
  };

  return (
    <div className={classes.personalForm}>
      <form noValidate>
        <InputBox
          name="name"
          type="text"
          label="Name"
          register={register("name")}
          error={errors.name?.message}
          clearErrors={() => clearErrors("name")}
        />
        <InputBox
          name="email"
          type="text"
          label="Email"
          register={register("email")}
          error={errors.email?.message}
          clearErrors={() => clearErrors("email")}
        />
        <InputBox
          name="phone"
          type="text"
          label="Phone number"
          register={register("phone")}
          error={errors.phone?.message}
          clearErrors={() => clearErrors("phone")}
        />
      </form>
      <Bottombar
        hasNext={true}
        hasPrev={false}
        
        submitHandler={handleSubmit(handleDataStore)}
      />
    </div>
  );
}

export default PersonalForm;
