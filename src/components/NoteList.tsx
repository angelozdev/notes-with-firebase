import React from "react";
import { Note } from "./";
const initialNotes = [
  {
    id: 1,
    description: "nota uno",
  },
  {
    id: 2,
    description: "nota dos",
  },
];

function NoteList() {
  const [notes, setNotes] = React.useState(initialNotes);

  const removeNote = React.useCallback(
    (id: number) => {
      const newNotes = notes.filter((n) => n.id !== id);
      setNotes(newNotes);
    },
    [notes]
  );

  return (
    <ul>
      {notes.map(({ id, description }) => (
        <Note
          key={id}
          id={id}
          description={description}
          title="Mi title"
          removeNote={removeNote}
        />
      ))}
    </ul>
  );
}

export default NoteList;
