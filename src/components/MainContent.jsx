import Entry from "./Entry";
import data from "../data";
export default function MainContent() {
    const entryElements = data.map((entry) => <Entry key={entry.id} {...entry} />);
    return (
       <main>
             {entryElements}
       </main>
    );
}