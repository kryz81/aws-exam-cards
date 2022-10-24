import { useParams } from "react-router-dom";
import Simulator from "../components/Simulator";

export default function Learn() {
  const { deckId } = useParams();
  if (deckId === undefined) {
    return null;
  }
  return <Simulator deckId={deckId} />;
}
