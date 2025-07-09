import type { ReactNode } from "react";
import type { TitleBoxComponent } from "./textTypes";

export interface StepType {
  id: number;
  name: string;
}

export interface StepComponent {
  step: StepType;
}

export interface StepOverviewComponent extends TitleBoxComponent {
  children?: ReactNode;
}

export interface PersonalFormComponent {
  name: string;
  email: string;
  phone: string;
}
