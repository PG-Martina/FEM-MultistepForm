import type { Paths } from "../constants/Paths";

export type PathValue = (typeof Paths)[keyof typeof Paths];

export interface TitleBoxComponent {
  title: string;
  description?: string;
}

export interface BottombarComponent {
  hasNext?: boolean | string;
  hasPrev?: boolean;
  prevStep?: PathValue;
  submitHandler: () => void;
}
