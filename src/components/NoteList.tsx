import { Fragment, useEffect, useState } from "react";
import { Note } from "./";
import { NoteFromServer } from "../types";
import { notesService } from "../services";

function NoteList() {
  const [notes, setNotes] = useState<NoteFromServer[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const unsubcribe = notesService.getAllNotes((notes) => {
      setNotes(notes);
      setIsLoading(false);
    });

    return () => unsubcribe();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Fragment>
      <h1 className="text-2xl font-semibold mb-3">
        My notes <span>({notes.length})</span>
      </h1>

      <ul>
        {notes.map(({ id, description, title, createAt }) => (
          <Note
            createAt={createAt}
            key={id}
            id={id}
            description={description}
            title={title}
          />
        ))}
      </ul>
    </Fragment>
  );
}

export default NoteList;
