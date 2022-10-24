import { Deck } from "../types/deck";
import data from "../data/decks.json";

export function getDecks(): Array<Deck> {
  return data as Deck[];
}

export function getDeckDetails(deckId: string): Deck {
  const deck = data.find((deck) => deck.id === deckId);

  if (deck === undefined) {
    throw new Error(`Deck with ID ${deckId} not found`);
  }

  return deck as Deck;
}
