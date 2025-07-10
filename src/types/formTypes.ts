import type { UseFormRegisterReturn } from "react-hook-form";
import type { PersonalFormComponent } from "./stepTypes";
import type { Card } from "./cardTypes";

export interface FormTypes extends PersonalFormComponent {
  step: number;
  plan: PlanType;
  addons: Addon[];
  updateForm: <K extends keyof Omit<FormTypes, "updateForm">>(
    key: K,
    value: FormTypes[K]
  ) => void;
}

export interface InputBoxComponent {
  name: string;
  label: string;
  type: string;
  error?: string;
  register: UseFormRegisterReturn;
  clearErrors: () => void;
  placeholder?: string;
}

interface PlanType extends Card {
  monthly: boolean;
}

export interface Addon {
  title: string;
  description: string;
  priceMonth: number;
  priceYear: number;
}
