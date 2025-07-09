import { create } from "zustand";
import type { FormTypes } from "../types/formTypes";

export const useFormStore = create<FormTypes>()((set) => ({
  step: 1,
  name: "",
  email: "",
  phone: "",
  plan: { title: "Arcade", priceMonth: 9, priceYear: 90, monthly: true },
  addons: [],
  updateForm: (field: keyof FormTypes, value: FormTypes[typeof field]) => {
    set((state) => ({ ...state, [field]: value }));
  },
}));
