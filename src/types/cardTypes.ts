import type { Addon } from "./formTypes";

export interface Card {
  icon?: string;
  title: string;
  priceMonth: number;
  priceYear: number;
  deal?: string;
}

export interface LongCardComponent {
  addon: Addon;
}

export interface SmallCardComponent {
  card: Card;
}
