import { mockSubjects } from "@/mock/data";
import DeckBrowser from "../components/DeckBrowser";

export default function Home() {
  return (
    <DeckBrowser subjects={mockSubjects}/>
  );
}
