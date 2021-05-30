import { useCallback, useState } from "react";
import { Layout, NoteList, Wrapper, NoteForm } from "./components";
import { Note as INote } from "./types";

const initialNotes: INote[] = [
  {
    id: 1,
    description: "nota uno",
    title: "Title one",
  },
  {
    id: 2,
    description: "nota dos",
    title: "Title :D",
  },
];

function App() {
  const [notes, setNotes] = useState(initialNotes);

  const removeNote = useCallback(
    (id: number) => {
      const newNotes = notes.filter((n) => n.id !== id);
      setNotes(newNotes);
    },
    [notes]
  );

  const addANote = useCallback(
    (note: Omit<INote, "id">) => {
      const newNotes = notes.concat({ ...note, id: Date.now() });
      setNotes(newNotes);
    },
    [notes]
  );

  return (
    <Layout>
      <Wrapper>
        <NoteForm addANote={addANote} />
        <NoteList notes={notes} removeNote={removeNote} />
      </Wrapper>
    </Layout>
  );
}

export default App;
