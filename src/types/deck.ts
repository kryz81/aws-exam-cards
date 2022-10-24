import { Card } from "./card";

export interface Deck {
  id: string;
  title: string;
  cards: ReadonlyArray<Card>;
}
