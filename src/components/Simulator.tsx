import { Badge, Box, Button } from "@cloudscape-design/components";
import { useEffect, useState } from "react";
import { Deck } from "../types/deck";
import { Card } from "../types/card";
import { getDeckDetails } from "../services/decks";

interface SimulatorProps {
  deckId: Deck["id"];
}

export default function Simulator({ deckId }: SimulatorProps) {
  const [deck, setDeck] = useState<Deck>();
  const [cards, setCards] = useState<ReadonlyArray<Card>>([]);

  useEffect(() => {
    setDeck(getDeckDetails(deckId));
    import(`../data/${deckId}.json`).then((data) => setCards(data));
  }, [deckId]);

  if (!deck) {
    return null;
  }

  return (
    <Box textAlign="center">
      <h3>{deck.title}</h3>
      <p>
        <Badge color="green">{cards.length} cards</Badge>
      </p>
      <p>Practice all or choose from the tags below:</p>
      <Box margin={{ top: "l" }}>
        <Button variant="primary">Practice!</Button>
      </Box>
    </Box>
  );
}
