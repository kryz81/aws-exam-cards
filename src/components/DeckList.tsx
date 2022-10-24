import { Box, Container, Link } from "@cloudscape-design/components";
import { useNavigate } from "react-router-dom";
import { getDecks } from "../services/decks";

export default function DeckList() {
  const navigate = useNavigate();

  function startDeck(deckId: string) {
    return function () {
      navigate(`/learn/${deckId}`);
    };
  }

  return (
    <>
      {getDecks().map((item) => (
        <Box margin={{ bottom: "m" }}>
          <Container key={item.id}>
            <Link onFollow={startDeck(item.id)}>{item.title}</Link>
          </Container>
        </Box>
      ))}
    </>
  );
}
