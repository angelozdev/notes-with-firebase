import { useCallback, useState } from "react";
import { Layout, NoteList, Wrapper, NoteForm } from "./components";
import { Note as INote } from "./types";
import { useEffect } from "react";
import { notesService } from "./services";

function App() {
  const [notes, setNotes] = useState<INote[]>([]);

  const removeNote = useCallback(async (id: string) => {
    await notesService.removeANoteById(id);
  }, []);

  const addANote = useCallback(async (note: Omit<INote, "id">) => {
    await notesService.addANewNote(note);
  }, []);

  useEffect(() => {
    const unsubcribe = notesService.getAllNotes(setNotes);

    return () => unsubcribe();
  }, []);

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
