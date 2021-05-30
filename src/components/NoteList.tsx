import { Fragment } from "react";
import { Note } from "./";
import { Note as INote } from "../types";

interface Props {
  removeNote: (id: number) => void;
  notes: INote[];
}

function NoteList({ removeNote, notes }: Props) {
  return (
    <Fragment>
      <h1 className="text-2xl font-semibold mb-3">
        My notes <span>({notes.length})</span>
      </h1>

      <ul>
        {notes.map(({ id, description, title }) => (
          <Note
            key={id}
            id={id}
            description={description}
            title={title}
            removeNote={removeNote}
          />
        ))}
      </ul>
    </Fragment>
  );
}

export default NoteList;
